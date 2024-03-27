// const jwt = require('jsonwebtoken');
// const asyncHandler = require('express-async-handler');
// require('dotenv').config();

// const validateToken = (req, res, next)=>{
//   console.log(req.cookies)
//   const accessToken = req.cookies["accessToken"];
//   console.log(accessToken)

//   if(!accessToken) return res.json({message: "unauthorized"});

//   let user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

//   if(!user){
//     return res.json({message: "unauthorized"})
//   }

//   req.user = user;
//   return next()
// }

// const validateMailedToken = (req,res, next)=>{
//     const token = req.query.token;
//     if(!token) return res.status(401).json({message: "unauthorized"});
    
//     let user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

//     if(!user){
//       return res.status(401).json({message: "unauthorized"})
//     }

//     req.user = user;
//     return next()
// }

// module.exports = {
//   validateToken, 
//   validateMailedToken}


const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
require('dotenv').config();

class AuthValidator {
    static validateToken(req, res, next) {
        console.log(req.cookies);
        // const accessToken = req.cookies["accessToken"];
        const accessToken = req.cookies.accessToken;
        console.log(accessToken,'hello');

        if (!accessToken) return res.json({ message: "unauthorized" });

        try {
            let user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
            console.log(process.env.ACCESS_TOKEN_SECRET);
            req.user = user;
            return next();
        } catch (error) {
            return res.json({ message: "unauthorized" });
        }
    }

    static validateMailedToken(req, res, next) {
        const token = req.query.token;
        if (!token) return res.status(401).json({ message: "unauthorized" });

        try {
            let user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = user;
            return next();
        } catch (error) {
            return res.status(401).json({ message: "unauthorized" });
        }
    }
}

module.exports = AuthValidator;
