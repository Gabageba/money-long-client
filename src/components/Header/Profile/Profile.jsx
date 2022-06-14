import React, {useEffect, useRef, useState} from 'react';
import style from './Profile.module.css';
import profile from '../../../assets/user.png';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setIsAuthAC, setUserAC} from '../../../redux/userReducer';
import {LOGIN_ROUTE} from '../../../utils/const';

const Profile = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dropDownStyle, setDropDownStyle] = useState(style.dropDownContent)
  const wrapperRef = useRef(null);

  const logOut = () => {
    dispatch(setUserAC({}))
    dispatch(setIsAuthAC(false))
    localStorage.removeItem('token')
    navigate(LOGIN_ROUTE)
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const {current: wrap} = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDropDownStyle(style.dropDownContent)
    }
  };

  return (
    <div ref={wrapperRef} >
      <img className={style.profile} src={profile} alt="" onClick={() => {
        dropDownStyle === style.dropDownContent ?
        setDropDownStyle(style.dropDownContentActive) : setDropDownStyle(style.dropDownContent)
      }}/>
      <div className={dropDownStyle}>
        <div className={style.dropDownLink} onClick={logOut}>Выход</div>
      </div>
    </div>
  );
};

export default Profile;