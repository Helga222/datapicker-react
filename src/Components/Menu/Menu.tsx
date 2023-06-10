import Link from "@mui/material/Link";
import styles from "./Menu.module.css";
import { useState } from "react";

export const Menu = (props:any) => {

  const [timeString,setTimeString] = useState({
    since:'за последние',
    time:0,
    unit:'секунды'
  })

  const handleCahngeSelect = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
    event.preventDefault();
    let inputs = { [event.target.name]: event.target.value };
    setTimeString({ ...timeString, ...inputs }); 
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
    event.stopPropagation();
    props.onHandleClick(timeString);
  }

  return (
    <div className={styles.content}>
      <div className={`${styles.item} ${styles.menu__select}`}>
        Quick Select
        <div className={styles.menu__select__content}>
          <select name="since" onChange={handleCahngeSelect}
            className={`${styles.menu__select__input} ${styles.menu__select__item}`}
          >
            <option value="За последние">За последние</option>
            <option value="Начиная с">Начиная с</option>
          </select>
          <input name="time" onChange={handleCahngeSelect}
            className={`${styles.menu__select__number} ${styles.menu__select__item}`}
            type="number"
          />
          <select name="unit" onChange={handleCahngeSelect}
            className={`${styles.menu__select__input} ${styles.menu__select__item}`}
          >
            <option value="секунд">секунды</option>
            <option value="минут">минуты</option>
            <option value="часов">часы</option>
            <option value="дней">дни</option>
            <option value="недель">недели</option>
          </select>
          <button
            className={`${styles.menu__select__button} ${styles.menu__select__item}`} onClick={handleClick}
          >
            
            Применить
          </button>
        </div>
      </div>
      <hr className={styles.menu__hr}></hr>
      <div className={`${styles.item} ${styles.menu__common}`}>
        Commonly used
        <div className={`${styles.menu__grid}`}>
          <div>Сегодня</div>
          <div>Эта неделя</div>
          <div>Этот месяц</div>
          <div>Этот год</div>
          <div>Вчера</div>
          <div>Неделя до даты</div>
          <div>Месяц до даты</div>
          <div>Год даты</div>
        </div>
      </div>
      <hr className={styles.menu__hr}></hr>
      <div className={`${styles.item} ${styles.menu__recently}`}>
        Recently used date ranges
        <div className={styles.menu__recently__content}>
          <div className={styles.menu__recently__item}>
            <Link underline="hover" href="#">Link</Link>
          </div>
          <div className={styles.menu__recently__item}>
            <Link href="asfasfasf" underline="hover">Liasd asasfnk</Link>
          </div>
          <div className={styles.menu__recently__item}>
          <Link href="asfasfasf" underline="hover">Liasasdadank</Link>
          </div>
          <div className={styles.menu__recently__item}>
          <Link href="asfasfasf" underline="hover">Link</Link>
          </div>
          <div className={styles.menu__recently__item}>
          <Link href="asfasfasf" underline="hover">Liasdasdank</Link>
          </div>
          <div className={styles.menu__recently__item}>
          <Link href="asfasfasf" underline="hover">Liasdasdank</Link>
          </div>
        </div>
      </div>
      <hr className={styles.menu__hr}></hr>
      <div className={`${styles.item} ${styles.menu__refresh}`}>
        Refresh every
        <div className={styles.menu__refresh__content}>
        <input
            className={`${styles.menu__select__number} ${styles.menu__select__item}`}
            type="number"
          />
          <select
            className={`${styles.menu__select__input} ${styles.menu__select__item}`}
          >
            <option value="">Секунды</option>
            <option value="">Минуты</option>
            <option value="">Часы</option>
          </select>
          <button
            className={`${styles.menu__select__button} ${styles.menu__select__item}`}
          >
            Начать
          </button>
        </div>
      </div>
    </div>
  );
};
