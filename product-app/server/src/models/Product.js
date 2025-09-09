const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, default: '' },
  category: { type: String, default: 'General' },
  image: { type: String, default: '' } // base64 or image URL
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
