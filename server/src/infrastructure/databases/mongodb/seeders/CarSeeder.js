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
          name: "van",          
          price: "121",
          category: "6596b37008b3e679e541b3d1",

        };

        await this.carRepository.createMany(car);
        console.log("van seeded successfully.");
    
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = CarSeeder;
