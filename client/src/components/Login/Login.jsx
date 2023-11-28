import { useContext, useEffect, useState } from 'react';
import '../../../public/css/style.css'
import useForm from '../../hooks/useForm.js';
import authContext from '../../contexts/authContext.js';
import { getAllUsers } from '../../service/storiesService.js';

const loginFormKeys = {
  Username: 'username',
  Password: 'password'
}

export default function Login() {
  const [users, setUsers] = useState([])
useEffect(() => {
  getAllUsers()
    .then(response => setUsers(response.data))
    .catch(error => console.error(error));
}, []);
console.log(users)
  const { logigSubmitHandler } = useContext(authContext)
  const { values, onChange, onSubmit } = useForm(logigSubmitHandler, {
    [loginFormKeys.Username]: '',
    [loginFormKeys.Password]: ''
  })

  return (
    <div className="formToRegister">
      <form className="form-container" onSubmit={onSubmit}>
        <h2 className="textForm">Wellcome back!</h2>
        <label htmlFor="username" className="RegisterLabel">Username:</label>
        <input
          type="text" id="username" name="username" className="form-input " onChange={onChange}
          value={values[loginFormKeys.Username]} />

        <label htmlFor="password" className="RegisterLabel">Password:</label>
        <input
          type="password" id="password" name="password" className="form-input" onChange={onChange}
          value={values[loginFormKeys.Password]} />
        <input type='submit' className="register-button" value="Log in" />
      </form>
    </div>
  );
}
