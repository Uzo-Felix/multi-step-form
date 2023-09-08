import React from 'react';

const Step = ({ title, label, active, number, onClick }) => {
  return (
    <div className={`step ${active ? 'active' : ''}`} onClick={onClick}>
      <div className='circle'>
        {number}
      </div>
      <span>
        <p>{title}</p>
        <h2>{label}</h2>
      </span>
    </div>
  );
};

export default Step;
