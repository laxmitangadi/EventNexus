const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');
const { isOrganizer } = require('../middleware/authMiddleware');


// POST /api/events
router.post('/', isOrganizer, async (req, res) => {
  try {
    const { title, description, date, time, location, category, price, capacity, imageUrl } = req.body;
    
    // Validate required fields
    if (!title || !date || !time || !location || !category || price === undefined || capacity === undefined) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    const newEvent = new Event({
      title,
      description,
      date: new Date(date),
      time,
      location,
      category,
      price: Number(price),
      capacity: Number(capacity),
      organizerId: req.user._id,
      imageUrl: imageUrl || '',
      sponsored: req.body.sponsored || false
    });

    await newEvent.save();
    
    res.status(201).json({ 
      success: true, 
      message: 'Event created successfully',
      event: newEvent
    });
  } catch (error) {
    console.error('Event creation error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Server error' 
    });
  }
});

// Other routes...
module.exports = router;