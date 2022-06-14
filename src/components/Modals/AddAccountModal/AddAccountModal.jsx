import React, {useEffect, useRef, useState} from 'react';
import Modal from '../Modal/Modal';
import style from './AddAccountModal.module.css'
import {useDispatch, useSelector} from 'react-redux';
import AccountTypes from './AccountTypes/AccountTypes';
import {createAccount, updateAccount} from '../../../http/accountAPI';
import {setAccountsAC} from '../../../redux/accountReducer';

const AddAccountModal = ({active, setActive, isEdit, name, color, type, sum, accountId, filter}) => {

  const user = useSelector(state => state.user.user)
  const colors = useSelector(state => state.account.colors)
  const types = useSelector(state => state.accountType.accountTypes)
  const [selectedColor, setSelectedColor] = useState( {id: 1, color: '#26C6DA'},)
  const [selectedType, setSelectedType] = useState('')
  const [dropDownStyle, setDropDownStyle] = useState(style.colorBlock)
  const [selectedName, setSelectedName] = useState('')
  const [selectedSum, setSelectedSum] = useState(0)
  const [loginError, setLoginError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const wrapperRef = useRef(null);
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const clear = () => {
    setSelectedColor({id: 1, color: '#26C6DA'})
    setSelectedType(types[0])
    setSelectedName('')
    setSelectedSum(0)
    setLoginError(false)
  }

  useEffect(() => {
    if (active === true) {
      if (isEdit) {
        setSelectedName(name)
        setSelectedType(type)
        colors.map(c => {
          if (c.color === color){
            setSelectedColor(c)
          }
        })
        types.map(t => {
          if (t.id === type.id) {
            setSelectedType(t)
          }
        })
        setSelectedSum(sum)
      } else {
        setSelectedType(types[0])
      }
    }
  }, [active])

  const onSaveClick = () => {
    if (selectedName === '' || selectedSum === '') {
      setLoginError(true)
      setErrorText('Пожалуйста заполните все поля')
    } else {
      if (isEdit) {
        updateAccount(accountId, selectedName, selectedColor.color, selectedSum, selectedType.id, user.id).then(data => {
          dispatch(setAccountsAC(data))
          setActive(false)
        })
      } else {
        createAccount(selectedName, selectedColor.color, user.id, selectedSum, selectedType.id , filter).then(data => {
          dispatch(setAccountsAC(data))
          setActive(false)
          clear()
        })
      }
    }
  }

  const handleClickOutside = event => {
    const {current: wrap} = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDropDownStyle(style.colorBlock)
    }
  };

  return (
    <Modal active={active} setActive={setActive} size={'small'} modalName={isEdit ? 'Изменить счет' :'Добавить счет'} clear={isEdit ? null : clear}>
      <div className={style.modal}>
        <div className={style.form}>
          <div style={{display: 'flex', width: '100%', marginTop: '20px'}}>
            <div style={{width: "100%"}}>
              <div className={style.head}>Название</div>
              <input className={style.input} value={selectedName} type="text" placeholder={'Название счета'} onChange={e => setSelectedName(e.target.value)}/>
            </div>
            <div style={{marginLeft: '34px'}}>
              <div className={style.head}>Цвет</div>
              <div ref={wrapperRef}>
                <div className={style.colorInput} onClick={() => {
                  dropDownStyle === style.colorBlock ?
                  setDropDownStyle(style.colorBlockActive) : setDropDownStyle(style.colorBlock)
                }}>
                  <div className={style.selectedColor} style={{backgroundColor: selectedColor.color}}></div>
                  <span className="material-icons-round">arrow_drop_down</span>
                </div>
                <div className={dropDownStyle}>
                  {colors.map(color => (
                      <div className={style.color} style={{backgroundColor: color.color}} key={color.id} onClick={() => {
                        setSelectedColor(color)
                        setDropDownStyle(style.colorBlock)
                      }}></div>
                    )
                  )}
                </div>
              </div>
            </div>

          </div>
          <AccountTypes type={selectedType} setType={setSelectedType}/>
          <div style={{marginTop: '20px'}}>
            <div className={style.head}>Сумма</div>
            <input className={style.input} value={selectedSum} onChange={e => setSelectedSum(e.target.value)} type="number"/>
          </div>

        </div>
        {loginError ? <div className={style.errorText}>{errorText}</div> : null}

        <button className={style.saveButton} onClick={onSaveClick}>{isEdit ? 'Изменить' : 'Сохранить'}</button>
      </div>
    </Modal>
  );
};

export default AddAccountModal;