const CarServices = require("../../../adapters/services/car/CarServices");

class DeleteCarUseCase {
  constructor() {
    this.carServices = new CarServices();
  }

  execute = async (carId) => {
    try {
      await this.carServices.deleteCar(carId);

      return {
        status: 200,
        message: "car deleted successfully",
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

module.exports = DeleteCarUseCase;