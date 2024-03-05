import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './features/sheared/pages/LandingPage';
import AllCars from './features/cars/pages/allCars';
import Boxes from './features/boxes/pages/AllBoxes';
import Helper from './features/helpers/pages/Helpers';
import Cart from './features/cart/pages/Cart';
import AllBoxes from './features/boxes/pages/AllBoxes';
import AllHelpers from './features/helper/pages/AllHelpers';
import PickupForm from './features/sheared/pages/PickupForm';
import Services from './features/sheared/pages/Services';
import Mover from './features/sheared/pages/Mover';
import TrukAndMover from './features/sheared/pages/TrukAndMover';
import AdminRoutes from './features/adminDashboard/routes/AdminRoutes';
import Movers from './features/movers/components/Movers';

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
        <Route path="/form" element={<PickupForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/movers" element={<Mover />} />
        <Route path="/truckandmovers" element={<TrukAndMover />} />

        <Route path="/dashboard/*" element={<AdminRoutes />} />
        <Route path="/movers/dash" element={<Movers />} />

        <Route path="/all-boxes" element={<Boxes />} />
        <Route path="/helpers" element={<Helper />} />
      </Routes>
    </>
  );
}

export default App;
