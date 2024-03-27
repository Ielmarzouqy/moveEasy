const mongoose = require('mongoose');
const CarController = require('../src/adapters/controllers/car/CarController');
const CreateCarUseCase = require('../src/infrastructure/useCases/car/CreateCarUseCase');
const GetAllCarsUseCase = require('../src/infrastructure/useCases/car/GetAllCarsUseCase');
const UpdateCarUseCase = require('../src/infrastructure/useCases/car/UpdateCarUseCase');

// Mock the use case modules
jest.mock('../src/infrastructure/useCases/car/CreateCarUseCase');
jest.mock('../src/infrastructure/useCases/car/GetAllCarsUseCase');
jest.mock('../src/infrastructure/useCases/car/UpdateCarUseCase');

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

  afterAll(async () => {
    global.console = originalConsole;
    return await mongoose.connection.close();
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

  describe('updateCar', () => {
    beforeEach(() => {
      // Reset mock and set up mock implementation for updateCarUseCase
      UpdateCarUseCase.mockClear();
      UpdateCarUseCase.prototype.execute = jest.fn().mockResolvedValue({
        status: 200,
        message: 'Car updated successfully',
        car: {
          id: 'carId123',
          name: 'updatedCar',
          price: 200,
          category: 'updatedCategory',
        },
      });

      // Assuming updateCarUseCase is an instance of UpdateCarUseCase in your CarController
      carController.updateCarUseCase = new UpdateCarUseCase();
    });

    it('should update a car and return the updated car with a status code of 200', async () => {
      const req = {
        params: { carId: 'carId123' },
        body: { name: 'updatedCar', price: 200, category: 'updatedCategory' },
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      await carController.updateCar(req, res);

      // Check if execute method of UpdateCarUseCase was called with correct parameters
      expect(UpdateCarUseCase.prototype.execute).toHaveBeenCalledWith(req.params.carId, req.body);
      // Check if the response status and json methods were called with expected values
      expect(res.status).toHaveBeenCalledWith(200);
     
      expect(res.json).toHaveBeenCalledWith({
        message: 'Car updated successfully',
        car: {
          id: 'carId123', // Include the id in the expectation
          name: 'updatedCar',
          price: 200,
          category: 'updatedCategory',
        },
      });

      // Optionally, verify that the execute method of UpdateCarUseCase was called once
      expect(UpdateCarUseCase.prototype.execute).toHaveBeenCalledTimes(1);
    });
  });
});

