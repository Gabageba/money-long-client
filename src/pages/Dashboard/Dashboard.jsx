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
        {/*<Panel name={'Структура расходов'}/>*/}
      </div>
      {sovetShow ?
        <div className={style.showSovet} onClick={() => setSovetShow(false)}>Скрыть советы</div>
        :  <div className={style.showSovet} onClick={() => setSovetShow(true)}>Показать советы</div>}

      {sovetShow ?
        <div style={{marginBottom: '40px'}}>
          <Sovet img={sovet1}
                 text={'Для того чтобы процесс ведения бюджета был не просто «необходимым», но и приятным, выберите наш сервис "MoneyLong"'}
                 title={'Совет № 1. Выберите удобный для вас способ ведения бюджета'}/>
          <Sovet img={sovet2} title={'Совет № 2. Начните вести бюджет'}
                 text={'Ведение бюджета нужно каждому по ряду причин, но основная его задача — контроль доходов и расходов. Если вы видите, что тратите больше, чем зарабатываете, но не понимаете, что делаете не так, — ведение бюджета поможет с этой проблемой.'}/>
          <Sovet img={sovet3}
                 text={'В случае с импульсивными покупками достаточно 10 секунд, чтобы необоснованное желание улетучилось и с 99%-ной вероятностью больше не возвращалось. Но когда речь заходит о дорогостоящих, необходимых и желанных покупках, здесь и нескольких дней может быть недостаточно — такие траты необходимо запланировать примерно за 30 дней.\n'}
                 title={'Совет № 3. Следуйте правилу 30 дней, когда планируете дорогостоящие покупки'}/>
          <Sovet img={sovet4} title={'Совет № 4. Чаще используйте банковскую карту вместо наличных средств'}
                 text={'В некоторых ситуациях наличными рассчитываться удобнее, нежели банковскими картами. Многие боятся пользоваться ими, так как сомневаются в их надежности. Однако деньги с карты украсть сложнее, чем бумажные купюры. По крайней мере, если вашим средствам что-то будет угрожать, вы сразу узнаете о попытках взлома и сможете связаться с банком, для того чтобы временно заблокировать карту или счет, пока проблема не решится.'}/>
          <Sovet img={sovet5} title={'Совет № 5. Постоянно ищите способы повышения своих доходов'}
                 text={'Помимо открытия вклада в банке, есть и другие варианты, как можно увеличить свой пассивный доход: валютные операции, инвестиции, недвижимость.\n'}/>
          <Sovet img={sovet6} title={'Совет № 6. Никому не сообщайте свои платежные данные'}
                 text={'Мошенников, которые выманивают деньги с карт, в последнее время становится все больше, а их схемы — все изощреннее. Таких людей называют социальными инженерами — это искусные психологи, подготовленные специально для вымогательства денег.'}/>
        </div>
        : null}

    </div>

  )
    ;
};

export default Dashboard;