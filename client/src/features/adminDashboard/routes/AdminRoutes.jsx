import { Route, Routes } from 'react-router';
import { Dashboard } from '../components/Dashboard';
import Cars from '../components/Cars';
import Analitics from '../components/Analitics';
import Boxes from '../components/Boxes';
import Movers from '../components/Movers';
import Orders from '../components/Orders';
import Payments from '../components/Payments';
const AdminRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Dashboard />} />
      </Route>
      {/* <Route path="/cars" element={<Cars />}/> */}
      <Route path="/analytics" element={<Analitics />} />
      <Route path="/boxes" element={<Boxes />} />
      <Route path="/movers" element={<Movers />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/payments" element={<Payments></Payments>}></Route>
    </Routes>
  </>
);

export default AdminRoutes;
