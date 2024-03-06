const CarRepository = require("../../../infrastructure/repositories/CarRepository");

class CarServices {
  constructor() {
    this.carRepository = new CarRepository();
  }
  
  getAllCars = async () => {
    const cars = await this.carRepository.findAll();

    return cars;
  };

  createCar = async (data) => {
    const car = await this.carRepository.create(data);

    if (!car) {
      const error = new Error("car could not be created");
      error.status = 500;

      throw error;
    }

    return car;
  };

  





}

module.exports = CarServices;