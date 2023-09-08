import React, { useState } from 'react';
import './Plan.css';

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    { name: 'Arcade', price: 9 },
    { name: 'Advanced', price: 12 },
    { name: 'Pro', price: 15 },
  ];

  const yearlyPlans = [
    { name: 'Arcade', price: 90 },
    { name: 'Advanced', price: 120 },
    { name: 'Pro', price: 150 },
  ];

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <div className="toggle-container">
        <button
          onClick={() => setIsYearly(false)}
          className={!isYearly ? 'active' : ''}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={isYearly ? 'active' : ''}
        >
          Yearly
        </button>
      </div>

      <div className="plan-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${selectedPlan === plan ? 'selected' : ''}`}
            onClick={() => handlePlanSelect(plan)}
          >
            <h3>{plan.name}</h3>
            <p>{isYearly ? `$${plan.price}/yr` : `$${plan.price}/month`}</p>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="selected-plan">
          <p>You have selected: {selectedPlan.name}</p>
          <p>Price: {isYearly ? `$${selectedPlan.price}/yr` : `$${selectedPlan.price}/month`}</p>
        </div>
      )}
    </div>
  );
};

export default Plan;
