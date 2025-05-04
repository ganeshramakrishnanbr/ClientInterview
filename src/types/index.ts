export * from './question';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApplicationData {
  id: string;
  userId: string;
  formId: string;
  responses: Record<string, any>; 
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  submittedAt?: Date;
}