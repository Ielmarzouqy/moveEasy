const express = require('express');
// const authRoutes = require("./auth/authRoutes");
const carRoutes = require('./car/CarRoutes');
const boxRoutes = require('./box/BoxRoutes');
const helperRoutes = require('./helper/HelperRoutes');
const moverRoutes = require('./mover/MoverRoutes');
const reservatoinRoutes = require('./reservation/Reservation');
const paymentRoutes = require('./payment/PaymentRoutes');
const roleRoutes = require('./auth/RoleRoutes');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// router.use("/auth", authRoutes);
router.use('/cars', carRoutes);
router.use('/box', boxRoutes);
router.use('/helper', helperRoutes)
router.use('/mover', moverRoutes)
router.use('/res', reservatoinRoutes)
router.use('/payment', paymentRoutes)
router.use('/role', roleRoutes)





router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

module.exports = router;
