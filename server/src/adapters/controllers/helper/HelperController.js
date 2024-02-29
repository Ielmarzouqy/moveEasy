const AllHelpersUseCase = require('../../../infrastructure/useCases/helper/AllHelpersUseCase');

class HelperController {
  constructor() {
    this.helperUseCase = new AllHelpersUseCase();
  }
  getAllHelpers = async (req, res) => {
    try {
      const { status, message, helpers } = await this.helperUseCase.execute();
      res.status(status).json({ message: "all helpers", helpers:helpers});

    } catch (error) {
      console.error(error);
    }
  };
}
module.exports = HelperController;
