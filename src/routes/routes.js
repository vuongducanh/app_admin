import React from 'react';
import RoutePrivateLayout from './RoutePrivateLayout';
import RoutePublicLayout from './RoutePublicLayout';
import LayoutMain from '../layout/Main';
import NoHeaderFooter from '../layout/NoHeaderFooter';
const Dashboard = React.lazy(() => import('../pages/Dashboard'));
const Login = React.lazy(() => import('../pages/Login'));
const Register = React.lazy(() => import('../pages/Register'));

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    layout: LayoutMain,
    layoutMiddleware: RoutePrivateLayout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    layout: NoHeaderFooter,
    layoutMiddleware: RoutePublicLayout
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    layout: NoHeaderFooter,
    layoutMiddleware: RoutePublicLayout
  }
];

export default routes;
