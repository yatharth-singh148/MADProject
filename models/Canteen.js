// models/Canteen.js
const mongoose = require('mongoose');
const canteenSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
});

module.exports = mongoose.model('Canteen', canteenSchema);