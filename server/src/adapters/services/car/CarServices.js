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

  getCarById = async (carId) => {
    const car = await this.carRepository.findById(carId);

    if (!car) {
      const error = new Error("car not found");
      error.status = 404;

      throw error;
    }

    return car;
  };

  updateCar = async (carId, data) => {
    const car = await this.carRepository.findById(carId);

    if (!car) {
      const error = new Error("car not found");
      error.status = 404;

      throw error;
    }

    const updatedCar = await this.carRepository.update(carId, data);

    return updatedCar;
  };



  deleteCar = async (carId) => {
    const car = await this.carRepository.findById(carId);

    if (!car) {
      const error = new Error("car not found");
      error.status = 404;

      throw error;
    }

    await this.carRepository.forceDelete(carId);
  };
}

module.exports = CarServices;