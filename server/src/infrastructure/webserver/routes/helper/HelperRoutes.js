const HelperController = require('../../../../adapters/controllers/helper/HelperController');

const express = require('express');
const helperRoutes = express.Router();
const helperController = new HelperController();
helperRoutes.get('/all-helpers', helperController.getAllHelpers);

module.exports = helperRoutes;
