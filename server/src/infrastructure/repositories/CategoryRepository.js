const BaseRepository = require("./BaseRepository");
const Category = require("../databases/mongodb/models/Category");

class CategoryRepository extends BaseRepository {
  constructor() {
    super(Category);
  }
}

module.exports = CategoryRepository;
