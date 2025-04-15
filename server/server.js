const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session'); // Add express-session
require('dotenv').config();

const app = express();




app.use(cors());
app.use(express.json());

// Setup session
app.use(session({
  secret: 'your_secret_key', // Choose a secret key for session encryption
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true if using https
}));

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));


// Routes
const myRoutes = require('./routes/myRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api', myRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
