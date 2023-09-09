import React from 'react';
import Info from './info/Info';
import Plan from './plans/Plan';
import Addons from './addOns/addOns';

const Form = ({ step, formData, onChange }) => {
  return (
    <div className="form">
      {/* Render form fields for each step */}
      {step === 1 && (
        <Info />
      )}
      {step === 2 && (
        <Plan />
      )}
      {step === 3 && (
        <Addons />
      )}
    </div>
  );
};

export default Form;
