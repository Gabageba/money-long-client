import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import style from './RecordCard.module.css'
import AddRecordModal from '../Modals/AddRecordModal/AddRecordModal';
import {deleteRecord} from '../../http/recordAPI';
import {setRecordAC} from '../../redux/recordReducer';
import {updateAccount} from '../../http/accountAPI';
import {setAccountsAC} from '../../redux/accountReducer';

const RecordCard = ({record}) => {
  const categories = useSelector(state => state.category.categories)
  const accounts = useSelector(state => state.account.accounts)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  const fmtSum =  new Intl.NumberFormat('ru-RU').format(record.money);
  const deleteClick = () => {
    deleteRecord(record.id).then(data => {
      dispatch(setRecordAC(data))
    })
  }
  //
  // console.log(currentAcc)

  return (
    <div className={style.card}>
      <AddRecordModal active={active} setActive={setActive} isEdit={true} recData={record}/>
      <div className={style.delete}>
        <span className="material-icons-sharp" onClick={deleteClick}>delete</span>
      </div>
        <div  onClick={() => setActive(true)}>
          { categories.map(c => {
            if (c.id === record.categoryId) {
              return (
                <div style={{display: 'flex'}} key={c.id}>
                  <div className={style.icon} style={{backgroundColor: c.color}}>
                    <span className="material-icons-round">{c.icon}</span>
                  </div>
                  <div className={style.category}>{c.name}</div>
                  {accounts.map(a => {
                    if (record.accountId === a.id) {
                      return (
                        <div className={style.account} key={a.id}>
                          <div className={style.color} style={{backgroundColor: a.color}}></div>
                          <div className={style.name}>{a.name}</div>
                        </div>
                      )
                    }
                  })}
                  {record.type === '-' ? <div className={style.money} style={{color: '#F44336'}}>-{fmtSum} ₽</div>: <div className={style.money} style={{color: '#14C58B'}}>+{fmtSum} ₽</div>}
                </div>
              )
            }
          })
          }
        </div>
    </div>
  );
};

export default RecordCard;