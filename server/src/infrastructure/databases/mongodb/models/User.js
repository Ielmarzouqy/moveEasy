const { Schema, model, models } = require("../mongoose");

const userSchema = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName:{
    type:String,
    required:true

  },
  email:{
    type:String,
    required:true,

  },
  password:{
    type:String,
    required:true
  },
  role: {
    type: Object,
    ref: "Role",
    required: true,
  },
});

const User =  model("User", userSchema);

module.exports = User;
