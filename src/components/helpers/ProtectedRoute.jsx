import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';
import Loading from '../Loading';

function ProtectedRoute({ children }) {
  const { isLogged } = React.useContext(UserContext);

  if (isLogged == true) {
    return children;
  }

  if (isLogged == null) {
    return <Loading></Loading>;
  }

  return <Navigate to="/login"></Navigate>;
}

export default ProtectedRoute;
