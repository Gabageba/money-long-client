import React from 'react';
import style from './RecordPanel.module.css'
import {useSelector} from 'react-redux';
import RecPanCard from './RecPanCard/RecPanCard';

const RecordPanel = () => {
  const records = useSelector(state => state.record.records)
  return (
    <div className={style.panel}>
      <div>
        <div className={style.line}/>
        <div className={style.text}>Последние записи</div>
      </div>
      <div style={{marginTop: '50px'}}>
        {records.map(r => (
            <RecPanCard rec={r} key={r.id}/>
          )
        )}
      </div>
    </div>
  );
};

export default RecordPanel;