import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import AnnotationTool from './AnnotationTool';
import MeasurementTool from './MeasurementTool';

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [annotations, setAnnotations] = useState([]);

  const handleImageUpload = (imageFile) => {
    setImage(imageFile);
  };

  const handleAnnotationChange = (newAnnotation) => {
    setAnnotations((prevAnnotations) => [...prevAnnotations, newAnnotation]);
  };

  return (
    <div className="dashboard">
      <h1>Medical Image Annotation Tool</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      {image && (
        <>
          <AnnotationTool image={image} onAnnotationChange={handleAnnotationChange} />
          <MeasurementTool annotations={annotations} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
