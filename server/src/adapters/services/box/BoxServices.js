const BoxRepository = require('../../../infrastructure/repositories/BoxRepository');

class BoxServices {
  constructor() {
    this.boxRepository = new BoxRepository();
  }

  getAllBoxes = async () => {
    const boxes = await this.boxRepository.findAll();
    return boxes;
  };
}
module.exports = BoxServices;
