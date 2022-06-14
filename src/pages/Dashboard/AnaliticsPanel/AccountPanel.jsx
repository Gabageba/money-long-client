import React from 'react';
import style from './AccountPanel.module.css'

const AccountPanel = () => {
  return (
    <div className={style.panel}>
      <div>
        <div className={style.line}/>
        <div className={style.text}>Счета</div>
      </div>
    </div>
  );
};

export default AccountPanel;