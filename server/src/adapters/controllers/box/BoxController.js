
const GetAllBoxesUseCase = require("../../../infrastructure/useCases/box/AllBoxesUseCase");
const GetBoxByIdUseCase = require("../../../infrastructure/useCases/box/GetBoxByIdUseCase");
const UpdateBoxUseCase = require("../../../infrastructure/useCases/box/UpdateBoxUseCase");
const CreateBoxUseCase = require("../../../infrastructure/useCases/box/CreateBoxUseCase");
const DeleteBoxUseCase = require("../../../infrastructure/useCases/box/DeleteBoxUseCase");




class BoxController {
  constructor() {
    this.boxesUseCase = new GetAllBoxesUseCase();
    this.getBoxByIdUseCase =new GetBoxByIdUseCase();
    this.updateBoxUseCase = new UpdateBoxUseCase();
    this.deleteBoxUseCase = new DeleteBoxUseCase();
    this.createBoxUseCase = new CreateBoxUseCase()
    
  }

  createBox = async (req, res) => {
    const  inputData  = req.body;
    const data = {...inputData } 
    const { status, message, box } = await this.createBoxUseCase.execute(data);

    res.status(status).json({ message, box });
  };

  getAllBoxes = async (req, res) => {
    console.log("boxes")
    const { status, message , boxes } = await this.boxesUseCase.execute();
      res.status(status).json({ message: "all boxes", boxes:boxes});
  };
}

module.exports = BoxController;



