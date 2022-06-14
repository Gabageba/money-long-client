import React, {useEffect, useState} from 'react';
import style from './Accounts.module.css';
import AccountsList from './AccountsList/AccountsList';
import {fetchAccounts} from '../../http/accountAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setAccountsAC} from '../../redux/accountReducer';
import {fetchAccountType} from '../../http/accountTypeAPI';
import {setAccountTypesAC} from '../../redux/accountTypeReducer';
import AddAccountModal from '../../components/Modals/AddAccountModal/AddAccountModal';
import Spinner from '../../components/Spinner/Spinner';

const Accounts = () => {
  const user = useSelector(state => state.user.user)
  const [active, setActive] = useState('')
  const [display, setDisplay] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('Default')
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchAccounts(user.id).then(data => {
      dispatch(setAccountsAC(data))
    })
    fetchAccountType().then(data => {
      dispatch(setAccountTypesAC(data))
    }).finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setLoading(true)
    fetchAccounts(user.id, selectedFilter).then(data => {
      dispatch(setAccountsAC(data))
    }).finally(() => setLoading(false))
  }, [selectedFilter])

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className={style.bg}>
      <AddAccountModal active={active} setActive={setActive} filter={selectedFilter}/>
      <div style={{marginLeft: '35%'}}>
        <div style={{position: 'relative'}}>
          <input type="text" value={selectedFilter} readOnly
                 className={display ? style.selectedFilterActive : style.selectedFilter}
                 onClick={() => setDisplay(!display)}/>
          <div className={style.arrow}>
            <span className="material-icons-round">arrow_drop_down</span>
          </div>
        </div>
        {display && (
          <div className={style.filters}>
            <div className={selectedFilter === 'Default' ? style.filterBlockActive : style.filterBlock}
                 onClick={() => {
                   if (selectedFilter !== 'Default') {
                     setSelectedFilter('Default')
                     setDisplay(false)
                   }
                 }}>Default
            </div>
            <div className={selectedFilter === 'A-Z' ? style.filterBlockActive : style.filterBlock}
                 onClick={() => {
                   if (selectedFilter !== 'A-Z') {
                     setSelectedFilter('A-Z')
                     setDisplay(false)
                   }
                 }}>A-Z
            </div>
            <div className={selectedFilter === 'Z-A' ? style.filterBlockActive : style.filterBlock}
                 onClick={() => {
                   if (selectedFilter !== 'Z-A') {
                     setSelectedFilter('Z-A')
                     setDisplay(false)
                   }
                 }}>Z-A
            </div>
            <div className={selectedFilter === 'Сумма (по убыванию)' ? style.filterBlockActive : style.filterBlock}
                 onClick={() => {
                   if (selectedFilter !== 'Сумма (по убыванию)') {
                     setSelectedFilter('Сумма (по убыванию)')
                     setDisplay(false)
                   }
                 }}>Сумма по убыванию
            </div>
            <div className={selectedFilter === 'Сумма (по возрастанию)' ? style.filterBlockActive : style.filterBlock}
                 onClick={() => {
                   if (selectedFilter !== 'Сумма (по возрастанию)') {
                     setSelectedFilter('Сумма (по возрастанию)')
                     setDisplay(false)
                   }
                 }}>Сумма по возрастанию
            </div>
          </div>
        )}
      </div>
      <div className={style.main}>
        <div>
          <div className={style.accounts}>Счета</div>
          <button className={style.addButton} onClick={() => {
            setActive(true)
          }}>+ Добавить
          </button>
        </div>
        <div style={{marginTop: '30px'}}>
          <AccountsList/>
        </div>
      </div>
    </div>
  );
};

export default Accounts;