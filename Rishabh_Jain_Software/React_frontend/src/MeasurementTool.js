import React from 'react';

const MeasurementTool = ({ annotations }) => {
  return (
    <div>
      <h3>Measurements</h3>
      {annotations.length === 0 && <p>No annotations yet.</p>}
      {annotations.map((annotation, index) => (
        <div key={index}>
          <p>{`Annotation ${index + 1}: ${annotation.type}`}</p>
        </div>
      ))}
    </div>
  );
};

export default MeasurementTool;
