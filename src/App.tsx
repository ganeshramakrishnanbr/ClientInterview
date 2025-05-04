import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { SubmissionSuccessPage } from './pages/SubmissionSuccessPage';
import { LoginPage } from './pages/LoginPage';
import { HelpPage } from './pages/HelpPage';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/form/new" element={<FormPage />} />
          <Route path="/form/:formId/:applicationId" element={<FormPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/submission-success" element={<SubmissionSuccessPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;