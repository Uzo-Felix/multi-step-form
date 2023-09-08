import React, { useState, useContext } from 'react';
import AppContext from '../../AppContext';
import './Plan.css';

const Plan = () => {
  const { selectedPlan, handlePlanSelect, isYearly, setIsYearly, planPrices } = useContext(AppContext);


  // const plans = isYearly ? yearlyPlans : monthlyPlans;

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
        {planPrices.map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${selectedPlan === plan ? 'selected' : ''}`}
            onClick={() => handlePlanSelect(plan)}
          >
            <h3>{plan.name}</h3>
            <p>{isYearly ? `$${plan.yearlyPrice}/yr` : `$${plan.monthlyPrice}/month`}</p>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="selected-plan">
          <p>You have selected: {selectedPlan.name}</p>
          <p>Price: {isYearly ? `$${selectedPlan.yearlyPrice}/yr` : `$${selectedPlan.monthlyPrice}/month`}</p>
        </div>
      )}
    </div>
  );
};

export default Plan;
