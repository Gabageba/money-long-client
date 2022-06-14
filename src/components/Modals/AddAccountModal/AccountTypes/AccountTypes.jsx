import React, {useEffect, useRef, useState} from 'react';
import style from './AccountTypes.module.css';
import {useSelector} from 'react-redux';

const AccountTypes = ({type, setType}) => {

  const types = useSelector(state => state.accountType.accountTypes)
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);
  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const {current: wrap} = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  return (
    <div>
      <div style={{marginTop: '20px'}} ref={wrapperRef}>
        <div className={style.head}>Тип счета</div>
        <div className={display ? style.inputActive : style.input} onClick={() => setDisplay(!display)}>
          <div className={style.arrow}>
            <span className="material-icons-round">arrow_drop_down</span>
          </div>
          <div className={style.icon}>
            <span className="material-icons-round">{type.icon}</span>
          </div>
          <span className={style.name}>{type.name}</span>
        </div>
        {
          display && (
            <div className={style.options}>
              {types.map(t => (
                <div key={t.id} className={t.id === type.id ? style.typeBlockActive : style.typeBlock} onClick={() => {
                  setType(t)
                  setDisplay(false)
                }}>
                  <div className={style.icon}>
                    <span className="material-icons-round">{t.icon}</span>
                  </div>
                  <span className={style.name}>{t.name}</span>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  );
};

export default AccountTypes;