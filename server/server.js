const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session'); // Add express-session
require('dotenv').config();


const app = express();

app.use(express.json());

// Configure CORS to allow credentials (cookies)
app.use(cors({
  origin: 'http://localhost:3000', // React app origin
  credentials: true
}));

// Setup session
// Express session middleware
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // true in production with HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000 // 30 seconds
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));


// Routes
const myRoutes = require('./routes/myRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api', myRoutes);
app.use('/api', userRoutes);

// Add this with other route imports
const eventRoutes = require('./routes/eventRoutes');

// Add this with other route uses
app.use('/api/events', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
