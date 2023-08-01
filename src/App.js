import React, { useState } from 'react';
import './App.css';
import EmailSignatureTemplate from './components/emailSignatureTemplate/EmailSignatureTemplate';
import Form from './components/forms/Forms';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleSubmitForm = (data) => {
    setFormData(data);
  };

  return (
    <div className="app">
      <h1>Email Signature Generator</h1>
      <Form onSubmit={handleSubmitForm} />
      {formData && (
        <EmailSignatureTemplate data={formData} />
      )}
    </div>
  );
};

export default App;
