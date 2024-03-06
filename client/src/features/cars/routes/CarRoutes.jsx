import { Route, Routes } from 'react-router';
import AddCar from '../components/addCar';
const CarRoutes = () => (
  <>
    <Routes>
  
      <Route path="/add-car" element={<AddCar />}></Route>
    </Routes>
  </>
);

export default CarRoutes;
