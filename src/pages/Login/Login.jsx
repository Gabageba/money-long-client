import React, {useState} from 'react';
import style from './Login.module.css'
import imac from '../../assets/imac.png'
import {useLocation, useNavigate} from 'react-router-dom';
import {DASHBOARD_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from '../../utils/const';
import {useDispatch} from 'react-redux';
import {login, registration} from '../../http/userAPI';
import {setIsAuthAC, setUserAC} from '../../redux/userReducer';

const Login = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const dispatch = useDispatch()

  const clear = () => {
    setName('')
    setEmail('')
    setPassword('')
    setErrorText('')
    setLoginError(false)
  }

  const loginClick = async () => {
    try {
      let data
      if (isLogin) {
        if (email === '' || password === '') {
          setErrorText('Пожалуйста, заполните все поля')
          setLoginError(true)
        } else {
          data = await login(email, password)
          // console.log(data)
          dispatch(setUserAC(data))
          dispatch(setIsAuthAC(true))
          navigate(DASHBOARD_ROUTE)
        }
      } else {
        if (email === '' || password === '' ) {
          setErrorText('Пожалуйста, заполните все поля')
          setLoginError(true)
        } else {
          data = await registration(email, password, name)
          dispatch(setUserAC(data))
          dispatch(setIsAuthAC(true))
          navigate(DASHBOARD_ROUTE)
        }
      }
    } catch (e) {
      setErrorText(e.response.data.message)
      setLoginError(true)
      setPassword('')
    }
  }

    return (
        <div className={style.login}>
            <div className={style.banner}>
              <div className={style.bannerInfo}>
                <div className={style.slogan}>Ваши сбережения в одном месте</div>
                <img className={style.imac} src={imac} alt=""/>
              </div>
            </div>
          <div className={style.form}>
            <div className={style.reg}>
              <div className={style.enter}>{ isLogin ? 'Войти' : 'Зарегистрироваться'}</div>
              <div>
                <div className={style.head}>E-mail</div>
                <input className={style.input} value={email} type="text" onChange={e => {
                  setEmail(e.target.value)
                  setLoginError(false)
                }}/>
              </div>
              <div>
                <div className={style.head}>Пароль</div>
                <input className={style.input} value={password} type="password" onChange={e => {
                  setPassword(e.target.value)
                  setLoginError(false)
                }}/>
              </div>
              {loginError ?
                <div className={style.errorText}>{errorText}</div>
              : null}
              <button className={style.enterButton} onClick={loginClick}>{ isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
              {isLogin ?
                <div className={style.no}>Не зарегистрированы? <span className={style.regButton} onClick={() => {
                  navigate(REGISTRATION_ROUTE)
                  clear()
                }}>Зарегистрироваться</span> </div>
                : <div className={style.no}>Есть аккаунт? <span className={style.regButton} onClick={() => {
                  clear()
                  navigate(LOGIN_ROUTE)
                }}>Войдите</span> </div>
              }

            </div>
          </div>
        </div>
    );
};

export default Login;