const Payment = require("../databases/mongodb/models/Payment");
const BaseRepository = require("./BaseRepository");
// const Reservation = require("../databases/mongodb/models/Reservation");
const Stripe = require('stripe');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const stripe = Stripe('your_stripe_secret_key');


class PaymentRepository extends BaseRepository {
  constructor() {
    super(Payment);
  }
  
processPayment = async (req, res) => {
    try {
      const { amount, token, userId } = req.body;

      console.log( "payment process: ",amount, token, userId)
  
      const charge = await stripe.charges.create({
        amount,
        currency: 'usd',
        source: token.id,
        description: 'Test Charge',
      });
  
      if (charge.status === 'succeeded') {
        const newPayment = new Payment({
          userId,
          stripeChargeId: charge.id,
          amount: charge.amount,
          currency: charge.currency,
          status: charge.status,
          description: charge.description || 'Test Charge',
        });
  
        await newPayment.save();
  
        res.json({ success: true, charge, message: 'Payment processed and recorded' });
      } else {
        res.status(500).json({ success: false, message: 'Stripe charge was unsuccessful', charge });
      }
    } catch (error) {
      console.error('Payment error:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  };


  makePayment =async (req, res) => {
    const { userId, numberCard, amount, currency, description } = req.body;
  
    try {
      const newPayment = new Payment({
        userId, // Make sure this matches an existing User in your database
        numberCard,
        amount,
        currency,
        description,
      });
  
      const savedPayment = await newPayment.save();
  
      res.status(201).json({
        message: 'Payment initiated successfully',
        paymentDetails: savedPayment,
      });
    } catch (error) {
      res.status(400).json({ message: 'Error processing payment', error: error.message });
    }
  }  

  paymentStripe=  async (req, res) => {
    const { userId, numberCard, amount, currency, description } = req.body;
  
    try {
      // Convert amount to cents for Stripe
      const stripeAmount = Math.round(amount * 100);
  
      // Create a charge: this will charge the user's card
      const charge = await stripe.charges.create({
        amount: stripeAmount,
        currency: currency,
        source: numberCard, // This should be a token id received from Stripe.js on the frontend
        description: description,
      });
  
      // Assuming charge is successful, create and save the payment record
      if (charge.status === 'succeeded') {
        const newPayment = new Payment({
          userId,
          numberCard: charge.source.last4, // Store only the last 4 digits for security
          amount,
          currency,
          status: 'succeeded',
          description,
        });
  
        const savedPayment = await newPayment.save();
  
        res.status(201).json({
          message: 'Payment processed successfully',
          paymentDetails: savedPayment,
        });
      } else {
        // Handle failed charge
        res.status(400).json({ message: 'Payment processing failed', charge });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error processing payment', error: error.message });
    }
}
  
}

module.exports = PaymentRepository;
