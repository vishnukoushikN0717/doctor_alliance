import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/Supabase.jsx';
import '../styles/DashBoard.css';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactDate, setContactDate] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsSubmitting(true);

    try {
      if (!file) {
        setError('Please upload a file');
        return;
      }

      const fileName = `${Date.now()}-${file.name}`;

      const { data, error: uploadError } = await supabase.storage
        .from('profile-pictures')
        .upload(fileName, file);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        setError(`Upload error: ${uploadError.message}`);
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('profile-pictures')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('users')
        .insert([
          {
            name: name,
            email: email,
            contact_date: contactDate,
            profile_picture_url: publicUrl
          }
        ]);

      if (dbError) {
        console.error('Database error:', dbError);
        setError(`Database error: ${dbError.message}`);
        return;
      }

      setMessage('Registration successful! Redirecting...');

      setName('');
      setEmail('');
      setContactDate('');
      setFile(null);

      setTimeout(() => {
        navigate('/admin');
      }, 2000);

    } catch (err) {
      console.error('Unexpected error:', err);
      setError(`An unexpected error occurred: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>User Registration</h1>
          {error && (
            <div className="alert error">
              <strong>Error: </strong>{error}
            </div>
          )}
          {message && (
            <div className="alert success">
              {message}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="dashboard-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactDate">Contact Date</label>
            <input
              id="contactDate"
              type="date"
              value={contactDate}
              onChange={(e) => setContactDate(e.target.value)}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture</label>
            <div className="file-input-wrapper">
              <input
                id="profilePicture"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept="image/*"
                required
                className="form-input"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
