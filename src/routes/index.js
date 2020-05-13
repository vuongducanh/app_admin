import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import routes from './routes';

const loading = () => <div>Loading...</div>;

const AppRouter = ({ history }) => {
  return (
    <BrowserRouter history={history}>
      <React.Suspense fallback={loading()}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

          <Redirect from="*" to={"/404"} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
