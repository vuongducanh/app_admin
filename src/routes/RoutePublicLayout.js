import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const RoutePublicLayout = ({ component: Component, restricted, layout: Layout, routes, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const isLogin = isAuthenticated();
  console.log('isLogin = ', isLogin);

  return (
    <Route
      {...rest}
      render={props =>
        (
          isLogin && restricted ?
            <Redirect to="/dashboard" />
            : <Component {...props} />
        )
      }
    />
  )
}

export default RoutePublicLayout;
