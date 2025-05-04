import React from 'react';
import { Layout } from '../components/layout/Layout';
import { QuestionMarkCircleIcon, InformationCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export const HelpPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Help & Information</h1>
          
          <div className="space-y-12">
            {/* FAQ Section */}
            <section aria-labelledby="faq-heading">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex items-center">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-blue-500 mr-2" />
                  <h2 id="faq-heading" className="text-lg leading-6 font-medium text-gray-900">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Why do I need to complete a medical interview?</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        The medical interview helps our underwriters assess your health profile for accurate insurance policy pricing and terms. It ensures you receive appropriate coverage.
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">How long will the form take to complete?</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Typically 15-20 minutes, depending on your medical history complexity. You can save and return later if needed.
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Will I need any documents to complete this?</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Having a list of your current medications, medical history, and family medical history will help make the process smoother and more accurate.
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">What happens after I submit the form?</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Our underwriting team will review your information. You may be contacted for additional information or to schedule a medical examination if necessary.
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">Is a medical examination required?</dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Not always. Based on your age, health history, and coverage amount, we may need additional medical information. We'll notify you if an examination is needed.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
            
            {/* About the Interview Process */}
            <section aria-labelledby="process-heading">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex items-center">
                  <InformationCircleIcon className="h-6 w-6 text-blue-500 mr-2" />
                  <h2 id="process-heading" className="text-lg leading-6 font-medium text-gray-900">
                    About the Interview Process
                  </h2>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="prose prose-blue max-w-none">
                    <p>Our medical interview is designed to collect comprehensive information about your health status and history for insurance underwriting. Here's what you should know:</p>
                    
                    <h3>Process Steps:</h3>
                    <ol>
                      <li><strong>Complete the online form</strong> - Answer all questions accurately and thoroughly.</li>
                      <li><strong>Form submission</strong> - Your information is securely transmitted to our underwriting team.</li>
                      <li><strong>Initial review</strong> - Our underwriters will assess your information within 3-5 business days.</li>
                      <li><strong>Follow-up</strong> - You may be contacted for clarification or additional details.</li>
                      <li><strong>Medical examination</strong> - If required, we'll arrange this at a convenient time and location.</li>
                      <li><strong>Final assessment</strong> - We'll determine your policy terms based on all information provided.</li>
                    </ol>
                    
                    <h3>Tips for Completion:</h3>
                    <ul>
                      <li>Gather your medical information before starting</li>
                      <li>Provide specific dates when possible</li>
                      <li>Include all relevant details about medical conditions</li>
                      <li>Be honest and thorough with all answers</li>
                      <li>Use the save feature if you need to take a break</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Privacy Information */}
            <section aria-labelledby="privacy-heading">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 text-blue-500 mr-2" />
                  <h2 id="privacy-heading" className="text-lg leading-6 font-medium text-gray-900">
                    Privacy & Security
                  </h2>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <div className="prose prose-blue max-w-none">
                    <p>We take the privacy and security of your personal medical information very seriously:</p>
                    
                    <ul>
                      <li><strong>HIPAA Compliance</strong> - Our processes follow HIPAA regulations protecting your health information.</li>
                      <li><strong>Encryption</strong> - All data is encrypted in transit and at rest using industry-standard methods.</li>
                      <li><strong>Limited Access</strong> - Only authorized personnel involved in the underwriting process can access your information.</li>
                      <li><strong>No Third-Party Sharing</strong> - We don't sell or share your data with third parties not involved in your policy administration.</li>
                      <li><strong>Retention Policy</strong> - Information is kept only as long as required by law and policy requirements.</li>
                    </ul>
                    
                    <p>For more detailed information about how we protect your data, please review our <a href="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>.</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Contact Information */}
            <section aria-labelledby="contact-heading">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 id="contact-heading" className="text-lg font-medium text-gray-900">Need more help?</h2>
                  <div className="mt-2 max-w-xl text-sm text-gray-500">
                    <p>If you have questions about the form or process, our support team is here to help.</p>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};