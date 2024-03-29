const HelperRepository = require('../../../infrastructure/repositories/HelperRepository');

class HelperServices {
  constructor() {
    this.helperRepository = new HelperRepository();
  }

  getAllHeplers = async () => {
    const helpers = await this.helperRepository.findAllHelpers();
    return helpers;
  };
}
module.exports = HelperServices;
