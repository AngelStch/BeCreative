import { useContext } from "react";
import useForm from "../../hooks/useForm.js";
import AuthContext from "../../contexts/authContext";

const LoginFormKyes = {
  Email: 'email',
  Password: 'password',
};

export default function Login() {

  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
      [LoginFormKyes.Email]: '',
      [LoginFormKyes.Password]: '',
  });

  return (
    <div className="formToRegister">
      <form className="form-container" onSubmit={onSubmit}>
        <h2 className="textForm">Welcome back!</h2>
        <label htmlFor="email" className="RegisterLabel">
          email/Email:
        </label>
        <input
          type="text"
          id="email"
          name={LoginFormKyes.email}
          className="form-input "
          onChange={onChange}
          value={values[LoginFormKyes.Email]}
        />

        <label htmlFor="password" className="RegisterLabel">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name={LoginFormKyes.Password}
          className="form-input"
          onChange={onChange}
          value={values[LoginFormKyes.Password]}
        />
        <input type="submit" className="register-button" value="Log in" />
      </form>
    </div>
  );
}
