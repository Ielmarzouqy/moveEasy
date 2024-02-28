
const GetAllBoxesUseCase = require("../../../infrastructure/useCases/box/AllBoxesUseCase");


class BoxController {
  constructor() {
    this.boxesUseCase = new GetAllBoxesUseCase();
  }

  getAllBoxes = async (req, res) => {
    console.log("boxes")
    const { status, message , boxes } = await this.boxesUseCase.execute();
      res.status(status).json({ message: "all cars", boxes:boxes});
  };


}

module.exports = BoxController;