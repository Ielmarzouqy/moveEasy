const express = require('express');
const BoxController = require('../../../../adapters/controllers/box/BoxController');

const boxRoutes = express.Router();
const boxController = new BoxController();

boxRoutes.get('/all-boxes',boxController.getAllBoxes );

module.exports = boxRoutes;
