import React, { useState, useContext } from 'react';
import AppContext from '../../AppContext';
import './Plan.css';

const Plan = () => {
  const { selectedPlan, handlePlanSelect, isYearly, setIsYearly, planPrices } = useContext(AppContext);


  // const plans = isYearly ? yearlyPlans : monthlyPlans;
  return (
    <div>
      <section>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
      </section>
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

      <div className="toggle-container">
        <p>monthly</p>
        <input onClick={() => setIsYearly(!isYearly)} type="checkbox" id="switch" /><label for="switch">Toggle</label>
        <p>yearly</p>
      </div>
    </div>
  );
};

export default Plan;
