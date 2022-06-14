import React, {useEffect, useState} from 'react';
import style from './Cards.module.css'
import {useSelector} from 'react-redux';
import AddAccountModal from '../Modals/AddAccountModal/AddAccountModal';

const Cards = ({accountData}) => {
  const [currentType, setCurrentType] = useState('')
  const [active, setActive] = useState(false)
  const types = useSelector(state => state.accountType.accountTypes)
  const fmtSum =  new Intl.NumberFormat('ru-RU').format(accountData.money);

  useEffect(() => {
    types.map(t => {
      if (t.id === accountData.accountTypeId) {
        setCurrentType(t)
      }
    })
  }, [])

  return (
    <div className={style.banknotes} style={{backgroundColor: accountData.color}}>
      <AddAccountModal isEdit={true} name={accountData.name} type={currentType}
                       color={accountData.color} sum={accountData.money} active={active}
                       setActive={setActive} accountId={accountData.id}/>
      {currentType === '' ? null :
        <div className={style.icon}>
          <span className="material-icons">{currentType.icon}</span>
        </div>
      }
      <div className={style.text}>
        <div className={style.name}>{accountData.name}</div>
        <div className={style.money}>{fmtSum} ₽</div>
      </div>
      <div className={style.edit}>
        <span onClick={() => setActive(true)} className="material-icons-round">edit</span>
      </div>
    </div>


  )

};

export default Cards;