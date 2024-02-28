const { exist } = require("joi");
const CarRepository = require("../../../repositories/CarRepository");

class CarSeeder {
  constructor() {
    this.carRepository = new CarRepository();
  }

  seed = async () => {
    try {
    console.log("seed")
        const car = {
          name: "car",          
          price: "334",
          category: "6596b37008b3e679e541b3d1",

        };

        await this.carRepository.createMany(car);
        console.log("car seeded successfully.");
    
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = CarSeeder;
