import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AdminPanel from './components/AdminPanel';
import './styles/App.css';
import './styles/LoginPage.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <div className="page-container">
              <Dashboard />
            </div>
          } />
          <Route path="/admin" element={
            <div className="page-container">
              <AdminPanel />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;