import { Route, Routes } from 'react-router';
import AddCar from '../components/addCar';
import Cars from '../components/Cars';
import EditCar from '../components/EditCar';
const CarRoutes = () => (
  <>
    <Routes>
  
      <Route path="/add-car" element={<AddCar />}></Route>
      <Route path="/cars" element={<Cars />}/>
      <Route path="/edit-car/:id" element={<EditCar />}/>


    </Routes>
  </>
);

export default CarRoutes;
