const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Changed from 'name' to 'title'
  description: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number, required: true },
  organizerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  sponsored: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String }
}, {
  collection: 'events',
  versionKey: false
});

module.exports = mongoose.models.Event || mongoose.model('Event', EventSchema);