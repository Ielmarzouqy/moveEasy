// // import DashboardPage from "../pages/DashboardPage";

// import { useGetDashboardQuery } from "../../auth/redux/authApiSlice";

// // const { useGetDashboardQuery } = require("../../auth/redux/authApiSlice");
// // import  useGetDashboardQuery  from ("../../auth/redux/authApiSlice");


// const   DashboardMiddleware = async (dispatch) => {
//     try {
//       const response = await dispatch(useGetDashboardQuery());
//       const { data } = response;
  
//       // Assuming you have a function to set the user's data and token in your state
//       setUser(data.user);
//       setToken(data.token);
  
//       // Navigate to the dashboard page
//       history.push('/test');
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//     }
//   };
  
//   // Usage example in a component
//   export default DashboardMiddleware;
  

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { selectIsLoggedIn } from "../../auth/redux/authSelectors";
import { selectCurrentUser } from "../../auth/redux/authSelectors";

const DashboardMiddleware = ({ children }) => {
  const isLoggedIn = useSelector(selectCurrentUser);

  console.log("isLoggedIn ", isLoggedIn)
  if (!isLoggedIn) {
    return        <Navigate to="/auth/login" />;

  }

  return children;
};

DashboardMiddleware.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardMiddleware;
