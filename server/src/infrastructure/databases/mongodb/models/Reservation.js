const { Schema, model, models } = require("../mongoose");

const reservationSchema = Schema({
  date:{
    type:String,
  } ,
  numberOfDays:{ Number,},
//   withDriver: {Boolean,}
  // Define fields for trucks, movers, and equipment
});

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;
