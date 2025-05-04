import React from 'react';
import { Question, FormResponse } from '../../types';
import { TextQuestion } from './TextQuestion';
import { TextAreaQuestion } from './TextAreaQuestion';
import { RadioQuestion } from './RadioQuestion';
import { CheckboxQuestion } from './CheckboxQuestion';
import { DateQuestion } from './DateQuestion';
import { YesNoQuestion } from './YesNoQuestion';
import { GridQuestion } from './GridQuestion';
import { SectionHeader } from './SectionHeader';
import { MedicalHistoryGrid } from './MedicalHistoryGrid';

interface QuestionRendererProps {
  question: Question;
  response: FormResponse | undefined;
  onChange: (questionId: string, answer: string | string[] | Record<string, string>) => void;
  className?: string;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
  question,
  response,
  onChange,
  className
}) => {
  const handleChange = (answer: string | string[] | Record<string, string>) => {
    onChange(question.id, answer);
  };

  switch (question.type) {
    case 'text':
      return (
        <TextQuestion 
          question={question} 
          response={response} 
          onChange={handleChange} 
          className={className}
        />
      );
    
    case 'textarea':
      return (
        <TextAreaQuestion 
          question={question} 
          response={response} 
          onChange={handleChange} 
          className={className}
        />
      );
    
    case 'radio':
      return (
        <RadioQuestion 
          question={question} 
          response={response} 
          onChange={handleChange} 
          className={className}
        />
      );
    
    case 'checkbox':
      return (
        <CheckboxQuestion 
          question={question} 
          response={response} 
          onChange={handleChange} 
          className={className}
        />
      );
    
    case 'date':
      return (
        <DateQuestion 
          question={question} 
          response={response} 
          onChange={handleChange} 
          className={className}
        />
      );
    
    case 'yesNo':
      return (
        <YesNoQuestion 
          question={question} 
          response={response} 
          onChange={handleChange} 
          className={className}
        />
      );
    
    case 'grid':
      return (
        <GridQuestion 
          question={question} 
          response={response} 
          onChange={handleChange} 
          className={className}
        />
      );
    
    case 'section':
      return <SectionHeader title={question.text} className={className} />;
      
    case 'multiGrid':
      return (
        <MedicalHistoryGrid
          question={question}
          response={response}
          onChange={handleChange}
          className={className}
        />
      );
    
    default:
      return <div>Unsupported question type: {question.type}</div>;
  }
};