const express = require('express');
const roleRoutes = express.Router();
const RoleController = require('../../../../adapters/controllers/auth/RoleController');

const roleController = new RoleController()


roleRoutes.get('/all-role', roleController.getRoles);
roleRoutes.get('/usersrole', roleController.getUserByRole);
// router.get('/usersrole', ()=>{console.log('hi')});



// module.exports = {getRoles, getUserByRole};
module.exports = roleRoutes;
