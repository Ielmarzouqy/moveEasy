import React, { useEffect, useState } from "react";
import axios from "axios"
export default function AllCars() {
  const [cars, setCars] = useState([]);

console.log("all cars")

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/cars/all-cars');
   
        console.log(res)
        const  data  = res.data.cars;
        setCars(data); 
        console.log("cars",cars)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCars(); 
  }, []);

  console.log("all cars",cars)


  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
      {cars.map((car) => (
        <div key={car.id} className="relative group overflow-hidden rounded-lg">
          <a className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View</span>
          </a>
          <img
            alt={car.name}
            className="object-cover w-full h-60"
            height={300}
            src="pickup.jpg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-semibold text-lg md:text-xl">{car.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{car.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
