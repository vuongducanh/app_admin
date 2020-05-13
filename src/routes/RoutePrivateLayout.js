import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const PrivateRoute = ({ component: Component, layout: Layout, routes, ...rest }) => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const isLogin = isAuthenticated();

  return (
    <Route
      {...rest}
      render={renderProps => {
        if (!isLogin) {
          return (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }
        if (!Component) {
          return null;
        }
        return Layout ? (
          <Layout {...renderProps}>{Component ? <Component {...renderProps} routes={routes} /> : null}</Layout>
        ) : (
            <Component {...renderProps} routes={routes} />
          );
      }}
    />
  );
};

export default PrivateRoute;
