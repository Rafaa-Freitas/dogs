import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

function Login() {
  const { isLogged } = React.useContext(UserContext);

  if (isLogged) {
    return <Navigate to="/conta" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm></LoginForm>}></Route>
        <Route path="criar" element={<LoginCreate></LoginCreate>}></Route>
        <Route
          path="perdeu"
          element={<LoginPasswordLost></LoginPasswordLost>}
        ></Route>
        <Route
          path="resetar"
          element={<LoginPasswordReset></LoginPasswordReset>}
        ></Route>
      </Routes>
    </div>
  );
}

export default Login;
