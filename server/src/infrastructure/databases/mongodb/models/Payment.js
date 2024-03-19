const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
  userId: {
    type: Object,
    ref: 'User', // Assuming you have a User model
    
  },
  numberCard: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
    default: 'usd',
  },
  status: {
    type: String,
    required: true,
    enum: ['succeeded', 'pending', 'failed'],
    default: 'pending',
  },
  description: {
    type: String,
    default: '',
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Payment = model('Payment', paymentSchema);

module.exports = Payment;
