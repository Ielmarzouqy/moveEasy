const mongoose = require('mongoose');

const CarController = require('../src/adapters/controllers/car/CarController');
const CreateCarUseCase = require('../src/infrastructure/useCases/car/CreateCarUseCase');

jest.mock('../src/infrastructure/useCases/car/CreateCarUseCase');
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
    CreateCarUseCase.mockClear();
    CreateCarUseCase.prototype.execute = jest.fn().mockResolvedValue({
      status: 200,
      message: 'Car created successfully',
      car: {
        name: 'truuuuuuuuuck',
        price: 121,
        category: '6596b37008b3e679e541b3d1',
      },
    });
    carController = new CarController();
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
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await carController.createCar(req, res);

      expect(CreateCarUseCase.prototype.execute).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Car created successfully',
        car: {
          name: 'truuuuuuuuuck',
          price: 121,
          category: '6596b37008b3e679e541b3d1',
        },
      });
    });
  });
});
