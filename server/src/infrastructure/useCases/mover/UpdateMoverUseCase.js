const MoverServices = require("../../../adapters/services/mover/MoverServices");

class UpdateMoverUseCase {
  constructor() {
    this.moverServices = new MoverServices();
  }

  execute = async (moverId, data) => {
    try {
      const updatedMover = await this.moverServices.updateMover(moverId, data);

      return {
        status: 200,
        message: " mover updated successfully",
        mover: updatedMover,
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

module.exports = UpdateMoverUseCase;