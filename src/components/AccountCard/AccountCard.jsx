import React from 'react';
import {useSelector} from 'react-redux';
import style from './AccountCard.module.css'
import {useNavigate} from 'react-router-dom';
import {ACCOUNT_PAGE_ROUTE} from '../../utils/const';

const AccountCard = ({account}) => {
  const types = useSelector(state => state.accountType.accountTypes)
  const navigate = useNavigate()
  const fmtSum =  new Intl.NumberFormat('ru-RU').format(account.money);
  return (
    <div className={style.card} onClick={() => {navigate(ACCOUNT_PAGE_ROUTE + '/' + account.id)}}>
      {types.map(t => {
        if (t.id === account.accountTypeId) {
          return (
            <div style={{display: 'flex'}} key={t.id}>
              <div className={style.icon} style={{backgroundColor: account.color}}>
                <span className="material-icons-round">{t.icon}</span>
              </div>
              <div className={style.category}>{account.name}</div>
              <div className={style.account}>
                <div className={style.name}>{t.name}</div>
              </div>
              <div className={style.money} style={{color: '#282c34'}}>{fmtSum} ₽</div>
            </div>
          )
        }
      })
      }</div>
  );
};

export default AccountCard;