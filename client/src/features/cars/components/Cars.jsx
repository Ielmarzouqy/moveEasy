import React, { useEffect, useState } from 'react';
import NavBarNew from '../../sheared/components/NavBarNew';
import HeaderNew from '../../sheared/components/HeaderNew';
import { useDeleteCarMutation, useGetAllCarsQuery } from '../redux/carApiSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import {useDisclosure} from "@nextui-org/react";

export default function Cars() {

  // const { isOpen, onOpen, onClose } = useDisclosure();


  const [carItem, setCarItem] = useState({});
  const { data ,refetch} = useGetAllCarsQuery();
  const [deleteCar] = useDeleteCarMutation();

  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(7); 

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // const handleRent = (car) => {
  //   setCarItem(car);
  //   toggleModal(); 
  //   navigate(`/car-details/${car._id}`);
  // };

  useEffect(() => {
    if (data) {
      setCars(data.cars);
    }
  }, [data]);

  const handleDeleteCar = async (carId) => {
   await deleteCar(carId);
    Swal.fire({
      title: 'Logged in success!',
      text: 'The car was deleted.',
      icon: 'success',
    });

    refetch();
  };

  const openEditModal = (car) => {
    // setSelectedCar(car);
    navigate(`/dashboard/cars/edit-car/${car._id}`);
    // onOpen();
  };
  // const handleEditCar = async () => {
  //   try {
  //     const menuId = selectedMenu._id;
  //     const menuData = selectedMenu;

  //     await updateMenu({ menuId, menuData });
  //     onClose();
  //     refetch();
  //   } catch (error) {
  //     console.error("Error updating menu:", error);
  //   }
  // };


  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <>
        <div className="flex min-h-screen bg-gray-100/40 dark:bg-gray-800/40">
          <div className="hidden border-r border-gray-200 w-60 lg:block dark:border-gray-800">
            <NavBarNew></NavBarNew>
          </div>
          <div className="flex-1  px-4 flex flex-col">
            <HeaderNew></HeaderNew>
            <h1 className="font-semibold text-lg md:text-2xl"> </h1>
            <a
              href="/dashboard/cars/add-car"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white px-8 hover:bg-primary/90 h-9 rounded-md  ml-auto"
            >
              Add car
            </a>

            <main>
              <div className="  container">
                <h1 className="font-semibold text-lg md:text-2xl"></h1>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 ml-auto">
                  All Cars
                </button>
              </div>
              <div className="border shadow-sm rounded-lg">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&amp;_tr]:border-b">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          Image
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          Name
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          Price
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          Status
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          City
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&amp;_tr:last-child]:border-0">
                      {currentCars.map((car) => (
                        <tr
                          key={car._id}
                          className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            <img
                              src={car.image}
                              width="64"
                              height="64"
                              alt="Mover image"
                              className="aspect-square rounded-md object-cover"
                            />
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">
                            {car.name}
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {car.price}
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            Available
                          </td>
                          <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                            {car.city}
                          </td>

                          <td className="p-0 gap-4  align-middle [&amp;:has([role=checkbox])]:pr-0">
                            <button className="inline-flex bg-blue-300 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
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
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                              <span className="sr-only">View</span>
                            </button>
                            <button 
                            
                            onClick={() => openEditModal(car)}
                            className="inline-flex bg-green-300 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
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
                                <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"></path>
                              </svg>
                              <span className="sr-only">Edit</span>
                            </button>
                            <button 
                                              onClick={() => handleDeleteCar(car._id)}

                             className="inline-flex bg-red-300 items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
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
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              </svg>
                              <span className="sr-only">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-center mt-4">
                {Array.from(
                  { length: Math.ceil(cars.length / carsPerPage) },
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className="mx-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-green-300"
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </main>
          </div>
        </div>
      </>
    </div>
  );
}
