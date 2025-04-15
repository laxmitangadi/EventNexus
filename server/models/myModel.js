const mongoose = require('mongoose');

// Check if the model is already defined to avoid overwriting it
const MyModel = mongoose.models.MyModel || mongoose.model('MyModel', new mongoose.Schema({
  name: String,
  email: String,
}));

module.exports = MyModel;
