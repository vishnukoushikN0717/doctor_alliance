# Doctor Alliance

A full-stack web application that allows users to securely upload, manage, and organize their pictures. The project leverages React for the frontend, Flask for the backend, and Supabase for storage and database management.

## Features

- **User Authentication:** Dummy authentication system.
- **Secure Uploads:** Allows image-only uploads.
- **Responsive Design:** Ensures seamless usability across devices.
- **Database Integration:** Utilizes Supabase for data storage and management.

## Tech Stack

### Frontend
- React with Vite
- CSS for styling
- Axios for API calls

### Backend
- Python Flask
- JWT for authentication
- Flask-CORS for handling cross-origin requests

### Database
- Supabase (PostgreSQL)
- Row Level Security (RLS)
- Automated timestamp management

## Project Structure

```
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
│   │   │   ├── global.css
│   │   │   ├── LoginPage.css
│   │   │   ├── AdminPanel.css
│   │   │   ├── DashBoard.css
│   │   │   └── App.css
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python (v3.8 or higher)
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/vishnukoushikN0717/doctor_alliance.git
   cd doctor-alliance
   ```

2. **Backend Setup**
   ```bash
   cd backend
   
   # If using an existing virtual environment
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # If setting up a new virtual environment
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt

   # Start the backend server
   python app.py
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the Application**
   - The application will be available at: [http://localhost:5000](http://localhost:5000)

### Default Credentials
- **Username:** admin  
- **Password:** admin

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    contact_date DATE NOT NULL,
    profile_picture_url TEXT NOT NULL
);
```

## Security Features

- JWT-based authentication
- Image-only file upload restriction
- Row Level Security (RLS) in Supabase
- Client-side and server-side validation
- Secure file storage

## API Endpoints

- **POST /login:** User authentication
- **POST /upload:** Upload an image
- **GET /uploads:** Fetch uploaded images

## Acknowledgments

- **Supabase:** Database hosting
- **Flask Documentation**: Official Flask documentation
- **React Documentation:** Official React documentation
- **Vite:** Build tool

## Deployed Links

- **Live Server:** [Doctor Alliance](https://doctor-alliance-byh9.vercel.app/)

