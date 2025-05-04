import { MedicalForm } from '../types';

// This would normally fetch from an API
// For demo purposes, we're using a static form
export const fetchForm = async (formId: string): Promise<MedicalForm> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: "medical-history-form",
    title: "Life Insurance Medical Interview",
    sections: [
      {
        id: "personal-info",
        title: "Personal Information",
        questions: [
          {
            id: "name",
            type: "text",
            text: "Full Name",
            required: true
          },
          {
            id: "date-of-birth",
            type: "date",
            text: "Date of Birth",
            required: true
          },
          {
            id: "gender",
            type: "radio",
            text: "Gender",
            required: true,
            options: [
              { value: "male", text: "Male" },
              { value: "female", text: "Female" },
              { value: "other", text: "Other" }
            ]
          },
          {
            id: "address",
            type: "textarea",
            text: "Address",
            required: true
          },
          {
            id: "phone",
            type: "text",
            text: "Phone Number",
            required: true
          },
          {
            id: "email",
            type: "text",
            text: "Email Address",
            required: true
          }
        ]
      },
      {
        id: "medical-conditions",
        title: "Medical Conditions",
        questions: [
          {
            id: "medical-header",
            type: "section",
            text: "Please indicate if you have been diagnosed with any of the following conditions:",
            required: false
          },
          {
            id: "heart-disease",
            type: "yesNo",
            text: "Heart Disease",
            required: true
          },
          {
            id: "heart-disease-details",
            type: "textarea",
            text: "Please provide details about your heart disease:",
            required: true,
            conditionalId: "heart-disease",
            conditionalValue: "yes"
          },
          {
            id: "diabetes",
            type: "yesNo",
            text: "Diabetes",
            required: true
          },
          {
            id: "diabetes-details",
            type: "textarea",
            text: "Please provide details about your diabetes:",
            required: true,
            conditionalId: "diabetes",
            conditionalValue: "yes"
          },
          {
            id: "cancer",
            type: "yesNo",
            text: "Cancer",
            required: true
          },
          {
            id: "cancer-details",
            type: "textarea",
            text: "Please provide details about your cancer:",
            required: true,
            conditionalId: "cancer",
            conditionalValue: "yes"
          },
          {
            id: "respiratory-disease",
            type: "yesNo",
            text: "Respiratory Disease",
            required: true
          },
          {
            id: "respiratory-disease-details",
            type: "textarea",
            text: "Please provide details about your respiratory disease:",
            required: true,
            conditionalId: "respiratory-disease",
            conditionalValue: "yes"
          }
        ]
      },
      {
        id: "family-history",
        title: "Family Medical History",
        questions: [
          {
            id: "family-history-grid",
            type: "multiGrid",
            text: "Has any blood relative ever had any of the following conditions?",
            required: true
          }
        ]
      },
      {
        id: "lifestyle",
        title: "Lifestyle Information",
        questions: [
          {
            id: "smoking",
            type: "radio",
            text: "Do you smoke or have you smoked in the past?",
            required: true,
            options: [
              { value: "never", text: "Never smoked" },
              { value: "former", text: "Former smoker" },
              { value: "current", text: "Current smoker" }
            ]
          },
          {
            id: "smoking-details-former",
            type: "textarea",
            text: "When did you quit and how much did you smoke?",
            required: true,
            conditionalId: "smoking",
            conditionalValue: "former"
          },
          {
            id: "smoking-details-current",
            type: "textarea",
            text: "How much do you smoke per day and for how long?",
            required: true,
            conditionalId: "smoking",
            conditionalValue: "current"
          },
          {
            id: "alcohol",
            type: "radio",
            text: "Do you consume alcoholic beverages?",
            required: true,
            options: [
              { value: "never", text: "Never" },
              { value: "occasional", text: "Occasionally" },
              { value: "regular", text: "Regularly" },
              { value: "heavily", text: "Heavily" }
            ]
          },
          {
            id: "alcohol-details",
            type: "textarea",
            text: "Please describe your alcohol consumption patterns:",
            required: true,
            conditionalId: "alcohol",
            conditionalValue: ["occasional", "regular", "heavily"]
          },
          {
            id: "exercise",
            type: "radio",
            text: "How often do you exercise?",
            required: true,
            options: [
              { value: "never", text: "Never" },
              { value: "rarely", text: "Rarely" },
              { value: "sometimes", text: "Sometimes" },
              { value: "regularly", text: "Regularly" }
            ]
          }
        ]
      },
      {
        id: "medications",
        title: "Current Medications",
        questions: [
          {
            id: "current-medications",
            type: "yesNo",
            text: "Are you currently taking any medications?",
            required: true
          },
          {
            id: "medications-list",
            type: "textarea",
            text: "Please list all medications you are currently taking including dosage and frequency:",
            required: true,
            conditionalId: "current-medications",
            conditionalValue: "yes"
          },
          {
            id: "allergies",
            type: "yesNo",
            text: "Do you have any allergies to medications?",
            required: true
          },
          {
            id: "allergies-list",
            type: "textarea",
            text: "Please list all medication allergies and your reaction:",
            required: true,
            conditionalId: "allergies",
            conditionalValue: "yes"
          }
        ]
      },
      {
        id: "additional-info",
        title: "Additional Information",
        questions: [
          {
            id: "height",
            type: "text",
            text: "Height (cm)",
            required: true
          },
          {
            id: "weight",
            type: "text",
            text: "Weight (kg)",
            required: true
          },
          {
            id: "additional-conditions",
            type: "checkbox",
            text: "Do you have any of the following conditions?",
            required: true,
            options: [
              { value: "high-bp", text: "High Blood Pressure" },
              { value: "high-cholesterol", text: "High Cholesterol" },
              { value: "asthma", text: "Asthma" },
              { value: "thyroid", text: "Thyroid Disorder" },
              { value: "depression", text: "Depression/Anxiety" },
              { value: "none", text: "None of the above" }
            ]
          },
          {
            id: "surgeries",
            type: "yesNo",
            text: "Have you had any surgeries in the last 5 years?",
            required: true
          },
          {
            id: "surgeries-details",
            type: "textarea",
            text: "Please provide details about your surgeries:",
            required: true,
            conditionalId: "surgeries",
            conditionalValue: "yes"
          },
          {
            id: "comments",
            type: "textarea",
            text: "Do you have any additional information you would like to provide?",
            required: false
          }
        ]
      }
    ]
  };
};

export const submitForm = async (formId: string, responses: Record<string, any>): Promise<{ success: boolean, message: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Form submitted:', { formId, responses });
  
  // Simulate a successful submission
  return {
    success: true,
    message: 'Form submitted successfully'
  };
};