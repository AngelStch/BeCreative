import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import useForm from '../../hooks/useForm.js';
import authContext from '../../contexts/authContext.js';
import userService from '../../service/userService.js';

const loginFormKeys = {
  Username: 'username',
  Password: 'password'
};

export default function Login() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const { logigSubmitHandler } = useContext(authContext);
  const { values, onChange, onSubmit } = useForm(logigSubmitHandler, {
    [loginFormKeys.Username]: '',
    [loginFormKeys.Password]: ''
  });

  const handleLogin = async () => {
    try {
      const token = await userService.loginUser(
        values[loginFormKeys.Username],
        values[loginFormKeys.Password]
      );

      // Set the token in your authentication context or local storage
      // For example, if you have a setToken function in your authContext
      // setToken(token);

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="formToRegister">
      <form className="form-container" onSubmit={onSubmit}>
        <h2 className="textForm">Welcome back!</h2>
        <label htmlFor="username" className="RegisterLabel">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-input "
          onChange={onChange}
          value={values[loginFormKeys.Username]}
        />

        <label htmlFor="password" className="RegisterLabel">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          onChange={onChange}
          value={values[loginFormKeys.Password]}
        />
        <input type="submit" className="register-button" value="Log in" onClick={handleLogin} />
      </form>
    </div>
  );
}
