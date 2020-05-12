import React from 'react';
import { Route } from 'react-router-dom';

const RoutePublicLayout = ({ component: Component, layout: Layout, routes, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Layout ? (
        <Layout {...props}>{Component ? <Component {...props} routes={routes} /> : null}</Layout>
      ) : Component ? (
        <Component {...props} routes={routes} />
      ) : null
    }
  />
);

export default RoutePublicLayout;
