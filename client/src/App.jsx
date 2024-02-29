import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Route, Routes } from 'react-router-dom';
import LandingPage from './features/sheared/pages/LandingPage';
import AllCars from './features/cars/pages/allCars';
import Boxes from './features/boxes/pages/AllBoxes';
import Helper from './features/helpers/pages/Helpers';
import Cart from './features/cart/pages/Cart';
import AllBoxes from './features/boxes/pages/AllBoxes';
import AllHelpers from './features/helper/pages/AllHelpers';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
  
  <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/all-cars" element={<AllCars />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all-boxes" element={<AllBoxes />} />
          <Route path="/all-helpers" element={<AllHelpers />} />



          <Route path="/all-boxes" element={<Boxes />} />
          <Route path="/helpers" element={<Helper />} />



  </Routes>

      {/* <h1 className="text-3xl font-bold text-red-500 underline">
      Hello world!
    </h1> */}
 
    </>
  )
}

export default App
