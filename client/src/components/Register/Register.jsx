import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../service/userService.js';

export default function Register() {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (formData.password !== formData.repeatPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      // Use the userService to handle registration
      await userService.registerUser(formData);

      // Redirect to the home page (or any other page)
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="formToRegister">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="textForm">Welcome, friend!</h2>
        <label htmlFor="username" className="RegisterLabel">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="form-input"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password" className="RegisterLabel">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="form-input"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="repeatPassword" className="RegisterLabel">
          Repeat Password:
        </label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          required
          className="form-input"
          value={formData.repeatPassword}
          onChange={handleChange}
        />

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}
