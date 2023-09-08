import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearly, setIsYearly] = useState(false);

  const handleAddOnSelect = (addOn) => {
    const isSelected = selectedAddOns.includes(addOn.id);
    if (isSelected) {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addOn.id));
    } else {
      setSelectedAddOns([...selectedAddOns, addOn.id]);
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const addOns = [
    {
      id: 1,
      title: 'Online Service',
      description: 'Access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: 2,
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: 3,
      title: 'Customizable Profile',
      description: 'Custom theme on your profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const planPrices = [
    { name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 },
    { name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 },
    { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150 },
  ];


  return (
    <AppContext.Provider
      value={{
        selectedAddOns,
        handleAddOnSelect,
        selectedPlan,
        handlePlanSelect,
        isYearly,
        setIsYearly,
        addOns,
        planPrices,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
