const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Import the correct model
const session = require('express-session');

// LOGIN route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    if (user.password !== password) {
      return res.json({ success: false, message: 'Incorrect password' });
    }

    // Create a session for the user
    req.session.userId = user._id;  // Storing the user ID in the session

    // You could send a sessionId or token to the frontend (Optional: use JWT for more security)
    return res.json({
      success: true,
      message: `Welcome, ${user.name}`,
      sessionId: req.sessionID // Sending the session ID to the frontend
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});



// userRoutes.js
router.post('/register', async (req, res) => {
  const { name, phone, email, roleid, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      name,
      phone,
      email,
      roleid,
      password, // Consider hashing this in production
      status: 'active',
      created_at: new Date(),
    });

    await newUser.save();

    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


module.exports = router;
