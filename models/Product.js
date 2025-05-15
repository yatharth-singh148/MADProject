// models/Product.js
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    canteen: { type: mongoose.Schema.Types.ObjectId, ref: 'Canteen' }
  });
  
  module.exports = mongoose.model('Product', productSchema);
  