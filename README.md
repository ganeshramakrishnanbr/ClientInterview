# Life Insurance Medical Interview

A comprehensive digital medical interview system for life insurance applicants, designed to collect and process medical history, lifestyle information, and family health data.

## Features

- Multi-step interview process with conditional questions
- Save and resume functionality
- Responsive design for all devices
- Secure data handling
- JSON output with source mapping IDs

## Project Structure

```
src/
├── components/
│   ├── form/              # Form-specific components
│   │   ├── CheckboxQuestion.tsx
│   │   ├── DateQuestion.tsx
│   │   ├── FormSection.tsx
│   │   ├── GridQuestion.tsx
│   │   ├── MedicalHistoryGrid.tsx
│   │   ├── QuestionRenderer.tsx
│   │   ├── RadioQuestion.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── TextAreaQuestion.tsx
│   │   ├── TextQuestion.tsx
│   │   └── YesNoQuestion.tsx
│   └── layout/            # Layout components
│       ├── Footer.tsx
│       ├── FormProgress.tsx
│       ├── Header.tsx
│       └── Layout.tsx
├── db/                    # Database configuration
│   └── index.ts           # Dexie.js setup for IndexedDB
├── pages/                 # Application pages
│   ├── ApplicationsPage.tsx
│   ├── FormPage.tsx
│   ├── HelpPage.tsx
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   └── SubmissionSuccessPage.tsx
├── services/              # API and data services
│   └── formService.ts     # Form definition and API calls
├── stores/                # State management
│   ├── formStore.ts       # Form state and logic
│   └── userStore.ts       # User authentication state
├── types/                 # TypeScript type definitions
│   ├── index.ts
│   └── question.ts        # Question type definitions
├── App.tsx                # Main application component
└── main.tsx              # Application entry point
```

## Key Files Explained

### Form Definition and Loading

- **src/services/formService.ts**: Contains the form definition with all questions, sections, and conditional logic. This is where the interview structure is defined.

### Form Processing Logic

- **src/stores/formStore.ts**: Central store that manages:
  - Loading form definitions
  - Tracking user responses
  - Handling conditional logic
  - Saving progress
  - Form submission
  - JSON output generation

### Question Rendering

- **src/components/form/QuestionRenderer.tsx**: Determines which question component to render based on question type
- **src/components/form/FormSection.tsx**: Manages a group of related questions

### Data Persistence

- **src/db/index.ts**: Configures IndexedDB through Dexie.js for local storage
- **saveFormProgress()** and **loadProgress()** in formStore handle data persistence

### Output Generation

- **src/pages/SubmissionSuccessPage.tsx**: Displays the final JSON output with mapping IDs
- The JSON toggle button reveals the structured data with source mapping

## How to Use

1. **Start a New Interview**:
   - From the home page, click "Start New Application"
   - Complete each section of the interview

2. **Save Progress**:
   - Click "Save Progress" at any time to store your current answers
   - Your application will be available in "My Applications"

3. **Resume an Interview**:
   - From the home page, click "Continue Application"
   - Select the application you wish to continue

4. **Submit Completed Interview**:
   - After completing all sections, click "Submit"
   - Review the success page and next steps

5. **View JSON Output**:
   - On the success page, click "Show JSON Data"
   - The structured data with mapping IDs will be displayed

## Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Adding New Questions

To add new questions to the interview:

1. Define the question in `formService.ts` with appropriate type and options
2. Add conditional logic if needed
3. Update the relevant section in the form definition
4. Ensure proper validation is configured

### Modifying Output Format

The JSON output structure can be customized in the `formStore.ts` file by modifying the response formatting logic.