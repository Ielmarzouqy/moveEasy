const express = require('express');
// const authRoutes = require("./auth/authRoutes");
const carRoutes = require('./car/CarRoutes');

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// router.use("/auth", authRoutes);
router.use('/cars', carRoutes);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

module.exports = router;
