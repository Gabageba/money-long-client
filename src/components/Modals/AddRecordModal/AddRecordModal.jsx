import React, {useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import {useDispatch, useSelector} from 'react-redux';
import style from './AddRecordModal.module.css'
import Types from './Types/Types';
import Category from './Category/Category';
import {createRecord, updateRecord} from '../../../http/recordAPI';
import {setRecordAC} from '../../../redux/recordReducer';
import category from './Category/Category';
import {fetchAccounts, updateAccount} from '../../../http/accountAPI';
import {setAccountsAC} from '../../../redux/accountReducer';

const AddRecordModal = ({active, setActive, isEdit, recData, isImport, categ, money}) => {
  const user = useSelector(state => state.user.user)
  const [selectedSum , setSelectedSum] = useState(0)
  const [display, setDisplay] = useState(false)
  const [currentAccount, setCurrentAccount] = useState('')
  const accounts = useSelector(state => state.account.accounts)
  const [recAcc, setRecAdd] = useState('-')
  const [selectedCategory, setSelectedCategory] = useState('')
  const dispatch = useDispatch()
  const categories = useSelector(state => state.category.categories)

  const click = () => {
    if (isEdit) {
      updateRecord(recData.id, recAcc, selectedSum, currentAccount.id, selectedCategory.id, user.id).then(data => {
        dispatch(setRecordAC(data))
        setActive(false)
        clear()
      })
    } else {
      createRecord(recAcc, user.id, selectedSum, currentAccount.id, selectedCategory.id).then(data => {
        dispatch(setRecordAC(data))
        setActive(false)
        clear()
      })

      const money = recAcc === '-' ? Number(currentAccount.money) - Number(selectedSum) : Number(currentAccount.money) + Number(selectedSum)
      updateAccount(currentAccount.id, null, null, money, null, user.id).then(data => {
        dispatch(setAccountsAC(data))
      })
    }

  }

  const clear = () => {
    setSelectedSum(0)
    setRecAdd('-')
    setCurrentAccount('')
  }

  useEffect(() => {
    if (active === true) {
      if (isEdit) {
        setRecAdd(recData.type)
        setSelectedSum(recData.money)
        accounts.map(a => {
          if (a.id === recData.accountId) {
            setCurrentAccount(a)
          }
        })
        categories.map(c => {
          if (c.id === recData.categoryId) {
            setSelectedCategory(c)
          }
        })

      } else if (isImport === true) {
        setSelectedCategory(categ)
        setRecAdd('-')
        setSelectedSum(money)
        setCurrentAccount(accounts[0])

      }
      else {
        setCurrentAccount(accounts[0])
      }
    }
  }, [active])

  return (
    <Modal active={active} setActive={setActive} modalName={isEdit ? 'Изменить запись' : 'Добавить запись'}>
      <div className={style.main} style={{backgroundColor: currentAccount.color}}>
        <div className={style.recordTypes}>
          <div className={recAcc === '-' ? style.buttonTypeRecordActive : style.buttonTypeRecord} onClick={() => setRecAdd('-')}>Расход</div>
          <div className={recAcc === '+' ? style.buttonTypeRecordActive : style.buttonTypeRecord} onClick={() => setRecAdd('+')}>Доход</div>
        </div>
        <Types currentAccount={currentAccount} setCurrentAccount={setCurrentAccount} display={display} setDisplay={setDisplay}/>
        <div className={style.sum}>
            <div className={style.head}>Сумма</div>
            <input className={style.inputSum} value={selectedSum} onChange={e => setSelectedSum(e.target.value)} type="number"/>
        </div>
      </div>
      <div className={style.additional}>
        <Category category={selectedCategory} setCategory={setSelectedCategory}/>
        <button onClick={click} className={style.addButton}>{isEdit ? 'Изменить запись' : 'Добавить запись'}</button>
      </div>
    </Modal>
  );
};

export default AddRecordModal;