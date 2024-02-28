const { Schema, model, models } = require("../mongoose");


const boxSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: Object,
    ref: "Category",
  },
  number: {
    type: Number,
  },
  image: {
    type: String,

  },
});
const Box = models.Box||model('Box', boxSchema);
module.exports = Box;
