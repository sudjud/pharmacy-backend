const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = Schema({
  name: String
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;