const { string } = require("joi");
// const { model } = require("../mongoose");
const { Schema, model, models } = require("../mongoose");

const helperSchema = Schema({
    name:{
        type:String,
    },
    number:{
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
 const Helper =  models.Helper|| model("Helper", helperSchema);
  module.exports = Helper