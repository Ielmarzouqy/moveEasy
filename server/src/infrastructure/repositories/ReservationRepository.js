const BaseRepository = require("./BaseRepository");
const Reservation = require("../databases/mongodb/models/Reservation");

class ReservationRepository extends BaseRepository {
  constructor() {
    super(Reservation);
    // this.Model=Reservation
  }
  createMany = async (data) => {
    console.log(data)
    try {
      const availableCategory = await this.categoryModel.find();

      if (!availableCategory) {
        throw new Error("brand do not exist");
      }

    //   const cars = data.map((Car) => {
        const {...carCredentials } = Car;

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

  makeReservation= async (data) => {
    try {
    //   const reservation = new Reservation(req.body);
    // const reservation = req.body
      console.log(data)
    //   await reservation.save();
    return await this.model.insertMany(data);

    } catch (error) {
    //   res.status(400).send(error);
      throw(error);
    }
  };

}

module.exports = ReservationRepository;
