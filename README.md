Overview - 

This project is a full-stack application that allows users to sign up, log in, create nested folders, store images within those folders, and preview the images. The app features a user-friendly interface for managing images and folders, providing a seamless experience for organizing digital content.

Features - 

User Authentication: Sign up, log in, and log out functionality.
Folder Management: Create nested folders to organize images.
Image Storage: Upload images and store them within specific folders.
Image Preview: Clickable view button to preview images in the center of the screen.
Responsive Design: User interface adapts to various screen sizes.

Installation - 

Prerequisites

Node.js
npm
MongoDB
Git
Backend Setup

Clone the repository:

git clone https://gitlab.com/me8464722/imageupload.git
cd backend

Install backend dependencies:

npm install

Create a .env file in the backend directory and add the following environment variables:

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:

npm run server 

Frontend Setup - 

Navigate to the frontend directory:

cd ../frontend

Install frontend dependencies:

npm install

Start the frontend development server:

npm run dev

Usage - 

Open your browser and navigate to http://localhost:3000.
Sign up for a new account or log in with an existing account.
Create folders and upload images.
Click on the view button to preview images.

API Endpoints - 

User Routes:

Sign Up - 

POST /api/users/signup

Request body:

{
  "fullName": "John Doe",
  "username": "johndoe",
  "password": "password",
  "gender": "male",
  "profilePic": "url_to_profile_pic"
}

Log In -

POST /api/users/login

Request body:

{
  "username": "johndoe",
  "password": "password"
}

Log Out - 

POST /api/users/logout

Folder Routes:

Create Folder - 

POST /api/folders

Request body:

{
  "name": "Folder Name",
  "parentFolderId": "parent_folder_id"
}

Get Folder - 

GET /api/folders/:folderId


Image Routes :

Upload Image - 

POST /api/images

Request body:

{
  "name": "Image Name",
  "urlEncodedString": "base64_encoded_image_string",
  "folderId": "folder_id"
}

Technologies Used - 

Frontend: React, Tailwind CSS, Flowbite React
Backend: Node.js, Express, Mongoose, JWT
Database: MongoDB
Deployment: Netlify (frontend), Render (backend)


Contributing - 

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

License - 

This project is licensed under the MIT License.

