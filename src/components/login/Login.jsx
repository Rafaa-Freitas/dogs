import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';

function Login() {
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
