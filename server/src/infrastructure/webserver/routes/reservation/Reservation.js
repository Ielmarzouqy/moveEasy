const express = require('express');
const reservatoinRoutes = express.Router();
const ReservationController = require('../../../../adapters/controllers/reservation/ReservationController');
const reservationController = new ReservationController();


reservatoinRoutes.post('/reservation',reservationController.createRes)



module.exports = reservatoinRoutes;
