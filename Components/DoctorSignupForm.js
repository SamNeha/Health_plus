import React, { useState } from 'react';
import '../Styles/SignupForm.css';
import Nav from '../Components/Nav';
import { Link, useNavigate } from 'react-router-dom';

function DoctorSignupForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [specialization, setSpecialization] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      contactNumber === '' ||
      licenseNumber === '' ||
      specialization === ''
    ) {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('/docsignup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            contactNumber,
            licenseNumber,
            specialization,
          }),
        });

        if (response.ok) {
          navigate('/doctorlogin');
        } else {
          const data = await response.json();
          console.error(data); // Log the error response to the console
          alert('An error occurred during registration');
        }
      } catch (error) {
        console.error(error); // Log any unhandled exceptions to the console
        alert('An error occurred during registration');
      }
    }
  };

  return (
    <div className="home-section"style={{
      backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/16/47/22/360_F_216472247_cT66WDoS0fp1s3wC7eaykMJNDGVbOBPq.jpg")',
     }}>
      <Nav />
      <div className="signup-form">
        <div className="form-container" style={{width: "750px"}}>
          <button className="close-button" onClick={onClose}>
            &times; {/* Unicode "times" symbol (X) for closing */}
          </button>
          <h2>Doctor Sign Up</h2>
          <div className="links">
            <Link to="/signupform">Patient</Link>
          </div>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label>Contact:</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                required
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>License Number:</label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                required
                placeholder="License Number"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Specialization:</label>
              <input
                type="text"
                id="specialization"
                name="specialization"
                required
                placeholder="Specialization"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/doctorlogin"><b>Login</b></Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoctorSignupForm;
