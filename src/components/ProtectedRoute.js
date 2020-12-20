import React from 'react';
import { Route, Redirect, useRouteMatch } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props  }) {
  // const { path, url } = useRouteMatch();
  console.log('props', props);
  // console.log('props.loggedIn', props.loggedIn);
  // console.log('path', path);
  // console.log('url', url);
  return (
    <Route >
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./non-existent-address" />
      }
    </Route>
)}

export default ProtectedRoute;
