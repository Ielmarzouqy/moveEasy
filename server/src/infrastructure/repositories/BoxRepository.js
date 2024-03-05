const Category = require('../databases/mongodb/models/Category');
const BaseRepository = require('./BaseRepository');
const Box = require('../databases/mongodb/models/Box');
// const { model } = require('mongoose');

class BoxRepository extends BaseRepository {
  constructor() {
    super(Box);
    this.categoryModel = Category;

  }

  create = async (data) => {
    const { category, ...boxCredentials } = data;
    console.log(data, category)

    try {
      const categroyk = await this.categoryModel.find({
        name: { $in: category },
      });

      return await this.model.create({
        category,
        ...boxCredentials,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

//   creatMany = async (data) => {
//     console.log(data);
//     const {category} = data;
//     try {
//     //   const categoryExist = await this.categoryModel.find();
//     //   console.log(categoryExist)
//     //   if (!categoryExist) {
//     //     throw new Error("category box dosen't exist");
//     //   }
//       return await this.model.insertMany(data);
//     } catch (error) {
//       throw new Error(error);
//     }
//   };

createMany = async (data) => {
    console.log(data)
    try {
      const availableCategory = await this.categoryModel.find();

      if (!availableCategory) {
        throw new Error("brand do not exist");
      }

    //   const cars = data.map((Car) => {
        const {...boxCredentials } = Box;

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

  findAllBoxes = async (includeDeleted = false) => {
    const query = includeDeleted ? {} : { isDeleted: false };
    try {
      return await this.model.find(query).populate('category').lean();
    } catch (error) {
      throw new Error(error);
    }
  };
}
module.exports = BoxRepository;
