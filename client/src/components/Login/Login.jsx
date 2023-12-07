import React, { useContext, useState } from "react";
import useForm from "../../hooks/useForm.js";
import AuthContext from "../../contexts/authContext";
import '../../../public/css/form.css';

const LoginFormKeys = {
  Email: 'email',
  Password: 'password',
};

export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };  

    if (values[LoginFormKeys.Email].trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(values[LoginFormKeys.Email])) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    if (values[LoginFormKeys.Password].trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (values[LoginFormKeys.Password].length < 4) {
      newErrors.password = 'Password minimal length is 4';
      isValid = false;
    } else {
      newErrors.password = '';
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

  return (
    <div className="formToRegister">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="textForm">Welcome back!</h2>

        <label htmlFor="email" className="RegisterLabel">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name={LoginFormKeys.Email}
          className="form-input"
          onChange={onChange}
          value={values[LoginFormKeys.Email]}
        />
        <div className="error-message">{errors.email}</div>

        <label htmlFor="password" className="RegisterLabel">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name={LoginFormKeys.Password}
          className="form-input"
          onChange={onChange}
          value={values[LoginFormKeys.Password]}
        />
        <div className="error-message">{errors.password}</div>

        <input type="submit" className="register-button" value="Log in" />
      </form>
    </div>
  );
}
