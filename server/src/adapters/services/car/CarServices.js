const CarRepository = require("../../../infrastructure/repositories/CarRepository");

class CarServices {
  constructor() {
    this.carRepository = new CarRepository();
  }
  
  getAllCars = async () => {
    const cars = await this.carRepository.findAll();

    return cars;
  };


}

module.exports = CarServices;