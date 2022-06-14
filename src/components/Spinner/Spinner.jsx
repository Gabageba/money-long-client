import React from 'react';
import style from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={style.spinner}>
      <div className={style.anim}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

  );
};

export default Spinner;