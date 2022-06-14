import React from 'react';
import {useSelector} from 'react-redux';
import style from './AccPanCard.module.css'
import {ACCOUNT_PAGE_ROUTE} from '../../../../utils/const';
import {useNavigate} from 'react-router-dom';

const AccPanCard = ({acc}) => {
  const fmtMoney =  new Intl.NumberFormat('ru-RU').format(acc.money)
  const types = useSelector(state => state.accountType.accountTypes)
  const navigate = useNavigate()
  return (
    <div className={style.card} onClick={() => {navigate(ACCOUNT_PAGE_ROUTE + '/' + acc.id)}}>
      {types.map(t => {
        if (t.id === acc.accountTypeId) {
          return (
            <div style={{display: 'flex'}} key={t.id}>
              <div className={style.icon} style={{backgroundColor: acc.color}}>
                <span className="material-icons-round">{t.icon}</span>
              </div>
              <div>
                <div className={style.name}>{acc.name}</div>
                <div className={style.type}>{t.name}</div>
              </div>
              <div className={style.money}>{fmtMoney} ₽</div>
            </div>
          )
        }
      })}
    </div>
  );
};

export default AccPanCard;