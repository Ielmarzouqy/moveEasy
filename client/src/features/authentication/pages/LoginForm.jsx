import { useEffect, useState } from 'react';
// import { useLoginMutation } from "../../auth/redux/UserApiSlice"
import Swal from 'sweetalert2';
import { encryptData } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../auth/redux/authApiSlice';

export default function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const [login, { isLoading, isError, error }] = useLoginMutation();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const result = await login(loginData).unwrap();
      console.log(result);
      if (result.error) {
        console.error('Failed to create aprt', result.error);

        Swal.fire({
          title: 'Error',
          text: 'Failed to login.',
          icon: 'error',
        });
      } else {
        setTimeout(() => {
          setLoggedIn(true);
        }, 100);

        localStorage.setItem('user', JSON.stringify(result.user));
        // const encryptedUser = encryptData(loginData);

        // document.cookie = `accessToken=${encryptedUser}`;
        // console.log(encryptedUser);
        // navigate('/dashboard');

        console.log(loginData);
        Swal.fire({
          title: 'Logged in success!',
          text: 'The Admin logged in.',
          icon: 'success',
        });
      }
    } catch (error) {
      console.error('Login failed', error);
      let errorMessage = 'Failed to login.';
      if (error.data && error.data.message) {
        errorMessage = error.data.message;
      }

      Swal.fire({
        title: 'Error',
        text: 'Failed to login.',
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    if (loggedIn) navigate('/dashboard');
  }, [loggedIn]);
  return (
    <>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Login
          </h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              // for="login-email"
            >
              Email
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              id="email"
              type="email"
              value={loginData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              // for="login-password"
            >
              Password
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              id="password"
              type="password"
              value={loginData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex items-center p-6">
          <button
            onClick={handleLogin}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-violet-500 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
