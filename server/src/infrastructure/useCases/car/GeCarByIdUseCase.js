const CarServices = require("../../../adapters/services/car/CarServices");

class GetCarByIdUseCase {
  constructor() {
    this.carServices = new CarServices();
  }

  execute = async (carId) => {
    try {
      const car = await this.carServices.getCarById(carId);

      return {
        status: 200,
        message: "car retrieved successfully",
        car: car,
      };
    } catch (error) {
      console.log(error);
      return {
        status: error.status || 500,
        message: error.message || "Something went wrong, please try again",
      };
    }
  };
}

module.exports = GetCarByIdUseCase;