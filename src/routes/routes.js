import {
  ACCOUNT_PAGE_ROUTE,
  ACCOUNTS_ROUTE,
  ANALYTICS_ROUTE,
  DASHBOARD_ROUTE, IMPORT_ROUTE,
  LOGIN_ROUTE,
  RECORDS_ROUTE, REGISTRATION_ROUTE,
  SETTINGS_ROUTE
} from '../utils/const';
import Dashboard from '../pages/Dashboard/Dashboard';
import Accounts from '../pages/Accounts/Accounts';
import Settings from '../pages/Settings/Settings';
import Analytics from '../pages/Analytics/Analytics';
import Records from '../pages/Records/Records';
import Login from '../pages/Login/Login';
import AccountPage from '../pages/AccountPage/AccountPage';
import Import from '../pages/Import/Import';

export const loginRoutes = [
  {
    path: DASHBOARD_ROUTE,
    element: <Dashboard/>,
  },
  {
    path: ACCOUNTS_ROUTE,
    element: <Accounts/>,
  },
  {
    path: SETTINGS_ROUTE,
    element: <Settings/>,
  },
  {
    path: ANALYTICS_ROUTE,
    element: <Analytics/>,
  },
  {
    path: RECORDS_ROUTE,
    element: <Records/>,
  },
  {
    path: ACCOUNT_PAGE_ROUTE + '/:id',
    element: <AccountPage/>,
  },
  {
    path: IMPORT_ROUTE,
    element: <Import/>,
  },

]
export const routes = [
  {
    path: LOGIN_ROUTE,
    element: <Login/>,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Login/>,
  }
]