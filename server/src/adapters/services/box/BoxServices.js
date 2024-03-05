const BoxRepository = require('../../../infrastructure/repositories/BoxRepository');

class BoxServices {
  constructor() {
    this.boxRepository = new BoxRepository();
  }

  getAllBoxes = async () => {
    const boxes = await this.boxRepository.findAllBoxes();
    return boxes;
  };
}
module.exports = BoxServices;
