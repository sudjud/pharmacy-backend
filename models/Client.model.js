const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = Schema({
  name: String,
  money: {
    type: Number,
    default: 1000
  },
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'Drug'
  }],
  cart: {
    sum: {
      type: Number,
      default: 0
    },
    drugs: [{
      type: Schema.Types.ObjectId,
      ref: 'Drug',
    }]
  }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;