// pages/index.js
import React, { useState } from 'react';
import './App.css';
import Step from './components/Step';
import Form from './components/Form';
import Summary from './components/Summary';

const steps = [
  { title: 'STEP 1', label: 'YOUR INFO' },
  { title: 'STEP 2', label: 'SELECT PLAN' },
  { title: 'STEP 3', label: 'ADD-ONS' },
  { title: 'STEP 4', label: 'SUMMARY' },
];

const Home = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
  };

  return (
    <div className="container">
      <div className="steps">
        {steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            label={step.label}
            number= {index}
            active={currentStep === index + 1}
            onClick={() => setCurrentStep(index + 1)}
          />
        ))}
      </div>
      <div className="form-container">
        {currentStep === 4 ? (
          <Summary formData={formData} />
        ) : (
          <Form step={currentStep} formData={formData} onChange={handleChange} />
        )}
        <div className="buttons">
          {currentStep > 1 && (
            <button className="prev-button" onClick={handlePrev}>
              Go Back
            </button>
          )}
          {currentStep < 4 && (
            <button className="next-button" onClick={handleNext}>
              Next Step
            </button>
          )}
          {currentStep === 4 && (
            <button className="submit-button" onClick={handleSubmit}>
              Confirm Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
