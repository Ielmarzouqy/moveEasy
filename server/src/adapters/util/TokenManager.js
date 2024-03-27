const jwt =require("jsonwebtoken")
const asyncHandler = require('express-async-handler')

// function  generateToken(user){ 
//     const token = jwt.sign(
//         user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'10m'}
//     )
//     return token;
// }

// module.exports = generateToken

class TokenManager {
    static generateToken(user) {
        const token = jwt.sign(
            user,
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1000m' }
        );
        return token;
    }
}

module.exports = TokenManager;
