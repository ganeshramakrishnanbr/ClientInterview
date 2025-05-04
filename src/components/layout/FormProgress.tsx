import React from 'react';
import { FormSection } from '../../types';
import { useFormStore } from '../../stores/formStore';

interface FormProgressProps {
  sections: FormSection[];
  currentSectionIndex: number;
  onSectionClick: (index: number) => void;
}

export const FormProgress: React.FC<FormProgressProps> = ({ 
  sections, 
  currentSectionIndex,
  onSectionClick
}) => {
  return (
    <nav aria-label="Progress" className="mb-8">
      <ol className="space-y-4 md:flex md:space-y-0">
        {sections.map((section, index) => {
          let status: 'complete' | 'current' | 'upcoming' = 'upcoming';
          
          if (index < currentSectionIndex) {
            status = 'complete';
          } else if (index === currentSectionIndex) {
            status = 'current';
          }
          
          return (
            <li key={section.id} className="md:flex-1">
              <button
                onClick={() => onSectionClick(index)}
                className={`w-full group flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 ${
                  status === 'complete' 
                    ? 'border-blue-600 hover:border-blue-800' 
                    : status === 'current'
                    ? 'border-blue-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                disabled={status === 'upcoming'}
              >
                <span className={`text-xs font-semibold uppercase tracking-wide ${
                  status === 'complete' ? 'text-blue-600 group-hover:text-blue-800' : 
                  status === 'current' ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  Step {index + 1}
                </span>
                <span className="text-sm font-medium">
                  {section.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};