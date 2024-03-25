import { useState } from "react";
// import { useRegisterMutation } from "../../auth/redux/UserApiSlice"
import Swal from "sweetalert2";
import { useRegisterMutation } from "../../auth/redux/authApiSlice";

export default function RegisterForm(){

    const [register] = useRegisterMutation()

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',

        email: '',
        password: '',
        passwordConfirmation: '',
      });

      
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleRegister = async () => {
    try {
      await register(userData);
  
      console.log(userData);
      Swal.fire({
        title: 'Register success!',
        text: 'The Admin created.',
        icon: 'success',
      });
    } catch (error) {
      console.error('Failed to create user', error);
  
      Swal.fire({
        title: 'Error',
        text: 'Failed to create apartment.',
        icon: 'error',
      });
    }
  };

    return (
        <>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Register</h3>
        </div>
        <div className="p-6 space-y-4">
          
        <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              // for="register-email"
            >
              First Name
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              name="firstName"
              type="text"
              value={userData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              // for="register-email"
            >
              Fmilly Name
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              name="lastName"
              type="text"
              value={userData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              // for="register-email"
            >
              Email
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              name="email"
              type="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              // for="register-password"
            >
              Password
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-1">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              // for="register-confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
              name="passwordConfirmation"
              type="password"
              value={userData.passwordConfirmation}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex items-center p-6">
          <button
          onClick={handleRegister}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-violet-500 text-white">
            Register
          </button>
        </div>
      </div>
        </>
    )
}