import React, {useEffect, useState} from 'react';
import {fetchCategory} from '../../http/categoryAPI';
import {useDispatch, useSelector} from 'react-redux';
import {setCategoryAC} from '../../redux/categoryReducer';
import Spinner from '../../components/Spinner/Spinner';
import {fetchRecord} from '../../http/recordAPI';
import {setRecordAC} from '../../redux/recordReducer';
import AnalCards from '../../components/AnalCards/AnalCards';
import style from './Analytics.module.css'

const Analytics = () => {
  const [loading, setLoading] = useState(true)
  const categories = useSelector(state => state.category.categories)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)

  useEffect(() => {
    fetchRecord(user.id).then(data => {
      dispatch(setRecordAC(data))
    })
    fetchCategory().then(data => {
      dispatch(setCategoryAC(data))
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner/>
  }

  return (
    <div>
      <div className={style.head}>Отчет о расходах и доходах</div>
      {categories.map(c => (
          <AnalCards category={c} key={c.id}/>
        )
      )}
    </div>
  );
};

export default Analytics;