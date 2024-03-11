const BaseRepository = require("./BaseRepository");
const Mover = require("../databases/mongodb/models/Mover");
const Category = require("../databases/mongodb/models/Category");

class MoverRepository extends BaseRepository {
  constructor() {
    super(Mover);
    this.categoryModel = Category;
  }

  create = async (data) => {
    console.log(data)
    const { category, ...moverCredentials } = data;
    try {
      const categorygh = await this.categoryModel.find({ name: { $in: category } });

  // condition for existing of role

      return await this.model.create({
        category,
        ...moverCredentials,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  createMany = async (data) => {
    console.log(data)
    try {
      const availableCategory = await this.categoryModel.find();

      if (!availableCategory) {
        throw new Error("brand do not exist");
      }

    //   const cars = data.map((Car) => {
        const {...moverCredentials } = Mover;

    //     const categories = availableCategory.filter((category) =>
    //       category.includes(category.name)
    //     );

        // return {
        // //   categories,
        //   ...carCredentials,
        // };
      

      return await this.model.insertMany(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  findAllMovers = async (includeDeleted = false) => {
    const query = includeDeleted ? {} : { isDeleted: false };
    try {
      return await this.model.find(query).populate('category').lean();
    } catch (error) {
      throw new Error(error);
    }
  };


  
}

module.exports = MoverRepository;
