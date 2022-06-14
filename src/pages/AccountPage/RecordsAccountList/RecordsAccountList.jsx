import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import RecordCard from '../../../components/RecordCard/RecordCard';
import style from './RecordsAccountList.module.css'

const RecordsAccountList = () => {
  const records = useSelector(state => state.record.filterRecords)

  return (
    <div>
      <div>
        {records.map(r =>
          {
            if (r.id > 5) {
              return  <RecordCard record={r} key={r.id}/>
            }
          }
        )}
      </div>
      <div>
        {records.map(r =>
          {
            if (r.id <= 5 && r.id > 2) {
              return  <RecordCard record={r} key={r.id}/>
            }
          }
        )}
      </div>
      <div>
        {records.map(r =>
          {
            if (r.id <= 2) {
              return  <RecordCard record={r} key={r.id}/>
            }
          }
        )}
      </div>
    </div>
  );
};

export default RecordsAccountList;