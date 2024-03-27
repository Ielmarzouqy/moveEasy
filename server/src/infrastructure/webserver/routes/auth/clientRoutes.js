const express = require('express');
const userRoutes = express.Router();
const UserController = require('../../../../adapters/controllers/auth/UserController');
const AuthValidator = require('../../../../adapters/middleware/AuthValidator');

const userController = new UserController();

userRoutes.post('/register', userController.registerUser);

userRoutes.post('/login', userController.loginUser);

userRoutes.get('/dashboard', userController.dashboard);

userRoutes.post('/logout',AuthValidator.validateToken, userController.logoutUser);
userRoutes.delete('/deleteuser/:_id',userController.deleteUser)

userRoutes.post('/curent', (req, res) => {
  res.json({ message: 'curent user' });
});

userRoutes.get(
  '/verify',
  AuthValidator.validateMailedToken,
  userController.verifyEmail
);
userRoutes.get('/profile',AuthValidator.validateToken, userController.getUserInfo);

// userRoutess.post('/forgot-password',userController.forgetPassword);
// userRoutess.post('/reset-password/', userController.resetPassword);

userRoutes.post('/roleofuser', userController.getRoleOfUser);

module.exports = userRoutes;
