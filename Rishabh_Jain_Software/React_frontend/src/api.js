import axios from 'axios';

const API_URL = 'http://localhost:8080/api/'; // Change as per backend

export const uploadImage = (imageData) => {
  const formData = new FormData();
  formData.append('image', imageData);

  return axios.post(`${API_URL}upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const saveAnnotation = (annotationData) => {
  return axios.post(`${API_URL}saveAnnotation`, annotationData);
};
