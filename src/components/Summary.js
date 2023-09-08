// components/Summary.js
import React, { useContext } from 'react';
import AppContext from '../AppContext';

const Summary = () => {
  const { selectedAddOns, selectedPlan, isYearly, addOns, planPrices } = useContext(AppContext);


  const totalAddOnPrice = selectedAddOns.reduce((total, id) => {
    const selectedAddOn = addOns.find((addOn) => addOn.id === id);
    if (selectedAddOn) {
      return total + (isYearly? selectedAddOn.yearlyPrice: selectedAddOn.monthlyPrice);
    }
    return total;
  }, 0);


  const totalWithPlanPrice = (isYearly
    ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice) + totalAddOnPrice;

  return (
    <div className="summary">
      <h2>Total</h2>
      <h3>{selectedPlan.name} ({isYearly ?`yearly`: `monthly`})</h3>
      <p>Price: {isYearly ? `$${selectedPlan.yearlyPrice}/yr` : `$${selectedPlan.monthlyPrice}/month`}</p>
        <ul>
          {selectedAddOns.map((id) => {
            const selectedAddOn = addOns.find((addOn) => addOn.id === id);
            return (
              <li key={id}>
                {selectedAddOn.title} - ${isYearly ? `${selectedAddOn.yearlyPrice}/yr` : `${selectedAddOn.monthlyPrice}/month`}
              </li>
            );
          })}
          <li>total - ${totalWithPlanPrice}</li>
        </ul>
    </div>
  );
};

export default Summary;
