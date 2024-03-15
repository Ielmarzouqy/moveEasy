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
import CarRoutes from './features/cars/routes/CarRoutes';
import BoxRoutes from './features/boxes/routes/BoxRoutes';
import MoverRoutes from './features/movers/routes/MoverRoutes';
import MoverServicePopup from './features/cars/components/MoverServicePopup';
import CarDetails from './features/cars/pages/CarDetails';
import AllMovers from './features/movers/pages/AllMovers';
import MoverDetails from './features/movers/pages/MoverDetaials';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="/modal" element={<MoverServicePopup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/all-boxes" element={<AllBoxes />} />
        <Route path="/all-movers" element={<AllMovers />} />
        <Route path="/mover-details/:id" element={<MoverDetails />} />
        <Route path="/all-helpers" element={<AllHelpers />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/form" element={<PickupForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/movers" element={<Mover />} />
        <Route path="/truckandmovers" element={<TrukAndMover />} />
        <Route path="/dashboard/*" element={<AdminRoutes />} />
        <Route path="/dashboard/cars/*" element={<CarRoutes></CarRoutes>}></Route>
        <Route path="/movers/dash" element={<Movers />} />
        <Route path="/all-boxes" element={<Boxes />} />
        <Route path="/helpers" element={<Helper />} />
        <Route path="/dashboard/box/*" element={<BoxRoutes />} />
        <Route path="/dashboard/mover/*" element={<MoverRoutes />} />
      </Routes>
    </>
  );
}

export default App;
