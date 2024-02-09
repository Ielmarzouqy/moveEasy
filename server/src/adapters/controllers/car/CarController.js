
const GetAllCarsUseCase = require("../../../infrastructure/useCases/car/GetAllCarsUsecase");


class CarController {
  constructor() {
    this.carUseCase = new GetAllCarsUseCase();
  }

  getAllCars = async (req, res) => {
    console.log("caaaaaaaaaaaars")
    const { status, message , cars } = await this.carUseCase.execute();
      res.status(status).json({ message: "all cars", cars:cars});
  };


}

module.exports = CarController;