const BoxServices = require("../../../adapters/services/box/BoxServices");

class DeleteBoxUseCase {
  constructor() {
    this.boxServices = new BoxServices();
  }

  execute = async (boxId) => {
    try {
      await this.boxServices.deletebox(boxId);

      return {
        status: 200,
        message: "box deleted successfully",
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

module.exports = DeleteBoxUseCase;