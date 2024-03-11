const express = require('express');
const moverRoutes = express.Router();
// const CarController = require('../../../../adapters/controllers/car/CarController');
const MoverController = require('../../../../adapters/controllers/mover/MoverController');
const moverController = new MoverController();

moverRoutes.get('/all-movers', moverController.getAllMovers);
moverRoutes.get('/mover-details/:moverId', moverController.getMoverById);

moverRoutes.post('/create-mover',moverController.createMover)
moverRoutes.put('/update-mover/:moverId',moverController.updateMover)
moverRoutes.delete('/delete-mover/:moverId',moverController.deleteMover)



module.exports = moverRoutes;
