import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { FormResponse, MedicalForm, FormSection, Question } from '../types';
import { db } from '../db';

interface FormState {
  activeForm: MedicalForm | null;
  currentSection: number;
  responses: Record<string, FormResponse>;
  loading: boolean;
  error: string | null;
  applicationId: string | null;
  
  // Actions
  setForm: (form: MedicalForm) => void;
  nextSection: () => void;
  prevSection: () => void;
  goToSection: (index: number) => void;
  setResponse: (questionId: string, answer: string | string[] | Record<string, string>) => void;
  saveProgress: () => Promise<string>;
  loadProgress: (applicationId: string) => Promise<void>;
  submitForm: () => Promise<void>;
  resetForm: () => void;
}

export const useFormStore = create<FormState>()(
  immer((set, get) => ({
    activeForm: null,
    currentSection: 0,
    responses: {},
    loading: false,
    error: null,
    applicationId: null,

    setForm: (form) => {
      set((state) => {
        state.activeForm = form;
        state.currentSection = 0;
      });
    },

    nextSection: () => {
      set((state) => {
        const { activeForm, currentSection } = state;
        if (activeForm && currentSection < activeForm.sections.length - 1) {
          state.currentSection += 1;
        }
      });
    },

    prevSection: () => {
      set((state) => {
        if (state.currentSection > 0) {
          state.currentSection -= 1;
        }
      });
    },

    goToSection: (index) => {
      set((state) => {
        const { activeForm } = state;
        if (activeForm && index >= 0 && index < activeForm.sections.length) {
          state.currentSection = index;
        }
      });
    },

    setResponse: (questionId, answer) => {
      set((state) => {
        state.responses[questionId] = {
          questionId,
          answer
        };
      });
    },

    saveProgress: async () => {
      const { responses, activeForm, applicationId } = get();
      if (!activeForm) throw new Error("No active form");

      set({ loading: true, error: null });

      try {
        const id = await db.saveFormProgress({
          id: applicationId || undefined,
          userId: 'current-user', // This should come from authentication
          formId: activeForm.id,
          responses,
          status: 'draft'
        });

        set((state) => {
          state.applicationId = id;
          state.loading = false;
        });

        return id;
      } catch (error) {
        set({
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        });
        throw error;
      }
    },

    loadProgress: async (applicationId) => {
      set({ loading: true, error: null });

      try {
        if (!applicationId) {
          set((state) => {
            state.loading = false;
          });
          return;
        }
        
        const application = await db.getFormProgress(applicationId);
        if (!application) {
          set((state) => {
            state.loading = false;
          });
          return;
        }

        set((state) => {
          state.responses = application.responses;
          state.applicationId = applicationId;
          state.loading = false;
        });
      } catch (error) {
        set({
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        });
        throw error;
      }
    },

    submitForm: async () => {
      const { applicationId } = get();
      if (!applicationId) throw new Error("No application to submit");

      set({ loading: true, error: null });

      try {
        await db.submitApplication(applicationId);
        set((state) => {
          state.loading = false;
        });
      } catch (error) {
        set({
          loading: false,
          error: error instanceof Error ? error.message : 'Unknown error occurred'
        });
        throw error;
      }
    },

    resetForm: () => {
      set({
        responses: {},
        currentSection: 0,
        applicationId: null,
        error: null
      });
    }
  }))
);

// Helper functions to check if questions are visible based on conditional logic
export const shouldShowQuestion = (question: Question, responses: Record<string, FormResponse>): boolean => {
  if (!question.conditionalId) return true;
  
  const conditionResponse = responses[question.conditionalId];
  if (!conditionResponse) return false;
  
  if (Array.isArray(question.conditionalValue)) {
    return Array.isArray(conditionResponse.answer) 
      ? question.conditionalValue.some(val => conditionResponse.answer.includes(val))
      : question.conditionalValue.includes(conditionResponse.answer as string);
  }
  
  if (typeof conditionResponse.answer === 'object' && !Array.isArray(conditionResponse.answer)) {
    // For complex grid responses
    return Object.values(conditionResponse.answer).some(
      val => val === question.conditionalValue
    );
  }
  
  return conditionResponse.answer === question.conditionalValue;
};

export const getVisibleQuestions = (section: FormSection, responses: Record<string, FormResponse>): Question[] => {
  return section.questions.filter(q => shouldShowQuestion(q, responses));
};