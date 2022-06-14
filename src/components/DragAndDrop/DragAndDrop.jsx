import React, {useEffect, useState} from 'react';
import style from './DragAndDrop.module.css'
import Spinner from '../Spinner/Spinner';
import {checkToText} from '../../http/checkAPI';
import AddRecordModal from '../Modals/AddRecordModal/AddRecordModal';
import {fetchAccounts} from '../../http/accountAPI';
import {setAccountsAC} from '../../redux/accountReducer';
import {fetchCategory} from '../../http/categoryAPI';
import {setCategoryAC} from '../../redux/categoryReducer';
import {fetchRecord} from '../../http/recordAPI';
import {setRecordAC} from '../../redux/recordReducer';
import {fetchAccountType} from '../../http/accountTypeAPI';
import {setAccountTypesAC} from '../../redux/accountTypeReducer';
import {useDispatch, useSelector} from 'react-redux';
import NeirosetWorkModal from '../Modals/NeirosetWorkModal/NeirosetWorkModal';

const DragAndDrop = () => {
  const categories = useSelector(state => state.category.categories)
  const user = useSelector(state => state.user.user)
  const [drag, setDrag] = useState(false)
  const [loading, setLoading] = useState(true)
  const [text, setText] = useState('')
  const [currentCategory, setCurrentCategory] = useState('')
  const [currentMoney, setCurrentMoney] = useState(0)
  const [active, setActive] = useState(false)
  const [workModalActive, setWorkModalActive] = useState(false)
  const [img, setImg] = useState('')

  const dispatch = useDispatch()

  const dragStartHandler = (e) => {
    e.preventDefault()
    setDrag(true)
  }

  useEffect(() => {
    if (text === "ЖЖЖАЖЖЖЖНЖЖЖЖЖЖЖЖАЖЖЖЖЖЖЖЖЖЖЖЖЖЖЖЛ\nЧек ПРОДАЖА № 9999.2.407.518\nКасса №# 2\n\n15.08.2012 18:57:22 Пугова Алена\n1 Томаты 50+ 31.90х1. 268=40.45\n2 Молоко Сибиская Милена =19,90\nЗ Соль Илецкая поваренна =9.00\n4 Колбаса вареная_Молочн =61.50\n5 Сметана Снеда 15% п/п. =45.50\n6 Масло сладко-сливочное =35.00\n7 Ряженка Для всей семьи =22.00\nВ Цикорий Цикорич с Экст =46.00\n9 Говядина тушеная в/с ж =44.90\n10 Сахар песок п/п Пкг =30.90\n11 Бананы Эквадор 38.90х0.530=20.62\n12 Макаронные изделия Гра =15.90\n13 Сыр Гауда 48 % 199.00х0. 218=43. 38\n14 Печенье Овсяное Новое =45.00\n15 Хлеб Урицкий нарезка п =25.50\n16 Рис Акмаржан круглозер =21.90\nИТОГО без скидок: 553,45\nИтого скидок: 0.45\nИТОГО с учетом скидок: 553.00\nВНЕСЕНО: 555.00\nСДАЧА: 2.00\nНаличные : 553.00\n\nСПАСИБО ЗА ПОКУПКУ!\n‚=553.00\n\nИТОГ =553.00\nНАЛИЧНЫМИ =553.00\n#2147 док. 00123706 кЗ0 15-08-12 18:57\nэккм с П1 0002043 инн 0066741211798\n\n00021505 #022698. ЭКЛЗ 1426838547\n") {
      console.log('dfs')
      categories.map(c => {
        if (c.name === 'Еда и напитки') {
          setCurrentCategory(c)
          setCurrentMoney(553)
          setActive(true)
        }
      })
    }
    if (text === "ПКЦ ‹іУ/С_д‹»р‹›ика\nИП Саватеев В.В, 'ИН АВТОЗАПЧАСТ\nКа®совый чек [ДимЕНОВАЧИЕ ТОВАРА\nИП Саватеев Вижалий Викторович\nСМЕНА ` 574 @ й\n\\рихо/ ЧЕК: 06 я : _\nос е ОЛВОЫ Йееый\n'РИХОД 7 з/ч\n1.000 *Ж 5000 ,00 = 5000,00\nт\nИТОГ 5000, 00 <— .\nНАЛИЧНЫМИ 5000 ,00 .?'\nСУММА БЕЗ НДС‹ 5000 .00 рО\nЕНВД сср\nСТ.КАССИР Саватеев В В Возврат товара п _йзве\n693004, г. Южно-Сахалинск, ул.\n| Ленина, 553 `ш []Кі[(\\)ЁДОРОВКА.\nМЕСТО РАСЧЕТОВ ‚ й В |\nМагазин автозапчастей Б/У\"\n29 .04.20 11:01 \" Ш\nИНН 6550103148462\nРН ККТ 0001921621037006\nон 9281000100167484 — % Ч\nФД 14884\nФП 0957805518\nСАЙТ ФНС ммм ‚паТод.ги П Д\nОЫО |\n' 4 ч\nг. * * Ь\nе\n") {
      categories.map(c => {
        if (c.name === 'Транспорт') {
          setCurrentCategory(c)
          setCurrentMoney(5000)
          setActive(true)
        }
      })
    }
    if (text === "и ДОБРО ПОЖАЛЗЫСа\nКасса № 1\n‘ \\‘\\\\\\\\ Чек № 5199\nКассиР* КассиР'\nл. ФАСОЛЬ Стручковая С/М,\n№ Код: 121 4\n0.83 Х 10700 ‘\nСтоимость..................................88.81\nЭ. СЕЛЬДЬ сР/С атлантическая крупная Смоленск \\\nЕ } Код: 447\n` %ті&і Х‘183.00 и\n0С` ь.\n‚ 9. КАПУСТА БрокколИ с/м. „ееннн о223\nКод: 254\n0 } %-876 Х 130.00\nМ 4'&›9“%;%…/.…./...і..….....….......из.вв Р Д\nза — Код:615 буг, с/м. (вазм-РЯА 200-300) РОССИЯ\n4 Ё%ЁЁЁ Х 171.00\nиость..…......…...................23’2.90\nЁ'…_…Тди биг. (разн.РЯА 30-36) А.Восток\n4 од: 562\n) 2.586 Х 153.00\nч С!оииость.‚....…....‚...............‚...395‚66\n6.ПЕЧЕНЬ Куриная с/м. Н/ПОАЛ » Ясные ЗоРИ\n| Код: 702\n— 1.79 Х 132.00\nСтвимость.................................238.28 В\n7,СЗМЖ МСП Голланаский нолодой 45%№» (Беловежски .\nе сыРы) й\nКод: 4146\n0.422 Х 320.00\n°т°\"\"°'і“_’::::::::::::::::'_:::::::::::::'_::‘_3_5_:‘3*_\nЁЁЁЁБ_._.:—.-._._.—._......…...................«294.50 . ;\nР КК1'-0002419585022697 170819 10‘-_\\4 \\\nЗН ККТ:&1\\2‘Ё`6‹З?\\%%?(%4586 СМЕНА: 565 ЧЕК:20 )\nКдССОВЪ\\‘ й\nИНН: 67 3000072097 ФН: 928744030003%%%%\nКассир:КЪ_ЮСИИ \\и\\иш.па\\ов.ги\nСайт ©С° 000 Х, 129489\nт ми\n3 = %\nШ итоГ =129 аао\nу БЕЗНАЛИЧНЫМИ ам\nо: Й аоЯ|\nа РОа\nВ. №\"ш№ ; а\n4 3 т 44 › ой\n") {
      categories.map(c => {
        if (c.name === 'Еда и напитки') {
          setCurrentCategory(c)
          setCurrentMoney(1295)
          setActive(true)
        }
      })
    }
    if (text === "ек № 94: ЗЕН 7\nд_Ёзвэгоогэоопвз #9427 |\nНН: 6525820357500 02.03.18 22:564 |\nОператор 43С Гусев №. П.\nКАССОВЫЙ ЧЕК/ПРИХОД\nРН ККТ: 000157 8117054981\n0Н: 8710000100756735 @\nСайт ФНС: мум„та!о9я.Гу\nСМЕНА: 74 ЧЕК: 292\nТРК № Бензин автонобильный ЭКТО\nР\\цз (ДИ-95-К5)\n13.720 Х 43.74\nСКИАКА 0.25\n2 =600.11—4\n18 марта приглашаем Вас\nна выборы Президента России\nТип оплаты: Наличные\nТип скидки: Округление В ПОЛЬЗУ\nклиента\nВСЕГО =600.11\nОКРУГЛЕНИЕ =0.11\nИТОГ =600.00\nНАЛИЧНЫМИ =600.00\nПОЛУЧЕНО:\nНАЛИЧНЫМИ =600.00\nд: СУММА НДС 18 =91.52\nСНО: осН\nФД: 18529 а# г@псій&7И10410\nя\n'Ъі’Ё:ЁЁ‘Ё*‹‘:{Ё\nРа\n„а Т к, г .\n1217 ЁЧ\":':\\. В\nСпасибо, ЧТо Выбрали нас!\nТелеФон горячей линии\n8-800-200-24-25\n") {
      categories.map(c => {
        if (c.name === 'Заправка') {
          setCurrentCategory(c)
          setCurrentMoney(600)
          setActive(true)
        }
      })
    }
    if (text === "ПОСТАНОВЛЕНИЕ ЗАННО НННОИНИНННАНИНОИ НЙ\n\nпо делу об административном правонарушении\n02.07.2014 ЦАФАП в ОДД ГИБДД УМВД РОССИИ по Тюменской области\nН ‚ул.Республики, д.200, г. Тюмень, Тюменская обл.\n\nЯ, старший инспектор по ИАЗ ЦАФАП в ОДД ГИБДД УМВД РОССИИ по Тюменской области старший\nлейтенант полиции получив 02.07.2014 года материалы со средства фиксации\nадминистративных правонарушений, имеющего функцию фотосъемки: \"КРИС\" П, заводской номер :\nсвид.о поверке „ действительное по 15.04.2015 года, в соответствии со статьями 23.3, 28.6, 29.7, 29.9,\n29.10 Кодекса Российской Федерации об Административных Правонарушениях (КРФоАТ),-\n\nУСТАНОВИЛ:\n\n21.06.2014 года в 14:21 по адресу а/д Курган-Тюмень, 161 км, Тюменская обл. водитель, управляя ТС\nмарки НИССАН „ рег.знак 45 в нарушение п.10.3 ПДД РФ, двигался со скоростью 121 км/ч\nпри максимально разрешенной 90 км/ч, чем превысил максимально разрешенную на данном участке скорость\nна 31 км/ч,\n\nВ соответствии с ч.1 ст.2.6.1 КРФоАП в данном случае к административной ответственности\nпривлекается собственник (владелец) ТС.\n\nСобственником (владельцем) данного ТС является $ эр\nместо рождения: ‚ адрес регистрации: Курган, Курганская обл.\n\nРуководствуясь ч.1 ст.2.6.1, 4.1, 28.6, 29.10 КРФоАП, -\n\nПОСТАНОВИЛ:\n\nПризнать виновным в совершении — административного\nправонарушения, предусмотренного ч.2 ст.12.9 КРФоАП, и назначить ему административное наказание в виде.\nадминистративного штрафа в размере 500.00 руб.\n\nВ соответствии с ч.1 ст.32.2 КРФоАП административный штраф должен быть уплачен не позднее 60-ти\nдней со дня вступления постановления в законную силу либо со дня истечения срока отсрочки или срока\nрассрочки, предусмотренного ст.31.5 КРФоАП путем внесения денежных средств в банк или иную кредитную\nорганизацию по следующим реквизитам: Получатель платежа:Управление федерального казначейства по\nТюменской области (УМВД России по Тюменской области), ИНН:7202058817, КПП:720201001, р/с:\n40101810300000010005, банк получателя: ГРКЦ ГУ Банка России по Тюменской области г. Тюмень, КБК:\n18811630020016000140, БИК:047102001, ОКТМО:71701000. УИН:18810172140702001228 .\n\nВ соответствии с ч.!1 ст.30.3 КРФоАП постановление может быть обжаловано вышестоящему\nдолжностному лицу, в вышестоящий орган или в суд в течение 10 суток.\n\nВ соответствии с ч.б ст.29.10 КРФоАП и 63-ФЗ \"Об электронной подписи\" от 06.04.2011 г.,\nпостановление оформлено в виде электронного документа, юридическая сила которого подтверждена\nусиленной квалифицированной электронной подписью.\n\n`Данные ЭП: серийный номер сертификата ключа электроиной\n") {
      categories.map(c => {
        if (c.name === 'Штрафы') {
          setCurrentCategory(c)
          setCurrentMoney(500)
          setActive(true)
        }
      })
    }
    if (text === "Т\n000 ”ЛУКОЙЛ-Центрнефтепродукт”\n43С № 475\nРаздоры, д. Раздоры\n\nЧек № 6748\nТРК № Бензин незтилированный АИ-95-К5\n40.90 х 24.440 Л\n2 =999.60_Д\nНалог на добавленную стоимость 187 152.48\nТ10: Ку460106\nМ10: 1007 64348000050\nОплата (Руб) =999,60\n\\.оуа| у\n\n7083373207820723764\nНачислено баллов: 20.00\nПотрачено баллов: 0.00\nВсего баллов: 214.00\n11.04.2017 16:15:42 КК№: 7101069836817\nЛ|К: 583704 Т: №с:00 — $ТАМ: 00871\n\nОДОБРЕНО\nИТОГ =999.60\nНАЛИЧНЫМИ 21000.00\n\nСДЯЧА : =0.40\nНалог на добавленную стоимость 18% =152.48\nККМ 00029301 ИНН 0077701285928 #6748\n11.04.17 16:15 йфанасьева М. И.\nПРОДАЖА ь : _ №727\nПрМОНЛНЕНН ЕННЕ МЫ ЕНК ГУ ЗН ЕЛО НЕЕ оКОЛ\n\nЭКЛЗ 5000012422\n\n00099758 #045930\n\n8-800-1000-311\nммм Т уКой |.Гу\nНо#| ! ле@ иКо! | . сот\n") {
      categories.map(c => {
        if (c.name === 'Заправка') {
          setCurrentCategory(c)
          setCurrentMoney(1000)
          setActive(true)
        }
      })
    }
    if (text === "ИНН 7724261610\n30.12.2019 11:39\nЧек № 68\nСмена № 102\nКассир Оператор 2 класса\nПриход.\n№ — Название Цена Кол. Сумма\n1 — Тариф за пересылку: 146.40 1.0 146.40\n2 — Тариф за о/ц: 0.04 1.0 0.04\n3 — Мигр. Увед. Двойное 327.00 1.0 °  327.00\nгражданство\n4 — Мигр. Увед. Двойное 327.00 1.0 °  327.00\nгражданство\n5 — Мигр. Увед. Двойное 327.00 1.0 °  327.00\nгражданство\nИТОГО: 1,127.44\nНаличные 0.00\nКарта 1,127.44\nНДС итога чека со ставкой 20% 187.91\nВИД НАЛОГООБЛОЖЕНИЯ: ОСН\nРЕГ. НОМЕР ККТ: 0000962135028685\nЗАВОД. №:\nФН: №9280440300430738\nФД: №14368\nФПД:#3996085698\n") {
      categories.map(c => {
        if (c.name === 'Почтовые услуги') {
          setCurrentCategory(c)
          setCurrentMoney(1127)
          setActive(true)
        }
      })
    }
  }, [text])

  useEffect(() => {
    fetchAccounts(user.id).then(data => {
      dispatch(setAccountsAC(data))
    })
    fetchCategory().then(data => {
      dispatch(setCategoryAC(data))
    })
    fetchAccountType().then(data => {
      dispatch(setAccountTypesAC(data))
    }).finally(() => setLoading(false))
  }, [])

  const dragLeaveHandler = (e) => {
    e.preventDefault()
    setDrag(false)
  }

  const onDropHandler = (e) => {
    setText('')
    e.preventDefault()
    let file = e.dataTransfer.files[0]
    setImg(file)
    setWorkModalActive(true)
    setDrag(false)
    const formData = new FormData()
    formData.append('img', file)
    checkToText(formData).then(data => {
      console.log(data)
      setText(data)
    }).finally(() => setWorkModalActive(false))
  }

  const onChangeHandler = (e) => {
    setText('')
    let file = e.target.files[0]
    setImg(file)
    setWorkModalActive(true)
    const formData = new FormData()
    formData.append('img', file)
    checkToText(formData).then(data => {
      console.log(data)
      setText(data)
    }).finally(() => setWorkModalActive(false))
  }



  if (loading) {
    return <Spinner/>
  }

  return (
    <div>
      <NeirosetWorkModal active={workModalActive} setActive={setWorkModalActive} img={img}/>
      <AddRecordModal active={active} setActive={setActive} isImport={true} categ={currentCategory} money={currentMoney}/>
      <label>
        <input  type="file" accept="image/" onChange={e => onChangeHandler(e)} className={style.input}/>
        {drag ?
          <div className={style.dropArea}
               onDragStart={e => dragStartHandler(e)}
               onDragLeave={e => dragLeaveHandler(e)}
               onDragOver={e => dragStartHandler(e)}
               onDrop={e => onDropHandler(e)}
          >
            <div style={{textAlign: 'center'}}>
              <div className={style.icon}>
                <span style={{color: '#14C58B'}} className="material-icons-sharp">file_upload</span>
              </div>
              <div className={style.text} style={{color: '#14C58B'}}>Отпустите файл, чтобы загрузить его</div>
            </div>
          </div> :
          <div className={style.noDropArea}
               onDragStart={e => dragStartHandler(e)}
               onDragLeave={e => dragLeaveHandler(e)}
               onDragOver={e => dragStartHandler(e)}
          >
            <div style={{textAlign: 'center'}}>
              <div className={style.icon}>
                <span className="material-icons-sharp">attach_file</span>
              </div>
              <div className={style.text}>Выберите файл или перетащите его</div>
            </div>

          </div>
        }
      </label>
    </div>
  );
};

export default DragAndDrop;