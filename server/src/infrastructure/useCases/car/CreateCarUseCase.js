
const CarServices = require("../../../adapters/services/car/CarServices");

class CreateCarUseCase {
    constructor() {
      this.carServices = new CarServices();
    }
  
    execute = async (data) => {
      try {

        const createdCar = await this.carServices.createCar(data);
  
        return {
          status: 200,
          message: "car created successfully",
          car: createdCar,
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
  
  module.exports = CreateCarUseCase;