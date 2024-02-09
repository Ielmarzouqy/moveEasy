const CategoryRepository = require("../../../repositories/CategoryRepository");

class CategorySeeder {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  seed = async () => {
    try {
    //   const existingCategories = await this.categoryRepository.find();

    //   if (existingRoles.length === 0) {
        const categories = [
          { name: "pickup" },
          {name: "truck"},
          { name: "cargo vans" },
        ];
        await this.categoryRepository.createMany(categories);
        console.log("Categories collection seeded successfully.");
    //   } else {
    //     console.log("Categories collection already has data. Seeder skipped.");
    //   }
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = CategorySeeder;
