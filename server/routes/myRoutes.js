const express = require('express');
const router = express.Router();
const MyModel = require('../models/myModel.js');
 
// POST route
router.post('/add', async (req, res) => {
  const newData = new MyModel(req.body);
  try {
    await newData.save();
    res.status(200).json({ message: 'Data saved!' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// GET route
router.get('/all', async (req, res) => {
  try {
    const data = await MyModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
