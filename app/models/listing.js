const mongoose = require('mongoose')

const listingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Listing', listingSchema)
