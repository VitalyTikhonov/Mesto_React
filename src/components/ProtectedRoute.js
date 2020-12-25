// import React from 'react';
import { useContext } from 'react';
import { LoginStatusContext } from '../contexts/LoginStatusContext';
import { Route, Redirect } from "react-router-dom";
import Loader from './Loader';

function ProtectedRoute({ component: Component, ...props }) {
  const loginStatus = useContext(LoginStatusContext);

  // console.log('loginStatus', loginStatus);
  if (loginStatus === 'unknown') {
    return <Loader />
  } else {
    return loginStatus === 'loggedIn' ? <Component {...props} /> : <Redirect to="/" />;
  }
  // return (
  //   // <Route exact path="/user-profile">
  //   <Route>
  //     {
  //       () => {
  //         if (loginStatus === 'unknown') {
  //           return <Loader />
  //         } else {
  //           return loginStatus === 'loggedIn' ? <Component {...props} /> : <Redirect to="/" />;
  //         }
  //         // () => props.loggedIn ? <Component {...props} /> : <Redirect to="/" />
  //       }
  //     }
  //   </Route>
  // );

  // return () => props.loggedIn ? <Component {...props} /> : <Redirect to="./" />;
  // на такое Реакт ругается в консоли
}

export default ProtectedRoute;