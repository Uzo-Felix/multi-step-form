import React from 'react';

const Step = ({ title, label, active, number, onClick }) => {
  return (
    <div className={`step ${active ? 'active' : ''}`} onClick={onClick}>
      <div className={`circle ${active ? 'active' : ''}`}>
        <span>
          {number}
        </span>
      </div>
      <section>
        <p>{title}</p>
        <h2>{label}</h2>
      </section>
    </div>
  );
};

export default Step;
