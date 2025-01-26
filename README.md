 DICOM Image Viewer
This project is a **DICOM Image Viewer** application built using **React** for the frontend and **Spring Boot** for the backend. It allows users to upload DICOM images, view them, and manipulate them using basic image editing tools such as cropping, zooming, and adjusting brightness and contrast. The application also displays relevant metadata extracted from the DICOM files (such as patient name and study date) and supports handling and processing of DICOM files.

## Features

- **Image Upload**: Upload DICOM files from your local machine.
- **DICOM Image Viewer**: View uploaded DICOM images.
- **Basic Image Manipulation**: Adjust brightness, contrast, zoom, panning, and cropping.
- **DICOM Metadata Display**: View important metadata associated with DICOM images, such as patient name and study date.
- **Light/Dark Mode**: Toggle between light and dark modes for a comfortable viewing experience.
- **DICOM File Handling**: Supports processing and displaying of DICOM files.
- **Frontend & Backend Integration**: React frontend communicates with Spring Boot backend via RESTful APIs.

## Tech Stack

- **Frontend**: React, JavaScript, CSS (for styling)
- **Backend**: Spring Boot (Java), RESTful API
- **Image Handling**: Java libraries for processing DICOM files
- **Metadata Extraction**: Using DICOM libraries to extract metadata
- **Frontend & Backend Communication**: RESTful APIs using Fetch or Axios

## Getting Started

### 1. Clone the Repository

To get started with the project, first clone the repository to your local machine:

```
git clone https://github.com/yourusername/dicom-image-viewer.git
cd dicom-image-viewer
```

### 2. Setting up the Backend (Spring Boot)

#### 2.1 Install Java & Maven

Make sure you have **Java 8 or higher** and **Maven** installed on your system.

- You can check the Java version using:
  
  ```
  java -version
  ```

#### 2.2 Run Spring Boot Application

- Navigate to the `backend` directory inside your project folder.
- Build and run the Spring Boot application:
  
  ```
  cd backend
  mvn spring-boot:run
  ```

This will start the Spring Boot backend on `http://localhost:8080`.

### 3. Setting up the Frontend (React)

#### 3.1 Install Node.js & npm

Ensure **Node.js** and **npm** are installed on your system. You can check the installation with:

```
node -v
npm -v
```

#### 3.2 Install Dependencies

Navigate to the `frontend` directory and install the required dependencies:

```
cd frontend
npm install
```

#### 3.3 Run the React App

Start the development server:

```
npm start
```

This will launch the React frontend on `http://localhost:3000`. It will interact with the Spring Boot backend running on `http://localhost:8080`.

## File Structure

Here’s the file structure of the project:

```
dicom-image-viewer/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── dicomviewer/
│   │   │   │           ├── controller/
│   │   │   │           │   └── ImageController.java
│   │   │   │           ├── service/
│   │   │   │           │   └── DicomService.java
│   │   │   │           ├── model/
│   │   │   │           │   └── ImageMetadata.java
│   │   │   │           └── DicomViewerApplication.java
│   │   └── resources/
│   │       └── application.properties
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── ImageViewer.js
│       │   └── ImageUpload.js
│       ├── App.js
│       ├── index.js
│       └── styles.css
├── pom.xml (Maven Configuration for backend)
├── package.json (npm configuration for frontend)
```

## Backend Details

The **backend** is built using **Spring Boot**. It exposes the following RESTful endpoints:

- **POST /api/images/upload**: Uploads a DICOM file to the backend for processing.
- **GET /api/images/{imageId}/metadata**: Fetches metadata associated with a DICOM image.
- **GET /api/images/{imageId}**: Retrieves the processed image in a viewable format (such as PNG or JPEG).

The backend processes the DICOM files, extracts metadata, and saves the processed images for frontend use.

## Frontend Details

The **frontend** is built using **React**. It includes the following components:

- **ImageUpload**: Allows the user to upload a DICOM file.
- **ImageViewer**: Displays the uploaded DICOM image and provides basic manipulation options (brightness, contrast, zoom, panning, cropping).
- **App.js**: Main React component that ties everything together, rendering the ImageUpload and ImageViewer components.

The frontend communicates with the Spring Boot backend using **Axios** or **Fetch** for API requests, handling both image uploads and retrieval of metadata and processed images.

## Image Manipulation Features

The application provides the following image manipulation features:

- **Zooming**: Allows the user to zoom in/out of the image.
- **Panning**: Users can drag the image to pan across different sections.
- **Cropping**: Crop a specific region of the image.
- **Adjust Brightness**: Adjust the brightness of the image.
- **Adjust Contrast**: Adjust the contrast of the image.

## DICOM Metadata

When a DICOM image is uploaded, the application extracts metadata such as:

- **Patient Name**
- **Study Date**
- **Study Description**
- **Modality**

This metadata is displayed on the frontend for the user to view.

## Light/Dark Mode

The application supports light and dark mode themes. Users can toggle between them for a personalized viewing experience.

## Additional Information

- **DICOM Files**: DICOM (Digital Imaging and Communications in Medicine) files are a standard format for medical images. This application supports viewing and processing DICOM files for medical use cases.
- **Spring Boot Setup**: The backend is responsible for handling image processing, storing files, and serving them to the frontend. It uses the **Spring Web** and **Spring Boot DevTools** for API endpoints and development convenience.

## Contributing

Feel free to fork this project and contribute by submitting pull requests. You can contribute in the following ways:

- **Bug Fixes**: If you find any bugs, please feel free to submit fixes.
- **Feature Requests**: If you have an idea for a feature, submit an issue and create a pull request if you have a solution.
- **Documentation**: Improve this documentation or add new usage examples.

## License

This project is open-source and available under the MIT License.

---

Let me know if this works for you!
