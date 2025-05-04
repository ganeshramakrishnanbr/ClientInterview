import React from 'react';
import { Question, FormResponse } from '../../types';
import { twMerge } from 'tailwind-merge';

interface MedicalHistoryGridProps {
  question: Question;
  response: FormResponse | undefined;
  onChange: (answer: Record<string, string>) => void;
  className?: string;
}

export const MedicalHistoryGrid: React.FC<MedicalHistoryGridProps> = ({
  question,
  response,
  onChange,
  className
}) => {
  const answers = (response?.answer as Record<string, string>) || {};
  const medicalConditions = [
    'Heart Disease',
    'High Blood Pressure',
    'Diabetes',
    'Cancer',
    'Stroke',
    'Kidney Disease',
    'Liver Disease',
    'Mental Health Condition',
    'Respiratory Disease',
    'Thyroid Disorder'
  ];

  const familyMembers = [
    'Father',
    'Mother',
    'Brother(s)',
    'Sister(s)',
    'Son(s)',
    'Daughter(s)',
    'Maternal Grandmother',
    'Maternal Grandfather',
    'Paternal Grandmother',
    'Paternal Grandfather'
  ];

  const getAnswerKey = (condition: string, member: string) => {
    return `${condition}-${member}`;
  };

  const handleChange = (condition: string, member: string, value: boolean) => {
    const key = getAnswerKey(condition, member);
    const updatedAnswers = { ...answers, [key]: value ? 'yes' : 'no' };
    onChange(updatedAnswers);
  };

  return (
    <div className={twMerge("w-full py-4", className)}>
      <div className="mb-4 text-gray-700">
        <span className="font-medium text-lg">{question.text}</span>
        {question.required && <span className="text-red-500 ml-1">*</span>}
      </div>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Condition
              </th>
              {familyMembers.map(member => (
                <th key={member} scope="col" className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {member}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {medicalConditions.map((condition) => (
              <tr key={condition} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {condition}
                </td>
                {familyMembers.map(member => {
                  const key = getAnswerKey(condition, member);
                  const isChecked = answers[key] === 'yes';
                  
                  return (
                    <td key={`${condition}-${member}`} className="px-3 py-4 whitespace-nowrap text-sm text-center">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => handleChange(condition, member, e.target.checked)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
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