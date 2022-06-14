import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {deleteAccount, fetchOneAccount} from '../../http/accountAPI';
import {setAccountAC, setAccountsAC} from '../../redux/accountReducer';
import {fetchAccountType} from '../../http/accountTypeAPI';
import {setAccountTypesAC} from '../../redux/accountTypeReducer';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import style from './AccountPage.module.css'
import {ACCOUNTS_ROUTE} from '../../utils/const';
import {fetchCategory} from '../../http/categoryAPI';
import {setCategoryAC} from '../../redux/categoryReducer';
import {fetchRecord} from '../../http/recordAPI';
import {setFilterRecordAC, setRecordAC} from '../../redux/recordReducer';
import RecordsAccountList from './RecordsAccountList/RecordsAccountList';
import AddAccountModal from '../../components/Modals/AddAccountModal/AddAccountModal';
import accounts from '../Accounts/Accounts';

const AccountPage = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const [loading, setLoading] = useState(true)
  const account = useSelector(state => state.account.account)
  const accounts = useSelector(state => state.account.accounts)
  const types = useSelector(state => state.accountType.accountTypes)
  const navigate = useNavigate()
  const fmtSum = new Intl.NumberFormat('ru-RU').format(account.money);
  const [active, setActive] = useState(false)

  useEffect(() => {
    fetchOneAccount(id).then(data => {
      dispatch(setAccountAC(data))
    })
    fetchCategory().then(data => {
      dispatch(setCategoryAC(data))
    })
    fetchAccountType().then(data => {
      dispatch(setAccountTypesAC(data))
    }).finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    fetchRecord(user.id, account.id).then(data => {
      dispatch(setFilterRecordAC(data))
    })
  }, [account])

  useEffect(() => {
    setLoading(true)
      fetchOneAccount(id).then(data => {
        dispatch(setAccountAC(data))
      }).finally(() => setLoading(false))
  }, [accounts])

  const onDelClick = () => {
    deleteAccount(id, user.id).then(data => {
      dispatch(setAccountsAC(data))
    })
    navigate(ACCOUNTS_ROUTE)
  }

  if (loading) {
    return <Spinner/>
  }


  return (
    <div>
      {account === {} ? null :
        <div style={{position: 'relative'}}>
          <div className={style.block}>
            <div className={style.head}>
              <div className={style.back} onClick={() => navigate(ACCOUNTS_ROUTE)}>
                <span className="material-icons">arrow_back_ios</span>
              </div>
              <div className={style.more}>Подробнее о счете</div>
              <div className={style.buttons}>
                <button className={style.change} onClick={() => setActive(true)}>Изменить</button>
                <button className={style.del} onClick={onDelClick}>Удалить</button>
              </div>
            </div>
            {
              types.map(t => {
                if (t.id === account.accountTypeId) {
                  return (
                    <div key={t.id} className={style.mainInfo}>
                      <AddAccountModal accountId={account.id} name={account.name} type={t} setActive={setActive} active={active} sum={account.money} color={account.color} isEdit={true} />
                      <div className={style.icon} style={{backgroundColor: account.color}}>
                        <span className="material-icons">{t.icon}</span>
                      </div>
                      <div style={{marginLeft: '60px'}}>
                        <div>
                          <div className={style.name}>Название</div>
                          <div className={style.text}>{account.name}</div>
                        </div>
                        <div>
                          <div className={style.name}>Тип</div>
                          <div className={style.text}>{t.name}</div>
                        </div>
                      </div>

                    </div>
                  )
                }
              })
            }
          </div>
          <div className={style.balance}>{fmtSum} ₽</div>
          <div>
            <div className={style.records}>Записи</div>
            <RecordsAccountList/>
          </div>
          <div className={style.addButton}></div>
        </div>
      }
    </div>
  );
};

export default AccountPage;