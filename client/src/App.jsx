import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './features/sheared/pages/LandingPage';
import AllCars from './features/cars/pages/allCars';
import Cart from './features/cart/pages/Cart';
import AllBoxes from './features/boxes/pages/AllBoxes';

import AdminRoutes from './features/adminDashboard/routes/AdminRoutes';
import CarRoutes from './features/cars/routes/CarRoutes';
import BoxRoutes from './features/boxes/routes/BoxRoutes';
import MoverRoutes from './features/movers/routes/MoverRoutes';
import MoverServicePopup from './features/cars/components/MoverServicePopup';
import CarDetails from './features/cars/pages/CarDetails';
import AllMovers from './features/movers/pages/AllMovers';
import MoverDetails from './features/movers/pages/MoverDetaials';
import SearchCar from './features/cars/pages/SearchCar';
import StripeCheckout from './features/helpers/pages/StripeCheckout';
import AuthRoutes from './features/authentication/routes/AuthRoutes';
import { DashboardMiddleware } from './features/authentication/middleware';
import UserDashboard from './features/authentication/pages/UserDashboard';
import SideBarNew from './features/cars/components/SideBarNew';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/modal" element={<MoverServicePopup />} /> */}

        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/search" element={<SearchCar />} /> */}
        {/* <Route path="/checkout" element={<StripeCheckout />} /> */}

        <Route path="/userdashboard" element={<UserDashboard />} />

        <Route path="/all-boxes" element={<AllBoxes />} />
        <Route path="/all-movers" element={<AllMovers />} />
        <Route path="/mover-details/:id" element={<MoverDetails />} />
        <Route path="/all-cars" element={<AllCars />} />
        <Route path="/car-details/:id" element={<CarDetails />} />


        <Route path="SideBarNew" element={<SideBarNew></SideBarNew>}  ></Route>


        <Route
          path="/dashboard/*"
          element={
            // <DashboardMiddleware>
              <AdminRoutes />
            // </DashboardMiddleware>
          }
        />

        <Route path="/dashboard/cars/*" element={<CarRoutes />}/>
        <Route path="/dashboard/box/*" element={<BoxRoutes />} />
        <Route path="/dashboard/mover/*" element={<MoverRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />} />

      </Routes>
    </>
  );
}

export default App;
