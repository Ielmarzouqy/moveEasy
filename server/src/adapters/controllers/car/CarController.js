
const CreateCarUseCase = require("../../../infrastructure/useCases/car/CreateCarUseCase");
const DeleteCarUseCase = require("../../../infrastructure/useCases/car/DeleteCARUseCase");
const GetCarByIdUseCase = require("../../../infrastructure/useCases/car/GeCarByIdUseCase");
const GetAllCarsUseCase = require("../../../infrastructure/useCases/car/GetAllCarsUsecase");
const UpdateCarUseCase = require("../../../infrastructure/useCases/car/UpdateCarUseCase");


class CarController {
  constructor() {
    this.carUseCase = new GetAllCarsUseCase();
    this.getCarByIdUseCase = new GetCarByIdUseCase();
    this.updateCarUseCase = new UpdateCarUseCase();
    this.deleteCarUseCase = new DeleteCarUseCase();
    this.createCarUseCase = new CreateCarUseCase();
  }

  getAllCars = async (req, res) => {
    console.log("cars")
    const { status, message , cars } = await this.carUseCase.execute();
      res.status(status).json({ message: "all cars", cars:cars});
  };

  createCar = async (req, res) => {
    const inputData = req.body;
    const data = { ...inputData };
    const { status, message, car } = await this.createCarUseCase.execute(data);

    res.status(status).json({ message, car });
  };


}

module.exports = CarController;