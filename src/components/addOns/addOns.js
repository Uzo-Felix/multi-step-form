import React, { useContext} from 'react';
import AppContext from '../../AppContext';
import './addOns.css';

const AddOnSelector = () => {
  const { selectedAddOns, handleAddOnSelect, isYearly, addOns } = useContext(AppContext);

  return (
    <div>
      <h2>Select Add-Ons</h2>
      <div className="add-on-cards">
        {addOns.map((addOn) => (
          <div key={addOn.id} className="add-on-card">
            <h3>{addOn.title}</h3>
            <p>{addOn.description}</p>
            <p>{isYearly ? `$${addOn.yearlyPrice}/yr` : `$${addOn.monthlyPrice}/month`}</p>
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
                {selectedAddOn.title} - ${isYearly ? `${selectedAddOn.yearlyPrice}/yr` : `${selectedAddOn.monthlyPrice}/month`}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AddOnSelector;
