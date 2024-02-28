const { Schema, model, models } = require("../mongoose");

const carSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  
  price:{
    type:Number,
    required:true,

  },
 
  category: {
    type: Object,
    ref: "Category",

  },
  image: {
    type: String,

  },
});

const Car =  model("Car", carSchema);

module.exports = Car;
