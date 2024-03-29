const { createServer } = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser"); 

const cors = require("cors");
const { PORT } = require("../config/environnement");
const router = require("./routes");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Reservation = require("../databases/mongodb/models/Reservation");
const Payment = require("../databases/mongodb/models/Payment");


// const products=require("../../../products")


class Server {
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.PORT = PORT;
    this.router = router;
  }

  configure = () => {
    this.app.use(cookieParser());
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


    this.app.use(express.json());

    this.app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      })
    );
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });
    this.app.use("/api", this.router);
  };

  start = () => {
    this.configure();

    this.server.listen(this.PORT, () => {
      console.log(`-*************************`);
      console.log(`|  Server running on http://localhost:${this.PORT}/ |`);
      console.log(`-**************************`);
    });
  };
}

module.exports = Server;
