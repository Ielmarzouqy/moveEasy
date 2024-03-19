const { createServer } = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { PORT } = require("../config/environnement");
const router = require("./routes");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Reservation = require("../databases/mongodb/models/Reservation");
const Payment = require("../databases/mongodb/models/Payment");
// const ErrorHandler = require("../errors/ErrorHandler");
// const SocketIo = require("../packages/socket.io/SocketIo");


// const products=require("../../../products")


class Server {
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    // this.socketIo = new SocketIo(this.server);
    this.PORT = PORT;
    this.router = router;
    // this.ErrorHandler = ErrorHandler;
  }

  configure = () => {
    this.app.use(cookieParser());
    this.app.use(express.json());

    this.app.use(
      cors({
        origin: "http://localhost:5173",
        // origin: "*",
        credentials: true,
      })
    );
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    


    this.app.use("/api", this.router);
  //   this.app.get('/cars',(req,res)=>{
  //     res.send(cars)
  // }); 

  // this.app.post('/payment', async (req, res) => {
  //   try {
  //     const { amount, token, userId } = req.body; // Assuming you're passing userId from the client
  
  //     console.log( "payment",amount,token, userId)
  //     // Creating a charge via Stripe
  //     const charge = await stripe.charges.create({
  //       amount,
  //       currency: 'usd',
  //       source: token.id,
  //       description: 'Test Charge',
  //     });
  
  //     // Only proceed to save in the database if the charge was successful
  //     if (charge.status === 'succeeded') {
  //       const newPayment = new Payment({
  //         userId, // Assuming you have this information available, adjust accordingly
  //         stripeChargeId: charge.id,
  //         amount: charge.amount, // Note: Stripe records amounts in the smallest unit of the currency (e.g., cents for USD)
  //         currency: charge.currency,
  //         status: charge.status,
  //         description: charge.description || 'Test Charge',
  //       });
  
  //       await newPayment.save();
  
  //       res.json({ success: true, charge, message: 'Payment processed and recorded' });
  //     } else {
  //       // Handle cases where the Stripe charge did not succeed
  //       res.status(500).json({ success: false, message: 'Stripe charge was unsuccessful', charge });
  //     }
  //   } catch (error) {
  //     console.error('Payment error:', error);
  //     res.status(500).json({ success: false, message: error.message });
  //   }
  // });
  
  
    // this.app.use(this.ErrorHandler.notFound);
    // this.app.use(this.ErrorHandler.handle);

    // this.socketIo.init();
  };

  start = () => {
    this.configure();

    this.server.listen(this.PORT, () => {
      console.log(`-----------------------------------------------`);
      console.log(`| 🚀 Server running on http://localhost:${this.PORT}/ |`);
      console.log(`-----------------------------------------------`);
    });
  };
}

module.exports = Server;
