const mongoose = require('../../database/database');

const EventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,

  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;