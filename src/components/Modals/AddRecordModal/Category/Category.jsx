import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import style from '../AddRecordModal.module.css';
import styles from './Category.module.css';

const Category = ({setCategory, category}) => {
  const categories = useSelector(state => state.category.categories)
  const [display, setDisplay] = useState(false)
  useEffect(() => {
    setCategory(categories[0])
  }, [])

  return (
    <div className={styles.category}>
      <div className={styles.head}>Категория</div>
      <div className={display ? style.inputActive : style.input} onClick={() => setDisplay(!display)}>
        <div className={style.arrow}>
          <span className="material-icons-round">arrow_drop_down</span>
        </div>
        <div className={style.icon} style={{backgroundColor: category.color}}>
          <span className="material-icons-round">{category.icon}</span>
        </div>
        <span className={style.name}>{category.name}</span>
      </div>
      {
        display && (
          <div className={styles.options}>
            {categories.map(a => (
              <div key={a.id} className={a.id === category.id ? style.typeBlockActive : style.typeBlock}
                   onClick={() => {
                     setCategory(a)
                     setDisplay(false)
                   }}>
                <div key={a.id} className={style.icon} style={{backgroundColor: a.color}}>
                  <span className="material-icons-round">{a.icon}</span>
                </div>
                <span className={style.name}>{a.name}</span>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default Category;