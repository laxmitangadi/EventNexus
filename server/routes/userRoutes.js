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
    req.session.userId = user._id;

    // Prepare response
    const response = {
      success: true,
      message: `Welcome, ${user.name}`,
      sessionId: req.sessionID,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        dob: user.dob,
        city: user.city,
        state: user.state,
        pincode: user.pincode,
        status: user.status,
        roleid: user.roleid || 1, // Default to 1 if undefined
        interest_id: user.interest_id,
        created_at: user.created_at
      }
    };

    console.log('Sending response:', response); // Debug log
    return res.json(response);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});


// userRoutes.js
router.post('/register', async (req, res) => {
  const { name, phone, email, roleid = 1, password } = req.body; // Default roleid to 1

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: 'User already exists' });
    }

    const newUser = new User({
      name,
      phone,
      email,
      roleid: Number(roleid), // Ensure it's a number
      password,
      status: 'active',
      created_at: new Date(),
    });

    await newUser.save();

    res.json({ 
      success: true, 
      message: 'Registration successful',
      user: newUser // Send the full user object
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
