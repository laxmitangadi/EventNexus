// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_id: Number,
  name: String,
  phone: String,
  email: { type: String, unique: true },
  password: String,
  status: String,
  interest_id: Number,
  created_at: Date,
  role_id: Number
}, { collection: 'user' }); // Explicitly specify collection name if different

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);