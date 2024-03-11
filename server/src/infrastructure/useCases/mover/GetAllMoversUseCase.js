const MoverServices = require("../../../adapters/services/mover/MoverServices");

class GetAllMoversUseCase {
  constructor() {
    this.moverServices = new MoverServices();
  }

  execute = async () => {
    try {
      const movers = await this.moverServices.getAllMovers();

      return {
        status: 200,
        message: "Movers retrieved successfully",
        movers: movers,
      };
    } catch (error) {
      console.log(error);
      return {
        status: error.status || 500,
        message: error.message || "Something went wrong, please try again",
        movers
      };
    }
  };
}

module.exports = GetAllMoversUseCase;