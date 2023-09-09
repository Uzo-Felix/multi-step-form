import React, { useState, useEffect } from 'react';
import './Info.css';

function Info() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        setFormErrors({ ...formErrors, name: value ? '' : 'Name is required' });
        break;
      case 'email':
        setFormErrors({
          ...formErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address',
        });
        break;
      case 'phone':
        setFormErrors({ ...formErrors, phone: value ? '' : 'Phone number is required' });
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const { name, email, phone } = formData;
    const isFormValid =
      Object.values(formErrors).every((error) => error === '') &&
      name !== '' &&
      email !== '' &&
      phone !== '';
    setIsFormValid(isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      // Submit the form or perform any desired action here
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill out the form correctly.');
    }
  };

  return (
    <div className="info-container">
      <form onSubmit={handleSubmit}>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number</p>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder='e.g. Stephen King'
            value={formData.name}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.name}</span>
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            placeholder='e.g. stephenking@lorem.com'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.email}</span>
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            placeholder='e.g. +1 234 567 890'
            value={formData.phone}
            onChange={handleInputChange}
          />
          <span className="error">{formErrors.phone}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Info;
