import React, { useEffect, useState } from 'react';
import Header from '../../sheared/components/Header';
import Footer from '../../sheared/components/Footer';
// import { useGetAllCarsQuery } from '../redux/carApiSlice';
// import MoverServicePopup from '../components/MoverServicePopup';
import { useNavigate } from 'react-router-dom';
import { useGetAllMoversQuery } from '../redux/moverApiSlice';
import MoverServicePopup from '../../cars/components/MoverServicePopup';

export default function AllMovers() {

  const [moverItem, setMoverItem] = useState({})

  const { data } = useGetAllMoversQuery();
  const [movers, setMovers] = useState([]);

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

const handleRent =(mover)=>{
  setMoverItem(mover);
  // toggleModal()
  navigate(`/mover-details/${mover._id}`);

}

// console.log("moverItem", moverItem)

  useEffect(() => {
    if (data) {
      setMovers(data.movers);
    }
  }, [data]);
  return (
    <>
      <div>
        <Header />
        <div className="px-4 md:px-6 lg:px-8 py-6 lg:py-12 xl:py-16 space-y-6 lg:space-y-10">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">
              Rent a Car
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Choose from our selection of high-quality rental cars. Whether
              you're looking for a sleek sedan, a spacious SUV, or a sporty
              convertible, we have the perfect vehicle for your next adventure.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movers &&
              movers.map((car) => (
                <div
                  key={car._id}
                  className="flex flex-col gap-2 rounded-lg border overflow-hidden dark:border-gray-850"
                >
                  <img
                    alt={car.name}
                    className="object-cover w-full h-60"
                    height={300}
                    src={car.image}
                    style={{
                      aspectRatio: '400/300',
                      objectFit: 'cover',
                    }}
                    width={400}
                  ></img>
                  <div className="grid gap-1 p-4">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                        <circle cx="7" cy="17" r="2"></circle>
                        <path d="M9 17h6"></path>
                        <circle cx="17" cy="17" r="2"></circle>
                      </svg>
                      <div className="text-xl font-semibold">
                         {car.name}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Luxury · 4 doors · 5 seats
                    </div>
                    <div className="text-2xl font-semibold">$100/day</div>
                    <button
                      onClick={()=>{handleRent(car)}}
                      className="bg-blue-900 text-white p-4  inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   hover:bg-primary/90 h-9 rounded-md "
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <MoverServicePopup
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
