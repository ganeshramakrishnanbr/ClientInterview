import Dexie, { Table } from 'dexie';
import { ApplicationData } from '../types';

class MedicalInterviewDB extends Dexie {
  applications!: Table<ApplicationData>;

  constructor() {
    super('MedicalInterviewDB');
    this.version(1).stores({
      applications: '++id, userId, formId, status'
    });
  }

  async saveFormProgress(applicationData: Partial<ApplicationData>): Promise<string> {
    if (applicationData.id) {
      await this.applications.update(applicationData.id, {
        ...applicationData,
        updatedAt: new Date()
      });
      return applicationData.id;
    } else {
      const id = await this.applications.add({
        ...applicationData as ApplicationData,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'draft'
      });
      return id.toString();
    }
  }

  async getFormProgress(id: string): Promise<ApplicationData | undefined> {
    return this.applications.get(id);
  }

  async getApplications(userId: string): Promise<ApplicationData[]> {
    return this.applications.where('userId').equals(userId).toArray();
  }

  async submitApplication(id: string): Promise<void> {
    await this.applications.update(id, {
      status: 'submitted',
      submittedAt: new Date(),
      updatedAt: new Date()
    });
  }
}

export const db = new MedicalInterviewDB();