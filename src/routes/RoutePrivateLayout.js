import React from 'react';
import { Route, Redirect  } from 'react-router-dom';

const PrivateRoute = ({ component: Component, layout: Layout, routes, ...rest }) => {

  const checkLogin = true
  return (
    <Route
      {...rest}
      render={renderProps => {
        if (!checkLogin) {
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
