import React, {useEffect, useState} from 'react';
import Cards from '../../components/Cards/Cards';
import logo from '../../assets/banknotes.png';
import logo2 from '../../assets/credit-cards.png';
import style from './Dashboard.module.css'
import Panel from './Panel/Panel';
import AddButton from './AddButton/AddButton';
import AddAccountModal from '../../components/Modals/AddAccountModal/AddAccountModal';
import {fetchAccountType} from '../../http/accountTypeAPI';
import Spinner from '../../components/Spinner/Spinner';
import {useDispatch, useSelector} from 'react-redux';
import {setAccountTypesAC} from '../../redux/accountTypeReducer';
import {fetchAccounts} from '../../http/accountAPI';
import {setAccountsAC} from '../../redux/accountReducer';
import AccountPanel from './AccountPanel/AccountPanel';
import RecordPanel from './RecordPanel/RecordPanel';
import {fetchRecord} from '../../http/recordAPI';
import {setRecordAC} from '../../redux/recordReducer';
import {fetchCategory} from '../../http/categoryAPI';
import {setCategoryAC} from '../../redux/categoryReducer';
import Sovet from './Sovet/Sovet';
import sovet1 from '../../assets/sovet1.jpg'
import sovet2 from '../../assets/sovet2.jpg'
import sovet3 from '../../assets/sovet3.jpg'
import sovet4 from '../../assets/sovet4.jpg'
import sovet5 from '../../assets/sovet5.jpg'
import sovet6 from '../../assets/sovet6.jpg'

const Dashboard = () => {
  const user = useSelector(state => state.user.user)
  const accounts = useSelector(state => state.account.accounts)
  const [addAccountActive, setAddAccountActive] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sovetShow, setSovetShow] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchAccounts(user.id).then(data => {
      dispatch(setAccountsAC(data))
    })
    fetchCategory().then(data => {
      dispatch(setCategoryAC(data))
    })
    fetchRecord(user.id, null, 5, 1).then(data => {
      dispatch(setRecordAC(data))
    })
    fetchAccountType().then(data => {
      dispatch(setAccountTypesAC(data))
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }


  return (
    <div className={style.fon}>
      <AddAccountModal setActive={setAddAccountActive} active={addAccountActive}/>
      <div className={style.flex}>
        {
          accounts.length === 0 ? null :
            accounts.map(acc => (
              <Cards key={acc.id} accountData={acc}/>
            ))
        }
        <AddButton onClick={setAddAccountActive}/>
      </div>
      <div style={{display: 'flex'}}>
        <AccountPanel/>
        <RecordPanel/>
        {/*<Panel name={'?????????????????? ????????????????'}/>*/}
      </div>
      {sovetShow ?
        <div className={style.showSovet} onClick={() => setSovetShow(false)}>???????????? ????????????</div>
        :  <div className={style.showSovet} onClick={() => setSovetShow(true)}>???????????????? ????????????</div>}

      {sovetShow ?
        <div style={{marginBottom: '40px'}}>
          <Sovet img={sovet1}
                 text={'?????? ???????? ?????????? ?????????????? ?????????????? ?????????????? ?????? ???? ???????????? ??????????????????????????, ???? ?? ????????????????, ???????????????? ?????? ???????????? "MoneyLong"'}
                 title={'?????????? ??? 1. ???????????????? ?????????????? ?????? ?????? ???????????? ?????????????? ??????????????'}/>
          <Sovet img={sovet2} title={'?????????? ??? 2. ?????????????? ?????????? ????????????'}
                 text={'?????????????? ?????????????? ?????????? ?????????????? ???? ???????? ????????????, ???? ???????????????? ?????? ???????????? ??? ???????????????? ?????????????? ?? ????????????????. ???????? ???? ????????????, ?????? ?????????????? ????????????, ?????? ??????????????????????????, ???? ???? ??????????????????, ?????? ?????????????? ???? ??????, ??? ?????????????? ?????????????? ?????????????? ?? ???????? ??????????????????.'}/>
          <Sovet img={sovet3}
                 text={'?? ???????????? ?? ?????????????????????????? ?????????????????? ???????????????????? 10 ????????????, ?????????? ???????????????????????????? ?????????????? ?????????????????????? ?? ?? 99%-?????? ???????????????????????? ???????????? ???? ????????????????????????. ???? ?????????? ???????? ?????????????? ?? ??????????????????????????, ?????????????????????? ?? ???????????????? ????????????????, ?????????? ?? ???????????????????? ???????? ?????????? ???????? ???????????????????????? ??? ?????????? ?????????? ???????????????????? ?????????????????????????? ???????????????? ???? 30 ????????.\n'}
                 title={'?????????? ??? 3. ???????????????? ?????????????? 30 ????????, ?????????? ???????????????????? ?????????????????????????? ??????????????'}/>
          <Sovet img={sovet4} title={'?????????? ??? 4. ???????? ?????????????????????? ???????????????????? ?????????? ???????????? ???????????????? ??????????????'}
                 text={'?? ?????????????????? ?????????????????? ?????????????????? ???????????????????????????? ??????????????, ???????????? ?????????????????????? ??????????????. ???????????? ???????????? ???????????????????????? ??????, ?????? ?????? ?????????????????????? ?? ???? ????????????????????. ???????????? ???????????? ?? ?????????? ?????????????? ??????????????, ?????? ???????????????? ????????????. ???? ?????????????? ????????, ???????? ?????????? ?????????????????? ??????-???? ?????????? ????????????????, ???? ?????????? ?????????????? ?? ???????????????? ???????????? ?? ?????????????? ?????????????????? ?? ????????????, ?????? ???????? ?????????? ???????????????? ?????????????????????????? ?????????? ?????? ????????, ???????? ???????????????? ???? ??????????????.'}/>
          <Sovet img={sovet5} title={'?????????? ??? 5. ?????????????????? ?????????? ?????????????? ?????????????????? ?????????? ??????????????'}
                 text={'???????????? ???????????????? ???????????? ?? ??????????, ???????? ?? ???????????? ????????????????, ?????? ?????????? ?????????????????? ???????? ?????????????????? ??????????: ???????????????? ????????????????, ????????????????????, ????????????????????????.\n'}/>
          <Sovet img={sovet6} title={'?????????? ??? 6. ???????????? ???? ?????????????????? ???????? ?????????????????? ????????????'}
                 text={'????????????????????, ?????????????? ???????????????????? ???????????? ?? ????????, ?? ?????????????????? ?????????? ???????????????????? ?????? ????????????, ?? ???? ?????????? ??? ?????? ????????????????????. ?????????? ?????????? ???????????????? ?????????????????????? ???????????????????? ??? ?????? ???????????????? ??????????????????, ???????????????????????????? ???????????????????? ?????? ???????????????????????????? ??????????.'}/>
        </div>
        : null}

    </div>

  )
    ;
};

export default Dashboard;