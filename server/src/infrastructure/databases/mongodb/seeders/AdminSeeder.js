const { exist } = require("joi");
const UserRepository = require("../../../repositories/UserRepository");

class AdminSeeder {
  constructor() {
    this.userRepository = new UserRepository();
  }

  seed = async () => {
    try {
    //   const existingAdmin = await this.userRepository.find({
    //     role: "659673e3b2e45201bba0baec",
    //   });

    //   if (existingAdmin == 0) {
        const admin = {
          firstName: "Admin",
          lastName: "Admin",
          email: "admin@admin.com",
          password: "admin00",
          role: "659673e3b2e45201bba0baec",
        };

        await this.userRepository.create(admin);
        console.log("Admin seeded successfully.");
    //   } else {
    //     console.log("Admin already exists. Seeder skipped.");
    //   }
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = AdminSeeder;
