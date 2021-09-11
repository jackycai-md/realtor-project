import React from 'react';

export default function InfoRow({ label, value, className }) {
  return (
    <div className={`info-row ${className || ''}`}>
      <div className="info-label">{label}</div>
      <div className="info-value">{value}</div>
    </div>
  );
};
