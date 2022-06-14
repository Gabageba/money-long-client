import React from 'react';
import Modal from '../Modal/Modal';
import Spinner from '../../Spinner/Spinner';
import style from './NeirosetWorkModal.module.css';

const NeirosetWorkModal = ({active, setActive, img}) => {


  return (
    <Modal active={active} setActive={setActive} modalName={'Обработка изображения'} isDel={false}>
      <div style={{display: 'flex', padding: "20px"}}>
        <div className={style.name}>{img.name}</div>
        <div className={style.spinner}>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

    </Modal>
  );
};

export default NeirosetWorkModal;