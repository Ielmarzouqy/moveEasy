const CarServices = require("../../../adapters/services/car/CarServices");

class UpdateCarUseCase {
  constructor() {
    this.carServices = new CarServices();
  }

  execute = async (carId, data) => {
    try {
      // await this.CarServices.validateUpdateCar(data);
      const updatedCar = await this.carServices.updateCar(carId, data);

      return {
        status: 200,
        message: "Car updated successfully",
        car: updatedCar,
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

module.exports = UpdateCarUseCase;