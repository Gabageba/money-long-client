import React, {useEffect, useState} from 'react';
import style from './AnalCard.module.css'
import {useSelector} from 'react-redux';

const AnalCards = ({category}) => {
  const [expenses, setExpenses] = useState(0)
  const [income, setIncome] = useState(0)
  const records = useSelector(state => state.record.records)
  useEffect(() => {
    records.map(r => {
      if (r.categoryId === category.id) {
        if (r.type === '-') {
          setExpenses(Number(expenses) + Number(r.money))
        }
        if (r.type === '+') {
          setIncome(Number(expenses) + Number(r.money))
        }
      }
    })
  }, [records])
  return (
    <div className={style.card}>
      <div style={{backgroundColor: category.color}} className={style.icon}>
        <span className="material-icons">{category.icon}</span>
      </div>
      <div className={style.name}>{category.name}</div>
      {expenses === 0 ?
        <div className={style.expenses} style={{color: '#7F8FA4'}}>{expenses} ₽</div> :
        <div className={style.expenses}>-{expenses} ₽</div>
      }

      {income === 0 ?
        <div className={style.inCome} style={{color: '#7F8FA4'}}>{income} ₽</div>
        :
        <div className={style.inCome}>+{income} ₽</div>
      }

    </div>
  );
};

export default AnalCards;