// const AdminSeeder = require("../infrastructure/databases/mongodb/seeders/AdminSeeder");
// const RoleSeeder = require("../infrastructure/databases/mongodb/seeders/RoleSeeder");
// const CategorySeeder = require('../infrastructure/databases/mongodb/seeders/CategorySeeder')
const BoxSeeder = require('../infrastructure/databases/mongodb/seeders/BoxSeeder');
// const CarSeeder = require('../infrastructure/databases/mongodb/seeders/CarSeeder');

// const roleSeeder = new RoleSeeder();
// const adminSeeder = new AdminSeeder();
// const categorySeeder = new CategorySeeder();
// const carSeeder = new CarSeeder();
const boxSeeder = new BoxSeeder();

const seedDatabase = async () => {
  try {
    // await roleSeeder.seed();
    // await adminSeeder.seed();
    // await categorySeeder.seed();
    await boxSeeder.seed();
    // await carSeeder.seed();
  } catch (error) {
    console.log(error);
  }
};

seedDatabase();
