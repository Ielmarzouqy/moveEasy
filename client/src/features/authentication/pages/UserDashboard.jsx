import React, { useEffect } from 'react';
// import { useGetDashboardQuery } from '../features/dashboard/dashboardApi';
import {  useNavigate } from 'react-router-dom'; // or useNavigate from react-router-dom v6
import { useGetDashboardQuery } from '../../auth/redux/authApiSlice';
import Cookies from 'js-cookie';
import axios from 'axios';



function UserDashboard() {
  const myCookie = Cookies.get('accessToken');

// console.log(myCookie);


axios.defaults.withCredentials = true;

const getDashboardData = async () => {
  try {
    // Replace YOUR_BACKEND_URL with the actual backend URL
    const response = await axios.get(`http://localhost:8080/api/user/dashboard`);
    console.log('Dashboard data:', response.data);
    // Handle the response data here. For example, update your UI accordingly.
  } catch (error) {
    console.error('Error fetching dashboard data:', error.response.data);
    // Handle the error here. For example, show an error message to the user.
  }
};

getDashboardData()

// const { data, error, isLoading } = useGetDashboardQuery();
const navigate = useNavigate(); 
  
  console.log(error)
  // getDashboard()
  // or const navigate = useNavigate() for react-router-dom v6

// useEffect(() => {
//     if (data) {
//       if (data.role === 'admin') {
//         navigate('/all-cars'); // or navigate('/admin/dashboard') for react-router-dom v6
//       } else {
//         navigate('/all-movers'); // or navigate('/consumer/dashboard') for react-router-dom v6
//       }
//     }
//   }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <div>
      Dashboard Access: {data?.message}
    </div>
  );
}

export default UserDashboard;
