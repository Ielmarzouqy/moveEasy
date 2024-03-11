
const MoverServices = require("../../../adapters/services/mover/MoverServices");

class CreateMoverUseCase {
    constructor() {
      this.moverServices = new MoverServices();
    }
  
    execute = async (data) => {
      try {

        const createdMover = await this.moverServices.createMover(data);
  
        return {
          status: 200,
          message: "Mover created successfully",
          mover: createdMover,
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
  
  module.exports = CreateMoverUseCase;