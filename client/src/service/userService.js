import { post } from '../helper/request.js';

const loginUser = async (username, password) => {
  try {
    // Make a POST request to the login endpoint
    const response = await post('/api/users/login', {
      username,
      password,
    });

    // Assuming the server returns a token upon successful login
    const token = response.token;

    // Return the token or handle it as needed
    return token;
  } catch (error) {
    throw error;
  }
};

const registerUser = async (formData) => {
  try {
    const response = await post('http://localhost:5000/api/users/register', formData);
    response.message ==='User registered successfully'
    if (response.message ==='User registered successfully') {
      throw response;
    }
    const responseBody = await response.json();
    if (responseBody.message === 'User registered successfully') {
      return true;
    } else {
      throw new Error('Unexpected success response');
    }
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

const checkAuthentication = async (token) => {
  try {
    const response = await fetch('/api/users/check-auth', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
      },
    });

    if (!response.ok) {
      throw new Error('Authentication check failed');
    }

    const result = await response.json();
    return result.isAuthenticated; 
  } catch (error) {
    console.error('Error checking authentication:', error);
    throw error;
  }
};

export default {
  loginUser,
  registerUser,
  checkAuthentication,
};
