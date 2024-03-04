// import React from 'react';

import { useGetAllCarsQuery } from '../../cars/redux/carApiSlice';
import Header from './Header';
import Navbar from './Navbar';

export const Dashboard = () => {
  const { data } = useGetAllCarsQuery();

  console.log(data);

  return (
    <>
      <Header></Header>

      <main>
        <div className="flex flex-col md:flex-row">
          <Navbar />

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <img className= "image" src=" /banner2.jpg" alt="" />

          </main>
        </div>
      </main>
    </>
  );
};
