const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drugSchema = Schema({
  name: String,
  price: Number,
  needRecipe: Boolean,
  category: {
    ref: 'Category',
    type: Schema.Types.ObjectId
  }
});

const Drug = mongoose.model('Drug', drugSchema);

module.exports = Drug;