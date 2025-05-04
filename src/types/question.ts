export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  required: boolean;
  options?: Option[];
  conditionalId?: string;
  conditionalValue?: string | string[];
  validation?: ValidationRule[];
  gridItems?: string[];
  gridHeaders?: string[];
}

export type QuestionType = 
  | 'text'
  | 'textarea' 
  | 'radio'
  | 'checkbox'
  | 'date'
  | 'select'
  | 'number'
  | 'grid'
  | 'multiGrid'
  | 'yesNo'
  | 'section';

export interface Option {
  value: string;
  text: string;
}

export interface ValidationRule {
  type: 'required' | 'min' | 'max' | 'pattern' | 'minLength' | 'maxLength';
  value?: number | string;
  message: string;
}

export interface FormSection {
  id: string;
  title: string;
  questions: Question[];
}

export interface MedicalForm {
  id: string;
  title: string;
  sections: FormSection[];
}

export interface FormResponse {
  questionId: string;
  answer: string | string[] | Record<string, string>;
}