const MoverRepository = require("../../../infrastructure/repositories/MoverRepository");

class MoverServices {
  constructor() {
    this.moverRepository = new MoverRepository();
    
  }
  
  getAllMovers = async () => {
    const movers = await this.moverRepository.findAll();

    return movers;
  };

  createMover = async (data) => {
    const mover = await this.moverRepository.create(data);

    if (!mover) {
      const error = new Error("mover could not be created");
      error.status = 500;

      throw error;
    }

    return mover;
  };

  getMoverById = async (moverId) => {
    const mover = await this.moverRepository.findById(moverId);

    if (!mover) {
      const error = new Error("mover not found");
      error.status = 404;

      throw error;
    }

    return mover;
  };

  updateMover = async (moverId, data) => {
    const mover = await this.moverRepository.findById(moverId);

    if (!mover) {
      const error = new Error("mover not found");
      error.status = 404;

      throw error;
    }

    const updatedMover = await this.moverRepository.update(moverId, data);

    return updatedMover;
  };



  deleteMover = async (moverId) => {
    const mover = await this.moverRepository.findById(moverId);

    if (!mover) {
      const error = new Error("mover not found");
      error.status = 404;

      throw error;
    }

    await this.moverRepository.forceDelete(moverId);
  };
}

module.exports = MoverServices;