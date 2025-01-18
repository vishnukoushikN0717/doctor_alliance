# Doctor_Alliance_Assignment

A full-stack web application that lets users securely upload, manage, and organize their pictures. Built with React for the frontend, Flask for the backend, and Supabase for storage and database.

## Features

Dummy User authentication
Secure Pitures upload (Image only)
Responsive design
Database integration with Supabase

## Tech Stack

### Frontend
React + Vite
CSS for styling
Axios for API calls

### Backend
Python Flask
JWT for authentication
Flask-CORS for handling cross-origin requests

### Database
Supabase (PostgreSQL)
Row Level Security (RLS)
Automated timestamp management

## Project Structure
doctor-alliance/
├── backend/
│   ├── venv/
│   ├── app.py
│   ├── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginPage.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   └── DashBoard.jsx
│   │   ├── Services/
│   │   │   └── Supabase.jsx
│   │   ├── styles/
│   │   │   └── global.css
|   |   |   └── LoginPage.css
|   |   |   └── AdminPanel.css
|   |   |   └── DashBoard.css
|   |   |   └── App.css
│   │   └── App.jsx
│   └── package.json
└── README.md-This is the structure of the main files; the remaining ones are the default React + Vite files that are not listed here.eg:public directory

## Getting Started

### Prerequisites
Node.js (v14 or higher)
Python (v3.8 or higher)
Git

### Installation

1. Clone the repositorybash
git clone [ https://github.com/your-username/doctor-alliance.git](https://github.com/vishnukoushikN0717/doctor_alliance.git)
cd doctor-alliance
2. Backend Setupbash
cd backend
# If using existing venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# If setting up fresh
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Start the backend server
python app.py
3. Frontend Setupbash
cd frontend
npm install
npm run dev
4. Access the application at http://localhost:5000

### Default Credentials
Username: admin
Password: admin

## Database Schema

### Users Tablesql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    contact_date DATE NOT NULL,
    profile_picture_url TEXT NOT NULL
);

## Security Features

JWT-based authentication
PDF-only file upload restriction
Row Level Security (RLS) in Supabase
Client-side and server-side validation
Secure file storage


## I have included my Supabase credentials directly in the respective folders where they are needed, instead of using a .env file, to provide easier access when running the code.

## API Endpoints

POST /login - User authentication
POST /upload - Piture upload
GET /uploads - Fetch uploaded Pictures


## Acknowledgments

Supabase for database hosting
Flask documentation
React documentation
Vite build tool

## Deployed Links

Live Server Link:"https://doctor-alliance-byh9.vercel.app/"
