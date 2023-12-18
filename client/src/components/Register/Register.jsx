import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: 'email',
  Password: 'password',
  RepeatPassword: 'repeatPassword',
};

export default function Register() {
  const { registerSubmitHandler , registerError, clearError } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.RepeatPassword]: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    // Validate email
    if (values[RegisterFormKeys.Email].trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(values[RegisterFormKeys.Email])) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    } else {
      newErrors.email = '';
    }
    // Validate password
    if (values[RegisterFormKeys.Password].trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (values[RegisterFormKeys.Password].length < 4) {
      newErrors.password = 'Password minimal length is 4';
      isValid = false;
    } else {
      newErrors.password = '';
    }
   
    if (values[RegisterFormKeys.RepeatPassword]!==values[RegisterFormKeys.Password]) {
      newErrors.repeatPassword = 'Passwords dont match';
      isValid = false;
    } else {
      newErrors.repeatPassword = '';
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(e); 
    } else {
      console.log('Form validation failed');
    }
  };

  useEffect(() => {
    return () => {clearError()}
   },[])

  return (
    <div className="formToRegister">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="textForm">Welcome, friend!</h2>
        
        <label htmlFor="email" className="RegisterLabel">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-input"
          onChange={onChange}
          value={values[RegisterFormKeys.Email]}
        />
        <div className="error-message">{errors.email}</div>

        <label htmlFor="password" className="RegisterLabel">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          onChange={onChange}
          value={values[RegisterFormKeys.Password]}
        />
        <div className="error-message">{errors.password}</div>

        <label htmlFor="repeatPassword" className="RegisterLabel">
          Repeat Password:
        </label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          className="form-input"
          onChange={onChange}
          value={values[RegisterFormKeys.RepeatPassword]}
        />
        <div className="error-message">{errors.repeatPassword}</div>
        {registerError && (
          <div>
            <p className='error-message'>{registerError}</p>
          </div>
        )}
        <input type="submit" value="Register" className="register-button" />

      </form>
    </div>
  );
}
