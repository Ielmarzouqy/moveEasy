const express = require('express');
const userRoutes = express.Router();
const UserController = require('../../../../adapters/controllers/auth/UserController');
const AuthValidator = require('../../../../adapters/middleware/AuthValidator');

const userController = new UserController()

userRoutes.post('/register', userController.registerUser)


userRoutes.post('/login',userController.loginUser)

// userRoutes.get('/dashboard', userController.dashboard)



// userRoutes.get('/logout',validateToken,logoutUser)
// userRoutes.get('/users',getUsers)


  
userRoutes.post('/curent',(req,res)=>{
    res.json({message:"curent user"})
})

userRoutes.get('/verify',AuthValidator.validateMailedToken,userController.verifyEmail);
// userRoutes.get('/profile',validateToken,getUserInfo);

// userRoutes.post('/forgot-password',userController.forgetPassword);
// userRoutes.post('/reset-password/', userController.resetPassword);


userRoutes.post('/roleofuser', userController.getRoleOfUser)




module.exports = userRoutes;



// const {validateToken, validateMailedToken} = require("../Middleware/JWTMiddleware"