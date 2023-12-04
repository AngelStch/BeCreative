import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'repeatPassword',
};
export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
      [RegisterFormKeys.Email]: '',
      [RegisterFormKeys.Password]: '',
      [RegisterFormKeys.RepeatPassword]: '',
      
  });
  return (
    <div className="formToRegister">
      <form className="form-container" onSubmit={onSubmit}>
        <h2 className="textForm">Welcome, friend!</h2>
        <label htmlFor="email" className="RegisterLabel">
        Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          required
          className="form-input"
          onChange={onChange}
          values={values[RegisterFormKeys.Email]}
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
          onChange={onChange}
          values={values[RegisterFormKeys.Password]}
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
          onChange={onChange}
          values={values[RegisterFormKeys.RepeatPassword]}
        />

        <input type="submit" value="Register" className="register-button" />
        
      </form>
    </div>
  );
}
