const { exist } = require("joi");
const BoxRepository = require("../../../repositories/BoxRepository");

class BoxSeeder {
  constructor() {
    this.boxRepository = new BoxRepository();
  }

  seed = async () => {
    try {
    console.log("seed")
        const box =[ {
          name: "box",          
          price: "45",
          category: "6596b37008b3e679e541b3d1",
          number:15

        }, 
        {
            name: "box",          
            price: "25",
            category: "6596b37008b3e679e541b3d1",
            number:10
  
          }
    ];

        await this.boxRepository.createMany(box);
        console.log("box seeded successfully.");
    
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = BoxSeeder;
