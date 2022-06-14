import React from 'react';
import {loginRoutes, routes} from '../routes/routes';
import {Route, Routes} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../pages/Login/Login';

const AppRouter = () => {
  const isAuth = useSelector(state => state.user.isAuth)

  return (
    <Routes>
      {isAuth && loginRoutes.map(({path, element}) =>
        <Route key={path} path={path} element={element}/>
      )}
      {routes.map(({path, element}) =>
        <Route key={path} path={path} element={element}/>
      )}
      {isAuth ? <Route path="*" element={<Dashboard/>}/> : <Route path="*" element={<Login/>}/>}
    </Routes>
  );
};

export default AppRouter;