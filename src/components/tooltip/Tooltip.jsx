import React from 'react';
import './card.css';

const Card = ({ title, value, avg, tooltip }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{value}</p>
    <small>Last 7 Days Avg: {avg}</small>
    {tooltip && <div className="tooltip">{tooltip}</div>}
  </div>
);

export default Card;
