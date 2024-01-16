const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  name: String,
});

const Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;
