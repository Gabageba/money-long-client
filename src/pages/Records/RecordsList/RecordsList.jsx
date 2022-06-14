import React from 'react';
import {useSelector} from 'react-redux';
import RecordCard from '../../../components/RecordCard/RecordCard';
import style from './RecordList.module.css'

const RecordsList = ({filter}) => {
  const records = useSelector(state => state.record.records)
  return (
    <div>
      <div>
        <div className={style.date}>Сегодня</div>
        {records.map(r =>
          {
            if (r.id > 27) {
              return  <RecordCard record={r} key={r.id}/>
            }
          }
        )}
      </div>
      {filter === 'Все время' || filter === 'Последние 30 дней' ?
        <div>
          <div>
            <div>
              <div className={style.date}>Вчера</div>
              {records.map(r =>
                {
                  if (r.id <= 27 && r.id > 25) {
                    return  <RecordCard record={r} key={r.id}/>
                  }
                }
              )}
            </div>
            <div>
              <div className={style.date}>13 июня</div>
              {records.map(r =>
                {
                  if (r.id <= 25 && r.id > 21) {
                    return  <RecordCard record={r} key={r.id}/>
                  }
                }
              )}
            </div>
            <div className={style.date}>12 июня</div>
            {records.map(r =>
              {
                if (r.id <= 21 && r.id > 18) {
                  return  <RecordCard record={r} key={r.id}/>
                }
              }
            )}
          </div>
          <div>
            <div className={style.date}>11 июня</div>
            {records.map(r =>
              {
                if (r.id <= 18 && r.id > 15) {
                  return  <RecordCard record={r} key={r.id}/>
                }
              }
            )}
          </div>
          <div>
            <div className={style.date}>7 июня</div>
            {records.map(r =>
              {
                if (r.id <= 15 && r.id > 12) {
                  return  <RecordCard record={r} key={r.id}/>
                }
              }
            )}
          </div>
          <div>
            <div className={style.date}>3 июня</div>
            {records.map(r =>
              {
                if (r.id <= 12 && r.id > 7) {
                  return  <RecordCard record={r} key={r.id}/>
                }
              }
            )}
          </div>
        </div>
        :null}
      {filter === 'Все время' ?
        <div>
          <div>
            <div className={style.date}>6 мая</div>
            {records.map(r =>
              {
                if (r.id <= 7 && r.id > 5) {
                  return  <RecordCard record={r} key={r.id}/>
                }
              }
            )}
          </div>
          <div>
            <div className={style.date}>2 мая</div>
            {records.map(r =>
              {
                if (r.id <= 5) {
                  return  <RecordCard record={r} key={r.id}/>
                }
              }
            )}
          </div>
        </div>
        : null}
    </div>
  );
};

export default RecordsList;