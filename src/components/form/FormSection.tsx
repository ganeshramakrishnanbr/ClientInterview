import React from 'react';
import { FormSection as FormSectionType, Question, FormResponse } from '../../types';
import { QuestionRenderer } from './QuestionRenderer';
import { useFormStore, shouldShowQuestion } from '../../stores/formStore';
import { SectionHeader } from './SectionHeader';

interface FormSectionProps {
  section: FormSectionType;
  onNext: () => void;
  onPrev: () => void;
  isFirstSection: boolean;
  isLastSection: boolean;
}

export const FormSection: React.FC<FormSectionProps> = ({
  section,
  onNext,
  onPrev,
  isFirstSection,
  isLastSection
}) => {
  const { responses, setResponse } = useFormStore();
  
  const visibleQuestions = section.questions.filter(
    question => shouldShowQuestion(question, responses)
  );

  const handleResponseChange = (questionId: string, answer: string | string[] | Record<string, string>) => {
    setResponse(questionId, answer);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };
  
  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      <SectionHeader title={section.title} />
      
      <div className="space-y-6">
        {visibleQuestions.map((question: Question) => (
          <QuestionRenderer
            key={question.id}
            question={question}
            response={responses[question.id]}
            onChange={handleResponseChange}
          />
        ))}
      </div>
      
      <div className="mt-8 pt-5 border-t border-gray-200 flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirstSection}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            isFirstSection
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-white text-blue-700 border border-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
          }`}
        >
          Previous
        </button>
        
        <div>
          <button
            type="button"
            onClick={() => useFormStore.getState().saveProgress()}
            className="mr-3 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 border-blue-300"
          >
            Save Progress
          </button>
          
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLastSection ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </form>
  );
};