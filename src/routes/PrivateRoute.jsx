import { Navigate } from 'react-router-dom';
import { selectToken } from "../redux/auth/authSelectors";
import { useSelector } from 'react-redux';

function PrivateRoute({component: Component, redirectTo   }) {
  const token =  useSelector(selectToken)
  console.log(token)
  return token ?  Component : <Navigate to={redirectTo} />;
}

export default PrivateRoute;