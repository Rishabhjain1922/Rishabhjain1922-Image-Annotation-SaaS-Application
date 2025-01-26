import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <div className="image-upload">
      <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
      {imageFile && <img src={imageFile} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '20px' }} />}
    </div>
  );
};

export default ImageUpload;
