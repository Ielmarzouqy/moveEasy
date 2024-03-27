const mongoose = require('mongoose');
const CarController = require('../src/adapters/controllers/car/CarController');
const CreateCarUseCase = require('../src/infrastructure/useCases/car/CreateCarUseCase');
const GetAllCarsUseCase = require('../src/infrastructure/useCases/car/GetAllCarsUseCase');

// Mock the use case modules
jest.mock('../src/infrastructure/useCases/car/CreateCarUseCase');
jest.mock('../src/infrastructure/useCases/car/GetAllCarsUseCase');

const originalConsole = global.console;

describe('CarController', () => {
  let carController;

  beforeAll(() => {
    global.console = {
      log: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      info: jest.fn(),
      debug: jest.fn(),
    };
  });

  afterAll(() => {
    global.console = originalConsole;
    return mongoose.connection.close();
  });

  beforeEach(() => {
    // Mock implementations for use cases
    CreateCarUseCase.mockClear();
    GetAllCarsUseCase.mockClear();

    CreateCarUseCase.prototype.execute = jest.fn().mockResolvedValue({
      status: 200,
      message: 'Car created successfully',
      car: {
        name: 'truuuuuuuuuck',
        price: 121,
        category: '6596b37008b3e679e541b3d1',
      },
    });

    GetAllCarsUseCase.prototype.execute = jest.fn().mockResolvedValue({
      status: 200,
      message: 'all cars',
      cars: [
        { name: 'Car 1', price: 100, category: 'Category 1' },
        { name: 'Car 2', price: 200, category: 'Category 2' },
      ],
    });

    carController = new CarController();
    carController.carUseCase = new GetAllCarsUseCase(); // For getAllCars tests
  });

  describe('createCar', () => {
    it('should call CreateCarUseCase with correct data and return the result', async () => {
      const req = {
        body: {
          name: 'truuuuuuuuuck',
          price: 121,
          category: '6596b37008b3e679e541b3d1',
        },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await carController.createCar(req, res);

      expect(CreateCarUseCase.prototype.execute).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Car created successfully',
        car: req.body,
      });
    });
  });

  describe('getAllCars', () => {
    it('should fetch all cars and return them with a status code of 200', async () => {
      const req = {};
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await carController.getAllCars(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'all cars',
        cars: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
            price: expect.any(Number),
            category: expect.any(String),
          }),
        ]),
      });
      expect(GetAllCarsUseCase.prototype.execute).toHaveBeenCalledTimes(1);
    });
  });
});
