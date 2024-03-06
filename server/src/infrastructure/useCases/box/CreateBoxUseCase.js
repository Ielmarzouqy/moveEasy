const BoxServices = require("../../../adapters/services/box/BoxServices");

class CreateBoxUseCase {
    constructor() {
      this.boxServices = new BoxServices();
    }
  
    execute = async (data) => {
      try {

        const createdBox = await this.boxServices.createBox(data);
  
        return {
          status: 200,
          message: "box created successfully",
          box: createdBox,
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
  
  module.exports = CreateBoxUseCase;