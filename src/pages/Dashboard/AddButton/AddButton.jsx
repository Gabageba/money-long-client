import React from 'react';
import style from './AddButton.module.css'

const AddButton = ({onClick}) => {
  return (
    <div className={style.addButton} onClick={() => onClick(true)}>
      <div className={style.buttonName}>+ Добавить счет</div>
    </div>
  );
};

export default AddButton;