import React from 'react';
import { Question, FormResponse } from '../../types';
import { twMerge } from 'tailwind-merge';

interface GridQuestionProps {
  question: Question;
  response: FormResponse | undefined;
  onChange: (answer: Record<string, string>) => void;
  className?: string;
}

export const GridQuestion: React.FC<GridQuestionProps> = ({
  question,
  response,
  onChange,
  className
}) => {
  const answers = (response?.answer as Record<string, string>) || {};
  const gridItems = question.gridItems || [];
  const gridHeaders = question.gridHeaders || ['Yes', 'No', 'Unknown'];

  const handleOptionSelect = (itemId: string, value: string) => {
    const updatedAnswers = {
      ...answers,
      [itemId]: value
    };
    onChange(updatedAnswers);
  };

  return (
    <div className={twMerge("w-full py-2", className)}>
      <div className="mb-4 text-gray-700">
        <span className="font-medium">{question.text}</span>
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </div>
      
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 border-collapse">
          <thead>
            <tr>
              <th scope="col" className="py-3 px-2 text-left text-sm font-semibold text-gray-900">Item</th>
              {gridHeaders.map((header) => (
                <th 
                  key={header} 
                  scope="col" 
                  className="py-3 px-2 text-center text-sm font-semibold text-gray-900 w-24"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {gridItems.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-3 px-2 text-sm text-gray-700">{item}</td>
                {gridHeaders.map((header) => {
                  const optionValue = header.toLowerCase();
                  const isSelected = answers[index.toString()] === optionValue;
                  
                  return (
                    <td key={`${index}-${optionValue}`} className="py-2 px-2 text-sm text-center">
                      <input
                        type="radio"
                        id={`${question.id}-${index}-${optionValue}`}
                        name={`${question.id}-${index}`}
                        checked={isSelected}
                        onChange={() => handleOptionSelect(index.toString(), optionValue)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};