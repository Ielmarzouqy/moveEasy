import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../redux/authSelectors";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../auth/redux/authSelectors";

const AuthMiddleware = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

AuthMiddleware.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthMiddleware;
