const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
});

module.exports = mongoose.model('Drink', drinkSchema);
