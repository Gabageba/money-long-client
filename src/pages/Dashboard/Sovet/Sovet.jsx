import React from 'react';
import style from './Sovet.module.css'

const Sovet = ({img, title, text}) => {
  return (
    <div className={style.sovet}>
      <img src={img} alt="" className={style.image}/>
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.text}>{text}</div>
      </div>
    </div>
  );
};

export default Sovet;