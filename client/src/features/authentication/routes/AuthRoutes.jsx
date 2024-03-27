import { Route, Routes } from 'react-router';
import { Navigate, Outlet } from 'react-router-dom';
import LoginForm from '../pages/LoginForm';
import RegisterForm from '../pages/RegisterForm';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../auth/redux/authSelectors';
// import AddCar from '../components/addCar';

const UnAuth = () => {
  const isLoggedIn = useSelector(selectCurrentUser);
  return isLoggedIn ? <Navigate to={'/'} /> : <Outlet />;
};
const AuthRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<UnAuth />}>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
      </Route>
    </Routes>
  </>
);

export default AuthRoutes;
