// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: { type: String, unique: true },
  password: String,
  status: String,
  interest_id: Number,
  created_at: Date,
  roleid: { 
    type: Number,
    default: 2, // Default to regular user
    required: true
  },
  dob: { type: Date, default: null },
    gender: { type: String, default: null },
    city: { type: String, default: null },
    state: { type: String, default: null },
    pincode: { type: String, default: null }
}, 
{
  collection: 'user',      // Collection name
  versionKey: false        // Disable __v
}); 

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
