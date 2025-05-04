import React from 'react';
import { Question, FormResponse } from '../../types';
import { RadioGroup } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

interface YesNoQuestionProps {
  question: Question;
  response: FormResponse | undefined;
  onChange: (answer: string) => void;
  className?: string;
}

export const YesNoQuestion: React.FC<YesNoQuestionProps> = ({ 
  question, 
  response, 
  onChange,
  className
}) => {
  const options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'unknown', label: 'Unknown' }
  ];

  const selectedValue = response?.answer as string || '';

  return (
    <div className={twMerge("w-full py-2", className)}>
      <div className="mb-2 text-gray-700">
        <span className="font-medium">{question.text}</span>
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </div>
      
      <RadioGroup value={selectedValue} onChange={onChange} className="mt-2">
        <div className="flex space-x-4">
          {options.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option.value}
              className={({ active, checked }) => 
                twMerge(
                  "relative flex cursor-pointer rounded-lg px-5 py-2 border focus:outline-none",
                  active ? "ring-2 ring-blue-500 ring-opacity-60" : "",
                  checked 
                    ? "bg-blue-600 text-white border-transparent" 
                    : "bg-white border-gray-300 hover:bg-gray-50"
                )
              }
            >
              {({ checked }) => (
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label
                      as="p"
                      className={`font-medium ${
                        checked ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {option.label}
                    </RadioGroup.Label>
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};