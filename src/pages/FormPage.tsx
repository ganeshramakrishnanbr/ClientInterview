import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { FormSection } from '../components/form/FormSection';
import { FormProgress } from '../components/layout/FormProgress';
import { useFormStore } from '../stores/formStore';
import { fetchForm } from '../services/formService';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

export const FormPage: React.FC = () => {
  const { formId = 'medical-history-form', applicationId } = useParams<{ formId?: string, applicationId?: string }>();
  const navigate = useNavigate();
  
  const { 
    activeForm, 
    currentSection, 
    setForm, 
    nextSection, 
    prevSection, 
    goToSection,
    loading, 
    error,
    loadProgress,
    submitForm,
    saveProgress
  } = useFormStore();

  useEffect(() => {
    const loadFormData = async () => {
      try {
        const form = await fetchForm(formId);
        setForm(form);
        
        if (applicationId) {
          await loadProgress(applicationId);
        }
      } catch (error) {
        console.error("Error loading form:", error);
      }
    };
    
    loadFormData();
  }, [formId, applicationId, setForm, loadProgress]);

  const handleSubmitForm = async () => {
    try {
      let currentApplicationId = applicationId;
      if (!currentApplicationId) {
        // Create a new application first
        currentApplicationId = await saveProgress();
      }
      await submitForm();
      navigate('/submission-success');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="h-screen flex justify-center items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
          <span className="ml-4 text-lg font-medium text-gray-700">Loading...</span>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <ExclamationCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error loading form</h3>
                <p className="mt-2 text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  if (!activeForm) {
    return (
      <Layout>
        <div className="h-screen flex justify-center items-center">
          <p className="text-lg font-medium text-gray-700">Loading form...</p>
        </div>
      </Layout>
    );
  }

  const isFirstSection = currentSection === 0;
  const isLastSection = currentSection === activeForm.sections.length - 1;

  return (
    <Layout>
      <div className="py-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{activeForm.title}</h1>
        
        <FormProgress 
          sections={activeForm.sections} 
          currentSectionIndex={currentSection}
          onSectionClick={goToSection}
        />
        
        <FormSection
          section={activeForm.sections[currentSection]}
          onNext={isLastSection ? handleSubmitForm : nextSection}
          onPrev={prevSection}
          isFirstSection={isFirstSection}
          isLastSection={isLastSection}
        />
      </div>
    </Layout>
  );
};