const BoxServices = require('../../../adapters/services/box/BoxServices');

class AllBoxesUseCase {
  constructor() {
    this.boxServices = new BoxServices();
  }

  execute = async () => {
    try {
      const boxes = await this.boxServices.getAllBoxes();

      return {
        status: 200,
        message: 'boxes retrieved successfully',
        boxes: boxes,
      };
    } catch (error) {
      console.log(error);
      return {
        status: error.status || 500,
        message: error.message || 'Something went wrong, please try again',
        cars,
      };
    }
  };
}
module.exports = AllBoxesUseCase;
