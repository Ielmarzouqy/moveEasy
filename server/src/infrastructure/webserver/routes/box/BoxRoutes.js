const express = require('express');
const BoxController = require('../../../../adapters/controllers/box/BoxController');

const boxRoutes = express.Router();
const boxController = new BoxController();

boxRoutes.get('/all-boxes',boxController.getAllBoxes );
boxRoutes.post('/create-box',boxController.createBox);
boxRoutes.put('/update-box/:boxId', boxController.updateBox);
boxRoutes.delete('/delete-box/:boxId', boxController.deleteBox);


module.exports = boxRoutes;
