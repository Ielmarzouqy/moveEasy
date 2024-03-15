// const { Schema, model, models } = require("../mongoose");

// const reservationSchema = Schema({
//   date:{
//     type:String,
//   } ,
//   numberOfDays:{ Number,},
// });

// const Reservation = model('Reservation', reservationSchema);

// module.exports = Reservation;

const { Schema, model } = require('mongoose');

const reservationSchema = new Schema({
  date: {
    type: String,
    // required: true,
  },
  days: {
    type: Number,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  withDriver: {
    type: Boolean,
    default: false,
  },

  reservationType: {
    type: String,
    // required: true,
    enum: ['car', 'mover'],
  },
  totalPriceOfCar: {
    type: Number,
    required: false,
  },
  totalPriceOfMover: {
    type: Number,
    required: false,
  },
  reservationPrice: 
  { type: Number,
    //  required: true
     },
  car:{
    type: Object,
    ref:"Car"
  },
  mover:{
    type:Object,
    ref:"Mover"
  }
});

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;
