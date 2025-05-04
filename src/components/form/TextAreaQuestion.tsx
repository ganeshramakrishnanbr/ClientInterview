import React from 'react';
import { Question, FormResponse } from '../../types';
import { twMerge } from 'tailwind-merge';

interface TextAreaQuestionProps {
  question: Question;
  response: FormResponse | undefined;
  onChange: (answer: string) => void;
  className?: string;
}

export const TextAreaQuestion: React.FC<TextAreaQuestionProps> = ({
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
      
      <textarea
        id={question.id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your answer"
        rows={4}
        required={question.required}
      />
    </div>
  );
};