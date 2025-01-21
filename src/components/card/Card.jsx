import React from 'react';
import './card.css';

const Card = ({ title, value, avg, tooltip }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{value}</p>
    <small className='total-days'>Last 7 Days </small>
    <small className='avg-value'>Avg: {avg}</small>
    {tooltip && <div className="tooltip">{tooltip}</div>}
    <div className="hover-box">
      <p>01-01-2025:Wednesday 45</p>
      <p>01-01-2025:Wednesday 45</p>
      <p>01-01-2025:Wednesday 45</p>
      <p>01-01-2025:Wednesday 45</p>
    </div>
  </div>
);

export default Card;
