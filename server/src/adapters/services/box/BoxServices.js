const BoxRepository = require('../../../infrastructure/repositories/BoxRepository');

class BoxServices {
  constructor() {
    this.boxRepository = new BoxRepository();
  }

  createBox = async (data) => {
    const box = await this.boxRepository.create(data);

    if (!box) {
      const error = new Error("box could not be created");
      error.status = 500;

      throw error;
    }

    return box;
  };

  getBoxById = async (boxId) => {
    const box = await this.boxRepository.findById(boxId);

    if (!box) {
      const error = new Error("box not found");
      error.status = 404;

      throw error;
    }

    return box;
  };

  getAllBoxes = async () => {
    const boxes = await this.boxRepository.findAllBoxes();
    return boxes;
  };

  updateBox = async (boxId, data) => {
    const box = await this.boxRepository.findById(boxId);

    if (!box) {
      const error = new Error("box not found");
      error.status = 404;

      throw error;
    }

    const updatedBox = await this.boxRepository.update(boxId, data);

    return updatedBox;
  };

  // validateUpdateBox = async (data)=>{
  //   const { error: validationError } = this.validateData(
  //     data,
  //     "updateBox"
  //   );

  //   if (validationError) {
  //     const error = new Error(validationError.message);
  //     error.status = validationError.status;

  //     throw error;
  //   }
  // }

  deleteBox = async (boxId) => {
    const box = await this.boxRepository.findById(boxId);

    if (!box) {
      const error = new Error("box not found");
      error.status = 404;

      throw error;
    }

    await this.boxRepository.forceDelete(boxId);
  };
}
module.exports = BoxServices;
