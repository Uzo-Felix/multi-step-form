// components/Summary.js
import React from 'react';

const Summary = ({ formData }) => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      {/* Display other form data */}
    </div>
  );
};

export default Summary;
