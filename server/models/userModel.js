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
  roleid: Number
}, 
{
  collection: 'user',      // Collection name
  versionKey: false        // Disable __v
}); 

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
