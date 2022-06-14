import React from 'react';
import style from '../AddRecordModal.module.css';
import {useSelector} from 'react-redux';

const Types = ({display, setDisplay, currentAccount, setCurrentAccount}) => {

  const types = useSelector(state => state.accountType.accountTypes)
  const accounts = useSelector(state => state.account.accounts)

  return (
    <div className={style.types}>
      <div className={style.head}>Счет</div>
      <div className={display ? style.inputActive : style.input} onClick={() => setDisplay(!display)}>
        <div className={style.arrow}>
          <span className="material-icons-round">arrow_drop_down</span>
        </div>
        <div className={style.icon} style={{backgroundColor: currentAccount.color}}>
          {types.map(t => {
            if (currentAccount.accountTypeId === t.id) {
              return (
                <span key={t.id} className="material-icons-round">{t.icon}</span>
              )
            }
          })}
        </div>
        <span className={style.name}>{currentAccount.name}</span>
      </div>
      {
        display && (
          <div className={style.options}>
            {accounts.map(a => (
              <div key={a.id} className={a.id === currentAccount.id ? style.typeBlockActive : style.typeBlock}
                   onClick={() => {
                     setCurrentAccount(a)
                     setDisplay(false)
                   }}>
                {types.map(t => {
                  if (a.accountTypeId === t.id) {
                    return (
                      <div key={t.id} className={style.icon} style={{backgroundColor: a.color}}>
                        <span className="material-icons-round">{t.icon}</span>
                      </div>
                    )
                  }
                })}
                <span className={style.name}>{a.name}</span>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default Types;