
const CreateMoverUseCase = require("../../../infrastructure/useCases/mover/CreateMoverUseCase");
const DeleteMoverUseCase = require("../../../infrastructure/useCases/mover/DeleteMoverUseCase");
const GetMoverByIdUseCase = require("../../../infrastructure/useCases/mover/GeMoverByIdUseCase");
const GetAllMoversUseCase = require("../../../infrastructure/useCases/mover/GetAllMoversUseCase");
const UpdateMoverUseCase = require("../../../infrastructure/useCases/mover/UpdateMoverUseCase");


class MoverController {
  constructor() {
    this.moverUseCase = new GetAllMoversUseCase();
    this.getMoverByIdUseCase = new GetMoverByIdUseCase();
    this.updateMoverUseCase = new UpdateMoverUseCase();
    this.deleteMoverUseCase = new DeleteMoverUseCase();
    this.createMoverUseCase = new CreateMoverUseCase();
    // this.createMoverUseCase = new CreateCarUseCase();

  }

  getAllMovers = async (req, res) => {
    console.log("movers")
    const { status, message , movers } = await this.moverUseCase.execute();
      res.status(status).json({ message: "all movers", movers:movers});
  };

  createMover = async (req, res) => {
    const inputData = req.body;
    const data = { ...inputData };
    const { status, message, mover } = await this.createMoverUseCase.execute(data);

    res.status(status).json({ message, mover });
  };

  updateMover = async (req, res) => {
    const { moverId } = req.params;
    const data = req.body;

    console.log(data, moverId);

    const { status, message, mover } = await this.updateMoverUseCase.execute(
      moverId,
      data
    );
    res.status(status).json({ message, mover });

    }

    deleteMover = async (req, res) => {
      const { moverId } = req.params;
      // console.log(moverId);
  
      const { status, message } = await this.deleteMoverUseCase.execute(moverId);
  
      res.status(status).json({ message });
    };

    getMoverById = async (req, res) => {
      const { moverId } = req.params;
      // console.log(moverId);
      const { status, message, mover } = await this.getMoverByIdUseCase.execute(
        moverId
      );
  
      res.status(status).json({ message, mover });
    };
}

module.exports = MoverController;