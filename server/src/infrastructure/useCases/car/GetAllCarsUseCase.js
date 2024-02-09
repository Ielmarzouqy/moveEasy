const CarServices = require("../../../adapters/services/car/CarServices");

class GetAllCarsUseCase {
  constructor() {
    this.carServices = new CarServices();
  }

  execute = async () => {
    try {
      const cars = await this.carServices.getAllCars();

      return {
        status: 200,
        message: "cars retrieved successfully",
        cars: cars,
      };
    } catch (error) {
      console.log(error);
      return {
        status: error.status || 500,
        message: error.message || "Something went wrong, please try again",
        cars
      };
    }
  };
}

module.exports = GetAllCarsUseCase;