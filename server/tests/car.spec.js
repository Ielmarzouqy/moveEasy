const CarController = require('../src/adapters/controllers/car/CarController');
const CreateCarUseCase = require('../src/infrastructure/useCases/car/CreateCarUseCase');

// Mock the CreateCarUseCase module
jest.mock('../src/infrastructure/useCases/car/CreateCarUseCase');

describe('CarController', () => {
  let carController;

  beforeEach(() => {
    // Here, we reset the module to ensure a fresh instance for each test
    CreateCarUseCase.mockClear();
    CreateCarUseCase.prototype.execute = jest.fn().mockResolvedValue({
      status: 200,
      message: 'Car created successfully',
      car: { 
        name: "truuuuuuuuuck",
        price: 121,
        category: "6596b37008b3e679e541b3d1"
       }
    });
    carController = new CarController();
  });

  describe('createCar', () => {
    it('should call CreateCarUseCase with correct data and return the result', async () => {
      const req = { body: { name: "truuuuuuuuuck",
      price: 121,
      category: "6596b37008b3e679e541b3d1" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await carController.createCar(req, res);

      // Ensure the execute method of CreateCarUseCase was called with the correct data
      expect(CreateCarUseCase.prototype.execute).toHaveBeenCalledWith(req.body);
      // Verify that res.status and res.json were called with the expected values
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Car created successfully',
        car: { name: "truuuuuuuuuck",
        price: 121,
        category: "6596b37008b3e679e541b3d1" }
      });
    });
  });
});
