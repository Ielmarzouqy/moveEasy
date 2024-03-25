import { Route, Routes } from 'react-router';
import LoginForm from '../pages/LoginForm';
import RegisterForm from '../pages/RegisterForm';
// import AddCar from '../components/addCar';
const AuthRoutes = () => (
  <>
    <Routes>
  
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/register" element={<RegisterForm />}></Route>

    </Routes>
  </>
);

export default AuthRoutes;
