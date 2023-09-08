import React, { useState } from 'react';
import './addOns.css';

const AddOnSelector = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const addOns = [
    {
      id: 1,
      title: 'Online Service',
      description: 'Access to multiplayer games',
      price: 1,
    },
    {
      id: 2,
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
    },
    {
      id: 3,
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: 2,
    },
  ];

  const handleAddOnSelect = (addOn) => {
    const isSelected = selectedAddOns.includes(addOn.id);
    if (isSelected) {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addOn.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn.id]);
    }
  };

  return (
    <div>
      <h2>Select Add-Ons</h2>
      <div className="add-on-cards">
        {addOns.map((addOn) => (
          <div key={addOn.id} className="add-on-card">
            <h3>{addOn.title}</h3>
            <p>{addOn.description}</p>
            <p>${addOn.price}/month</p>
            <label>
              <input
                type="checkbox"
                checked={selectedAddOns.includes(addOn.id)}
                onChange={() => handleAddOnSelect(addOn)}
              />
              Select
            </label>
          </div>
        ))}
      </div>
      <div className="selected-add-ons">
        <h3>Selected Add-Ons:</h3>
        <ul>
          {selectedAddOns.map((id) => {
            const selectedAddOn = addOns.find((addOn) => addOn.id === id);
            return (
              <li key={id}>
                {selectedAddOn.title} - ${selectedAddOn.price}/month
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AddOnSelector;
