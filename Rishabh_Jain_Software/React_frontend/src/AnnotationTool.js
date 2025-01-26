import React, { useState, useRef } from 'react';

const AnnotationTool = ({ image, onAnnotationChange }) => {
  const [drawing, setDrawing] = useState(false);
  const [currentShape, setCurrentShape] = useState('circle'); 
  const [startPos, setStartPos] = useState(null);
  const [active, setActive] = useState(false); 
  const canvasRef = useRef(null);
}

  const handleMouseDown = (e) => {
    setDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    setStartPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseMove = (e) => {
    if (drawing && startPos) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const currentPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      const width = currentPos.x - startPos.x;
      const height = currentPos.y - startPos.y;

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      ctx.beginPath();

      if (currentShape === 'circle') {
        const radius = Math.sqrt(width ** 2 + height ** 2);
        ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
        ctx.stroke();
      } else if (currentShape === 'rectangle') {
        ctx.rect(startPos.x, startPos.y, width, height);
        ctx.stroke();
      }
    }
  };

  const handleMouseUp = () => {
    if (drawing) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      const endPos = {
        x: startPos.x,
        y: startPos.y,
      };
      const annotation = {
        type: currentShape,
        position: startPos,
        endPosition: endPos,
      };
      onAnnotationChange(annotation);
      setDrawing(false);
    }
  };

  const handleShapeChange = (shape) => {
    setCurrentShape(shape);
    setActive(true); 

  return (
    <div className="annotation-tool">
      <h2>Annotation Tool</h2>
      <div className="shape-selector">
        <button
          onClick={() => handleShapeChange('circle')}
          style={{ backgroundColor: currentShape === 'circle' ? '#4CAF50' : '#ddd' }}
        >
          Circle
        </button>
        <button
          onClick={() => handleShapeChange('rectangle')}
          style={{ backgroundColor: currentShape === 'rectangle' ? '#4CAF50' : '#ddd' }}
        >
          Rectangle
        </button>
      </div>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={image} alt="To be annotated" style={{ maxWidth: '100%' }} />
        <canvas
          ref={canvasRef}
          width={800}
          height={600}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            cursor: 'crosshair',
            border: '1px solid black',
            borderRadius: '10px',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      </div>
    </div>
  );
};

export default AnnotationTool;
