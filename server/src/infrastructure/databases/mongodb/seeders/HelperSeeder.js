const { exist } = require("joi");
const HelperRepository = require("../../../repositories/HelperRepository");

class HelperSeeder {
  constructor() {
// super(Helper)
    this.helperRepository = new HelperRepository();
  }

  seed = async () => {
    try {
    console.log("seed")
        const helper =[ {
          name: "helper1",          
          price: "45",
          category: "6596b37008b3e679e541b3d2",
          number:7

        }, 
        {
            name: "helper2",          
            price: "25",
            category: "6596b37008b3e679e541b3d2",
            number:5
  
          },
          {
            name: "helper2",          
            price: "20",
            category: "6596b37008b3e679e541b3d2",
            number:2
  
          }
    ];

        await this.helperRepository.createMany(helper);
        console.log("helpers seeded successfully.");
    
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = HelperSeeder;
