// const Role = require('../models/roleModel');
// const User = require('../models/userModel');
const Role = require('../../../infrastructure/databases/mongodb/models/Role');
const User = require('../../../infrastructure/databases/mongodb/models/User');

class RoleController{


     getRoles = async (req, res) =>{
        console.log('rolllee');
        try {
          const roles = await Role.find();
      
          res.status(200).json(roles);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      };
      
       getUserByRole = async (req, res)=> {
        console.log("getUserByRole")
        // const {role} = req.body;
        console.log(' user role');
        try {
      
          const users = await User.find({}).populate({
            path: "role",
            match: {name:"customer"},
          });
      
          res.status(200).json({
            users: users
          });
          
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      };
}


module.exports = RoleController;
