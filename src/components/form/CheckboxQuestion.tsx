import React from 'react';
import { Question, FormResponse, Option } from '../../types';
import { twMerge } from 'tailwind-merge';

interface CheckboxQuestionProps {
  question: Question;
  response: FormResponse | undefined;
  onChange: (answer: string[]) => void;
  className?: string;
}

export const CheckboxQuestion: React.FC<CheckboxQuestionProps> = ({
  question,
  response,
  onChange,
  className
}) => {
  const selectedValues = (response?.answer as string[]) || [];
  const options = question.options || [];

  const handleCheckboxChange = (value: string) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter(v => v !== value)
      : [...selectedValues, value];
    
    onChange(updatedValues);
  };

  return (
    <div className={twMerge("w-full py-2", className)}>
      <div className="mb-2 text-gray-700">
        <span className="font-medium">{question.text}</span>
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </div>
      
      <div className="mt-2 space-y-2">
        {options.map((option: Option) => (
          <div key={option.value} className="relative flex items-start">
            <div className="flex h-5 items-center">
              <input
                id={`${question.id}-${option.value}`}
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label 
                htmlFor={`${question.id}-${option.value}`} 
                className="text-gray-700 cursor-pointer"
              >
                {option.text}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};