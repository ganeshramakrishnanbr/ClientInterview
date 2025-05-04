# Life Insurance Medical Interview - Navigation Guide

## Overview

This application is a digital medical interview system for life insurance applicants. It collects comprehensive medical history, lifestyle information, and family health data to assist in the underwriting process.

## Application Flow

1. **User Authentication**: Users log in to access their application
2. **Form Selection**: Users can start a new form or continue an existing one
3. **Form Completion**: Multi-step interview process with conditional questions
4. **Review & Submission**: Users review their answers before final submission
5. **Success Page**: Confirmation with next steps and option to view JSON output

## Key Components

### Pages

- **HomePage**: Entry point with options to start new or continue applications
- **LoginPage**: User authentication
- **FormPage**: Main interview interface with dynamic sections
- **ApplicationsPage**: List of user's applications and their status
- **SubmissionSuccessPage**: Confirmation after successful submission with JSON output display

### Components

- **Layout**: Common page structure with header and footer
- **Form Components**: Specialized input components for different question types
- **FormProgress**: Navigation bar showing progress through sections
- **FormSection**: Container for groups of related questions

### Stores

- **formStore**: Manages form state, responses, and submission logic
- **userStore**: Handles user authentication and profile data

## Data Flow

1. **Input Loading**:
   - Form definitions are loaded from `formService.ts`
   - Questions are organized into sections with conditional logic
   - Each question has a unique ID for data mapping

2. **Processing Logic**:
   - Responses are stored in the `formStore` as they're entered
   - Conditional visibility is handled by `shouldShowQuestion` function
   - Form validation ensures required fields are completed

3. **Data Persistence**:
   - IndexedDB (via Dexie.js) stores form progress locally
   - Users can save and resume their application
   - Final submission stores the complete dataset

4. **Output Generation**:
   - On submission, data is formatted with source mapping IDs
   - JSON output is available on the success page
   - Data structure preserves question IDs and user responses

## Dynamic Features

- **Conditional Questions**: Questions appear/hide based on previous answers
- **Section Navigation**: Users can navigate between completed sections
- **Validation**: Real-time validation with error messages
- **Progress Tracking**: Visual indicators of completion status
- **Responsive Design**: Works across device sizes

## JSON Output Structure

The JSON output follows this structure:
```json
{
  "questionId": {
    "questionId": "string",
    "answer": "string | string[] | Record<string, string>"
  },
  // Additional question/answer pairs
}
```

Each response includes:
- The source question ID for mapping
- The user's selected value(s)
- Proper typing based on question type (text, multiple choice, etc.)