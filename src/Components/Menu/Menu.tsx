import Link from "@mui/material/Link";
import styles from "./Menu.module.css";
import { useState } from "react";
import { DPRange, LinkType, TimeString } from "../../types";

interface IMenu {
  timeString:TimeString,
  onHandleClick:(time: TimeString) => void,
  onHandleLink:(message:LinkType)=>void
}
interface ILink {
  e:React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.MouseEvent<HTMLSpanElement>
}

export const Menu = (props:IMenu) => {

  const [timeString,setTimeString] = useState(props.timeString)

  const handleCahngeSelect = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>)=>{
    event.preventDefault();
    let inputs = { [event.target.name]: event.target.value };
    setTimeString({ ...timeString, ...inputs }); 
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
    event.stopPropagation();
    props.onHandleClick(timeString);
  }

  const handleDate = (e: ILink["e"],type:LinkType)=>{
    e.preventDefault();
    props.onHandleLink(type);
  }

  return (
    <div className={styles.content}>
      <div className={`${styles.item} ${styles.menu__select}`}>
        Quick Select
        <div className={styles.menu__select__content}>
          <select name="since" onChange={handleCahngeSelect}
            className={`${styles.menu__select__input} ${styles.menu__select__item}`}
          >
            <option value="Last">Last</option>
            <option value="Next">Next</option>
          </select>
          <input name="time" onChange={handleCahngeSelect} defaultValue={0}
            className={`${styles.menu__select__number} ${styles.menu__select__item}`}
            type="number"
          />
          <select name="unit" onChange={handleCahngeSelect}
            className={`${styles.menu__select__input} ${styles.menu__select__item}`}
          >
            <option value="second">seconds</option>
            <option value="minute">minutes</option>
            <option value="hour">hours</option>
            <option value="day">days</option>
            <option value="week">weeks</option>
          </select>
          <button
            className={`${styles.menu__select__button} ${styles.menu__select__item}`} onClick={handleClick}
          >            
            Apply
          </button>
        </div>
      </div>
      <hr className={styles.menu__hr}></hr>
      <div className={`${styles.item} ${styles.menu__common}`}>
        Commonly used
        <div className={`${styles.menu__grid}`}>
          <div><Link underline="hover"  href="#">Today</Link></div>
          <div><Link underline="hover" href="#">This week</Link></div>
          <div><Link underline="hover" href="#">This week</Link>calcYesterday</div>
          <div>Этот год</div>
          <div><Link underline="hover" href="#" onClick={(e)=>{handleDate(e,'yesterday')}} >Yesterday</Link></div>
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
