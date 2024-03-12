const { string } = require("joi");
// const { model } = require("../mongoose");
const { Schema, model, models } = require("../mongoose");

const moverSchema = Schema({
    name:{
        type:String,
    },
    number:{
        type:Number,
        require:true, 

    }, 
    price:{
        type:Number,
        require:true, 

    }, 
    image:{
        type:String
    }, 
    category:{
        type:Object, 
        ref: "Category"
    }

});
 const Mover =  models.Mover|| model("Mover", moverSchema);
  module.exports = Mover