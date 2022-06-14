import React from 'react';
import {useSelector} from 'react-redux';
import style from './RecPanCard.module.css'
import {ACCOUNT_PAGE_ROUTE} from '../../../../utils/const';
import {useNavigate} from 'react-router-dom';

const RecPanCard = ({rec}) => {
  const fmtMoney =  new Intl.NumberFormat('ru-RU').format(rec.money)
  const categories = useSelector(state => state.category.categories)
  return (
    <div className={style.card}>
      {categories.map(c => {
        if (c.id === rec.categoryId) {
          return (
            <div style={{display: 'flex'}} key={c.id}>
              <div className={style.icon} style={{backgroundColor: c.color}}>
                <span className="material-icons-round">{c.icon}</span>
              </div>
              <div>
                <div className={style.name}>{rec.name}</div>
                <div className={style.type}>{c.name}</div>
              </div>
              <div className={style.money}>{fmtMoney} ₽</div>
            </div>
          )
        }
      })}
    </div>
  );
};

export default RecPanCard;