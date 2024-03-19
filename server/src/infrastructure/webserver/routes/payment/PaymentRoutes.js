const express = require('express');
const paymentRoutes = express.Router();
const PaymentRepository = require('../../../repositories/PaymentRepository');
const paymentRepository = new PaymentRepository();


paymentRoutes.post('/pay',paymentRepository.processPayment)
paymentRoutes.post('/makepay',paymentRepository.makePayment)
paymentRoutes.post('/payWithStripe',paymentRepository.paymentStripe)





module.exports = paymentRoutes;
