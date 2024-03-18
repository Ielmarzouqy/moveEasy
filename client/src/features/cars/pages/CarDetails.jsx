import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCarDetailsQuery } from '../redux/carApiSlice';
import Header from '../../sheared/components/Header';
import Footer from '../../sheared/components/Footer';

export default function CarDetails() {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const { data: car } = useGetCarDetailsQuery(id);
const navigate = useNavigate()
  const initialReservationDetails = {
    date: '',
    days: 1,
    withDriver: false,
    address: '',
    image: '',
    price: '',
  };
  const [reservationDetails, setReservationDetails] = useState(
    initialReservationDetails
  );

  useEffect(() => {
    if (car) {
      setCarDetails(car.car);
      setReservationDetails((prev) => ({
        ...prev,
        image: car.car.image,
        price: car.car.price,
      }));
    }
  }, [car]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReservationDetails((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedReservations =
      JSON.parse(localStorage.getItem('reservations')) || [];
    const newReservation = {
      ...reservationDetails,
      id,
    };
    savedReservations.push(newReservation);
    localStorage.setItem('reservations', JSON.stringify(savedReservations));
    // alert('Reservation saved!');
    navigate('/cart')
  };

  if (!carDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header></Header>
      <div className="flex flex-wrap justify-center  items-start p-8 space-x-8 min-h-screen">
        <div className="w-full md:w-auto p-4">
          <img
            src={carDetails.image}
            alt="Car"
            className="rounded-lg shadow-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="flex-1 max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold">
            Car Details of {carDetails.name}
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Here you can find the details of the car you're interested in.
          </p>
          <div>
            <h3 className="text-lg font-medium">Address</h3>
            <p>1234 Example Street, City, Country </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Rent Booked Times</h3>
            <p>Booked from 10th Jan 2024 to 15th Jan 2024</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Description</h3>
            <p>
              This car is spacious and comfortable, perfect for long trips.
              Comes with all safety features and has been regularly serviced.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Review</h3>
            <p>
              ★★★★☆ - "Great experience, the car was clean and drove smoothly.
              Will rent again!"
            </p>
          </div>
        </div>
        <div className="w-[400px]">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
            data-v0-t="card"
          >
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  daily price {carDetails.price} $
                </h3>
                <p className="text-sm text-muted-foreground">
                  Define the response for this webhook.
                </p>
              </div>
              <label
                htmlFor="response-code"
                className="block text-sm font-medium leading-none"
              >
                Date
                <input
                  type="date"
                  name="date"
                  checked={reservationDetails.date}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  id="response-code"
                  placeholder="200"
                />
              </label>
              <label
                htmlFor="body"
                className="block text-sm font-medium leading-none"
              >
                Days
                <input
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  id="Days"
                  name="days"
                  type="number"
                  checked={reservationDetails.days}
                  onChange={handleInputChange}
                  placeholder="Days"
                ></input>
              </label>
              <label
                htmlFor="body"
                className="block text-sm font-medium leading-none"
              >
                Addreess
                <input
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  id="Addreess"
                  placeholder="Addreess"
                  name="address"
                  checked={reservationDetails.address}
                  onChange={handleInputChange}
                ></input>
              </label>
              <label
                htmlFor="equipment"
                className="block text-sm font-medium leading-none"
              >
                With Driver
                <input
                  type="checkbox"
                  name="withDriver"
                  checked={reservationDetails.withDriver}
                  onChange={handleInputChange}
                  className="mt-1 block"
                />
              </label>
              <button
                // onClick={ ()=> chooseService()}

                type="submit"
                className="inline-flex justify-center w-full rounded-md border border-6 bg-[#173A6C] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
              >
                Rant Now
              </button>
              {/* <MoverServicePopup
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
              /> */}
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
