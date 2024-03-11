const MoverServices = require("../../../adapters/services/mover/MoverServices");

class DeleteMoverUseCase {
  constructor() {
    this.moverServices = new MoverServices();
  }

  execute = async (moverId) => {
    try {
      await this.moverServices.deleteMover(moverId);

      return {
        status: 200,
        message: "mover deleted successfully",
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

module.exports = DeleteMoverUseCase;