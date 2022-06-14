import React from 'react';
import logo from '../../assets/logo.png'
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {
  ACCOUNTS_ROUTE,
  ANALYTICS_ROUTE,
  DASHBOARD_ROUTE, IMPORT_ROUTE,
  RECORDS_ROUTE
} from '../../utils/const';
import Profile from './Profile/Profile';

const Header = () => {

  const SelectedLink = () => {
    return (
      select => select.isActive ? style.activeLink : style.navLink
    )
  }

  return (
    <div className={style.header}>
      <ul className={style.ul}>
        <li className={style.li}>
          <NavLink to={DASHBOARD_ROUTE}> <img src={logo} alt="" className={style.logo}/>
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink to={DASHBOARD_ROUTE} className={SelectedLink()}>Обзор </NavLink>
        </li>
        <li className={style.li}>
          <NavLink to={ACCOUNTS_ROUTE} className={SelectedLink()}>Счета </NavLink>
        </li>
        <li className={style.li}>
          <NavLink to={RECORDS_ROUTE} className={SelectedLink()}>Записи </NavLink>
        </li>
        <li className={style.li}>
          <NavLink to={ANALYTICS_ROUTE} className={SelectedLink()}>Аналитика</NavLink>
        </li>
        <li className={style.li}>
          <NavLink to={IMPORT_ROUTE} className={SelectedLink()}>Импорт</NavLink>
        </li>
      </ul>
      <div className={style.right}>
        <Profile/>
      </div>

      <div className={style.line}/>
    </div>

  );
};

export default Header;