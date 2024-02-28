const Category = require('../databases/mongodb/models/Category');
const BaseRepository = require('./BaseRepository');
const Box = require('../databases/mongodb/models/Box');
const { model } = require('mongoose');

class BoxRepository extends BaseRepository {
  constructor() {
    super(Box);
    this.categoryModel = Category;
  }

  create = async (data) => {
    const { category, ...boxCredentials } = data;

    try {
      const categroy = await this.categoryModel.find({
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

  creatMany = async (data) => {
    console.log(data);
    try {
      const categoryExist = await this.categoryModel.find();
      if (!categoryExist) {
        throw new Error("category box dosen't exist");
      }
      return await this.model.insertMany(data);
    } catch (error) {
      throw new Error(error);
    }
  };
}
module.exports = BoxRepository;
