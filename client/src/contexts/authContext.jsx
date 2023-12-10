import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../service/authService.js';
import usePersistedState from "../hooks/usePersistedState.js";
import Path from '../path.js';
import { useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [loginError, setLoginError] = useState('');
    const [registerError, setRegisterError] = useState('');

    const clearError = () => {
        setLoginError(''),
            setRegisterError('')
    }

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
             setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            setLoginError('');
            navigate(Path.Home)
        } catch (error) {
            setAuth({});
            setLoginError(error.message);
        }
    }

    const registerSubmitHandler = async (values) => {

        try {
            const result = await authService.register(
                values.email,
                values.password);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            navigate(Path.Home)
        } catch (error) {
            setAuth({});
            setRegisterError(error.message);
        }
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken')
        navigate(Path.Home)
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        clearError,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        loginError,
        registerError
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;