import React, { useEffect, useState } from 'react';
import Header from '../../sheared/components/Header';
import Footer from '../../sheared/components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
// import MoverServicePopup from '../components/MoverServicePopup';
import { useGetMoverDetailsQuery } from '../redux/moverApiSlice';
import MoverServicePopup from '../../cars/components/MoverServicePopup';

export default function MoverDetails() {
  const { id } = useParams();
  const [moverDetails, setMoverDetails] = useState(null);
  const { data: mover } = useGetMoverDetailsQuery(id);

  const initialReservationDetails = {
    date: '',
    address: '',
    image: '',
    price: '',
  };
  const [reservationDetails, setReservationDetails] = useState(
    initialReservationDetails
  );

  useEffect(() => {
    if (mover) {
      setMoverDetails(mover.mover);
      setReservationDetails((prev) => ({
        ...prev,
        image: mover.mover.image,
        price: mover.mover.price,
      }));
    }
  }, [mover]);

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
    alert('Reservation saved!');
  };

  if (!moverDetails) {
    return <div>Loading...</div>;
  }

  // const { id } = useParams();
  // const [moverDetails, setMoverDetails] = useState(null);
  // const { data: mover } = useGetMoverDetailsQuery(id);
  // const navigate = useNavigate();
  // const initialReservationDetails = {
  //   date: '',
  //   // days: 1,
  //   // withDriver: false,
  //   address: '',
  //   price: '',

  //   // truck: false,
  //   // movers: false,
  //   // equipment: false,
  // };
  // const [reservationDetails, setReservationDetails] = useState(
  //   initialReservationDetails
  // );
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const toggleModal = () => setIsModalOpen(!isModalOpen);

  // const chooseService = () => {
  //   toggleModal();
  //   // setCarItem(car);
  //   console.log('open modle');
  // };
  // const saveReservation = () => {
  //   const savedReservations =
  //     JSON.parse(localStorage.getItem('reservations')) || [];
  //   const newReservation = {
  //     ...reservationDetails,
  //     id: id,
  //   };
  //   savedReservations.push(newReservation);
  //   localStorage.setItem('reservations', JSON.stringify(savedReservations));
  //   alert('Reservation saved!', id);
  // };

  // const showService = () => {
  //   try {
  //     saveReservation();

  //     navigate('/all-cars');
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  // useEffect(() => {
  //   if (mover) {
  //     setMoverDetails(mover.mover);
  //   }
  // }, [mover]);

  // useEffect(() => {
  //   const savedReservations = localStorage.getItem('reservations');
  //   if (savedReservations) {
  //   }
  // }, []);

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setReservationDetails((prevState) => ({
  //     ...prevState,
  //     [name]: type === 'checkbox' ? checked : value,
  //   }));
  // };

  // const handleSubmit = () => {
  //   saveReservation();
  //   navigate('/cart');
  // };

  // if (!moverDetails) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Header></Header>
      <div className="flex flex-wrap justify-center  items-start p-8 space-x-8 min-h-screen">
        <div className="w-full md:w-auto p-4">
          <img
            src={moverDetails.image}
            alt="Car"
            className="rounded-lg shadow-lg max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <div className="flex-1 max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold">
            Car Details of {moverDetails.name}
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Here you can find the details oµf the car you're interested in.
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
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                daily price {moverDetails.price} $
              </h3>
              <p className="text-sm text-muted-foreground">
                Define the response for this webhook.
              </p>
            </div>
            <form
              className="p-6 space-y-4"
              //  onSubmit={handleSubmit}
              onSubmit={handleSubmit}
            >
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
                Addreess
                <input
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  id="Addreess"
                  name="address"
                  checked={reservationDetails.address}
                  onChange={handleInputChange}
                  placeholder="Addreess"
                ></input>
              </label>
              <button
                // onClick={() => chooseService()}
                type="submit"
                // onClick={() => handleSubmit()}
                className="inline-flex justify-center w-full rounded-md border border-6 bg-[#173A6C] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
              >
                Rant Now and Place Order
              </button>
              {/* <button
                // onClick={() => showService()}
                type="submit"
                className="inline-flex justify-center w-full rounded-md border border-6 bg-[#9dbaf3] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
              >
                View other Service
              </button> */}
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
