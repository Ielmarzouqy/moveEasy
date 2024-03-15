
const ReservationRepository = require("../../../infrastructure/repositories/ReservationRepository");
// const CreateCarUseCase = require("../../../infrastructure/useCases/car/CreateCarUseCase");

class ReservationController {
  constructor() {
    // this.carUseCase = new GetAllCarsUseCase();
    this.resRepo=new ReservationRepository()

  }

//   getAllCars = async (req, res) => {
//     console.log("cars")
//     const { status, message , cars } = await this.carUseCase.execute();
//       res.status(status).json({ message: "all cars", cars:cars});
//   };

                //   createRes = async (req, res) => {
                //     const inputData = req.body;
                //     const data = { ...inputData };
                //     const { status, message, reservation } = await this.resRepo.makeReservation(data);

                //     console.log( "reservation: ", data)
                //     res.status(status).json({ message, reservation });
                //   };


                createRes = async (req, res) => {
                    try {
                      const inputData = req.body;
                      const reservation = await this.resRepo.makeReservation(inputData); // Assuming makeReservation now correctly throws errors
                      console.log("reservation: ", reservation);
                      res.status(201).json({ message: "Reservation created successfully", reservation });
                    } catch (error) {
                      console.error("Error creating reservation: ", error);
                      res.status(400).json({ message: error.message || "An error occurred during the reservation." });
                    }
                  };
                  


                // createRes = async (req, res) => {
                //     const inputData = req.body; // Assuming inputData is an array of reservations
                
                //     // Initialize an array to hold the results
                //     let results = [];
                
                //     // Iterate over each reservation data in the array
                //     for (const data of inputData) {
                //         // Make a reservation for each item
                //         const { status, message, reservation } = await this.resRepo.makeReservation(data);
                
                //         // Push the result to the results array
                //         results.push({ status, message, reservation });
                //     }
                
                //     // Log and respond with the results
                //     console.log("reservations: ", results);
                //     // Assuming you want to return the last status, adjust as needed
                //     const lastResult = results[results.length - 1];
                //     res.status(lastResult.status).json({ results });
                // };
                            

//   updateCar = async (req, res) => {
//     const { carId } = req.params;
//     const data = req.body;

//     console.log(data, carId);

//     const { status, message, car } = await this.updateCarUseCase.execute(
//       carId,
//       data
//     );
//     res.status(status).json({ message, car });

//     }

    // deleteCar = async (req, res) => {
    //   const { carId } = req.params;
    //   console.log(carId);
  
    //   const { status, message } = await this.deleteCarUseCase.execute(carId);
  
    //   res.status(status).json({ message });
    // };

    // getCarById = async (req, res) => {
    //   const { carId } = req.params;
    //   console.log(carId);
    //   const { status, message, car } = await this.getCarByIdUseCase.execute(
    //     carId
    //   );
  
    //   res.status(status).json({ message, car });
    // };
}

module.exports = ReservationController;