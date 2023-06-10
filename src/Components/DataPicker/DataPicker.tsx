import { useRef, useState } from "react";
import styles from "./DataPicker.module.css";
import { Menu } from "../Menu/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dialog from "@mui/material/Dialog";
import { TimeString } from "../../types";
import { TimeVidget } from "../TimeVidget/TimeVidget";
export const DataPicker = () => {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);
  const [timeString, setTimeString] = useState({
    since: "за последние",
    time: 0,
    unit: "секунды",
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //e.stopPropagation();
    setVisible(true);
  };

  const handleApplyDate = (time: TimeString) => {
    setTimeString(time);
    setVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dp__content}>
        <button
          className={`${styles.dp__item} ${styles.dp__menuButton}`}
          onClick={handleClick}
        >
          <div className={styles.dp__icons}>
            <CalendarMonthIcon />
            <KeyboardArrowDownIcon />
          </div>

          <div
            className={`${styles.dp__popup} ${
              visible ? styles.dp__popup_visible : styles.dp__popup_visible
            }`}
          >
            <Dialog open={visible} ref={modalRef}>
              <Menu onHandleClick={handleApplyDate} />
            </Dialog>
          </div>
        </button>
        <div className={`${styles.dp__item} ${styles.dp__date}`}>
          <TimeVidget
            since={timeString.since}
            time={timeString.time}
            unit={timeString.unit}
          />
        </div>
        <button className={`${styles.dp__item} ${styles.dp__refreshButton}`}>
          3
        </button>
      </div>
    </div>
  );
};
