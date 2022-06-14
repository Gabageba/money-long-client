import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import AppRouter from './components/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import 'material-icons/iconfont/material-icons.css';
import './App.css'
import Spinner from './components/Spinner/Spinner';
import {useDispatch} from 'react-redux';
import {check} from './http/userAPI';
import {setIsAuthAC, setUserAC} from './redux/userReducer';

const App = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      dispatch(setUserAC(data))
      dispatch(setIsAuthAC(true))
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <AppRouter/>
      </div>
    </BrowserRouter>
  );
};

export default App;