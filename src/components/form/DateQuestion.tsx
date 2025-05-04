import React from 'react';
import { Question, FormResponse } from '../../types';
import { twMerge } from 'tailwind-merge';

interface DateQuestionProps {
  question: Question;
  response: FormResponse | undefined;
  onChange: (answer: string) => void;
  className?: string;
}

export const DateQuestion: React.FC<DateQuestionProps> = ({
  question,
  response,
  onChange,
  className
}) => {
  const value = response?.answer as string || '';

  return (
    <div className={twMerge("w-full py-2", className)}>
      <div className="mb-2 text-gray-700">
        <label htmlFor={question.id} className="font-medium">
          {question.text}
          {question.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      </div>
      
      <input
        id={question.id}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        required={question.required}
      />
    </div>
  );
};