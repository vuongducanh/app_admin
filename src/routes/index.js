import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import RoutePublicLayout from './RoutePublicLayout';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import routes from './routes';

const Page404 = React.lazy(() => import('../components/Errors/Page404'));

const loading = () => <div>Loading...</div>;

const AppRouter = ({ history }) => {
  return (
    <BrowserRouter history={history}>
      <React.Suspense fallback={loading()}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}

          <RoutePublicLayout path={'/404'} component={Page404} />
          <Redirect from="*" to={"/404"} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
