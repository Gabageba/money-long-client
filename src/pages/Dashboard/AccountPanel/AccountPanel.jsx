import React from 'react';
import style from './AccountPanel.module.css'
import {useSelector} from 'react-redux';
import AccPanCard from './AccPanCard/AccPanCard';

const AccountPanel = () => {
  const accounts = useSelector(state => state.account.accounts)

  return (
    <div className={style.panel}>
      <div>
        <div className={style.line}/>
        <div className={style.text}>Счета</div>
      </div>
      <div style={{marginTop: '50px'}}>
        {accounts.map(a => (
          <AccPanCard acc={a} key={a.id}/>
          )
        )}
      </div>
    </div>
  );
};

export default AccountPanel;