import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useFormStore } from '../stores/formStore';

export const SubmissionSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { responses } = useFormStore();
  const [showJson, setShowJson] = useState(false);
  
  // Format the JSON for display
  const formattedJson = JSON.stringify(responses, null, 2);
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">Application submitted successfully</h3>
              <div className="mt-2 text-sm text-green-700">
                <p>Thank you for completing your medical interview. Your information has been successfully submitted.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">What's Next?</h2>
            <p className="mt-4 text-lg text-gray-500">
              Our underwriting team will review your medical interview information. You may be contacted for additional information or to schedule a medical examination if required.
            </p>
          </div>
          
          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">Next Steps</h3>
            <div className="mt-5 border-t border-gray-200">
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Application Review</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Your application will be reviewed by our underwriting team within 3-5 business days.
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Medical Examination</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    If needed, you will be contacted to schedule a medical examination with one of our approved healthcare providers.
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Decision</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    Once all required information is received, we will make a decision on your application and notify you of the outcome.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-200 pt-6">
          <button
            onClick={() => setShowJson(!showJson)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {showJson ? 'Hide' : 'Show'} JSON Data
          </button>
          
          {showJson && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md overflow-auto max-h-96">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Form Response JSON (with Source Mapping IDs)</h4>
              <pre className="text-xs text-gray-700 whitespace-pre-wrap">{formattedJson}</pre>
            </div>
          )}
        </div>
        
        <div className="mt-10">
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};