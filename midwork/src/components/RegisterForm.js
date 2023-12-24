// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending login request to http://localhost:5000/users/login with data:', formData);
      await axios.post('http://localhost:5000/users/login', formData);
      console.log('Login successful');
      // You can redirect the user or perform other actions after successful login
    } catch (error) {
      console.error('Error logging in', error);
    }
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <img
        src="rm.jpg"
        alt="background"
        style={{ width: '10%', marginBottom: '20px' }}
      />
      <form style={{ width: '500px', textAlign: 'center', color: '#000' }} onSubmit={handleSubmit}>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        {/* Submit button */}
        {/* <Link to="/profile"> */}

        <button type="submit" className="btn btn-primary btn-block mb-4" style={{ width: '400px', marginLeft: 'auto', backgroundColor: 'darkblue' }}>
          Sign in
        </button>
        {/* </Link> */}

        {/* Register buttons */}
        <div className="text-center">
          <p style={{ marginLeft: 'auto' }}>Not a member? <a href="#!">Register</a></p>
          <p style={{ marginLeft: 'auto' }}>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;