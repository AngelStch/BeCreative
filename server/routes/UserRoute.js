const express = require('express');
const jwt = require('jsonwebtoken');
const { checkAuthentication } = require('../middleWares/authMiddleWare.js');
const User = require('../models/user');

const router = express.Router();

// Secret key for JWT (replace with your actual secret key)
const JWT_SECRET_KEY = 'ro8BS6Hiivgzy8Xuu09JDjlNLnSLldY5';

// Register a new user and generate/authenticate a token
router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET_KEY, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error('Registration failed:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Check authentication
router.get('/check-auth', checkAuthentication, (req, res) => {
  res.json({ isAuthenticated: true });
});

module.exports = router;