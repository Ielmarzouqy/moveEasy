const express = require('express');
const carRoutes = express.Router();
const CarController = require('../../../../adapters/controllers/car/CarController');
const carController = new CarController();

carRoutes.get('/all-cars', carController.getAllCars);
carRoutes.get('/car-details/:carId', carController.getCarById);

carRoutes.post('/create-car',carController.createCar)
carRoutes.put('/update-car/:carId',carController.updateCar)
carRoutes.delete('/delete-car/:carId',carController.deleteCar)



module.exports = carRoutes;
