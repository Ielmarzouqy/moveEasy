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
  city: {
    type: String,

  },
  status: {
    type: String,
    default:"available",

  },
  description: {
    type: String,
    

  },
  image: {
    type: String,

  },
});

const Car =  model("Car", carSchema);

module.exports = Car;
