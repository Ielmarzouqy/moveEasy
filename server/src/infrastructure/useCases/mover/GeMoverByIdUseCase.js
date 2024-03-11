const MoverServices = require("../../../adapters/services/mover/MoverServices");

class GetMoverByIdUseCase {
  constructor() {
    this.moverServices = new MoverServices();
  }

  execute = async (moverId) => {
    try {
      const mover = await this.moverServices.getMoverById(moverId);

      return {
        status: 200,
        message: "mover retrieved successfully",
        mover: mover,
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

module.exports = GetMoverByIdUseCase;