const BoxServices = require("../../../adapters/services/box/BoxServices");

class UpdateBoxUseCase {
  constructor() {
    this.boxServices = new BoxServices();
  }

  execute = async (boxId, data) => {
    try {
      // await this.boxServices.validateUpdateBox(data);
      const updatedBox = await this.boxServices.updateBox(boxId, data);

      return {
        status: 200,
        message: "box updated successfully",
        box: updatedBox,
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

module.exports = UpdateBoxUseCase;