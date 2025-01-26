import React, { useState, useRef } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import dicomParser from 'dicom-parser';

function App() {
  const [imageData, setImageData] = useState(null);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result;
        const dicomData = dicomParser.parseDicom(arrayBuffer);
        const pixelData = dicomParser.readEncapsulatedPixelData(dicomData);
        setImageData(pixelData);
        extractMetadata(dicomData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const extractMetadata = (dicomData) => {
    const patientName = dicomData.string('x00100010');
    const studyDate = dicomData.string('x00080020');
    console.log('Patient Name:', patientName);
    console.log('Study Date:', studyDate);
  };

  const handleZoomIn = () => setZoom(zoom * 1.1);
  const handleZoomOut = () => setZoom(zoom / 1.1);

  const handlePan = (direction) => {
    const step = 10;
    if (direction === 'up') setPan((prev) => ({ ...prev, y: prev.y - step }));
    if (direction === 'down') setPan((prev) => ({ ...prev, y: prev.y + step }));
    if (direction === 'left') setPan((prev) => ({ ...prev, x: prev.x - step }));
    if (direction === 'right') setPan((prev) => ({ ...prev, x: prev.x + step }));
  };

  const handleBrightnessChange = (event) => setBrightness(event.target.value);
  const handleContrastChange = (event) => setContrast(event.target.value);

  const applyImageStyles = () => ({
    transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
    filter: `brightness(${brightness}) contrast(${contrast})`,
  });

  return (
    <div className="App">
      <h1>DICOM Image Viewer with Manipulation Tools</h1>
      <input
        type="file"
        accept=".dcm"
        onChange={handleFileUpload}
        ref={fileInputRef}
      />
      {imageData && (
        <>
          <div className="image-manipulation-tools">
            <button onClick={handleZoomIn}>Zoom In</button>
            <button onClick={handleZoomOut}>Zoom Out</button>
            <button onClick={() => handlePan('up')}>Pan Up</button>
            <button onClick={() => handlePan('down')}>Pan Down</button>
            <button onClick={() => handlePan('left')}>Pan Left</button>
            <button onClick={() => handlePan('right')}>Pan Right</button>
            <div>
              <label>Brightness:</label>
              <input
                type="range"
                min="-100"
                max="100"
                value={brightness}
                onChange={handleBrightnessChange}
              />
            </div>
            <div>
              <label>Contrast:</label>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={contrast}
                onChange={handleContrastChange}
              />
            </div>
          </div>

          <div className="dicom-image-container">
            <img
              src={URL.createObjectURL(imageData)}
              alt="DICOM Image"
              style={applyImageStyles()}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
