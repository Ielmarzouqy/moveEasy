const BoxServices = require("../../../adapters/services/box/BoxServices");

class GetBoxByIdUseCase {
  constructor() {
    this.boxServices = new BoxServices();
  }

  execute = async (boxId) => {
    try {
      const box = await this.boxServices.getBoxById(boxId);

      return {
        status: 200,
        message: "box retrieved successfully",
        box: box,
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

module.exports = GetBoxByIdUseCase;