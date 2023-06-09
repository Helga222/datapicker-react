import { useRef, useState } from "react";
import styles from "./DataPicker.module.css";
import { Menu } from "../Menu/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { FilledInput } from "@mui/material";
import { TimeString } from "../../types";
export const DataPicker = () => {
  const [visible, setVisible] = useState(true);
  const modalRef = useRef(null);
  const [timeString, setTimeString] = useState({
    since: "за последние",
    time: 0,
    unit: "секунды",
  });

  const handleClick = (e: any) => {
    e.stopPropagation();
    setVisible(!visible);
    modalRef.onClose();
  };

  const handleApplyDate = (time: TimeString) => {
    setTimeString(time);
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
          <Dialog open={visible} ref={modalRef} onClick={(e:any)=>e.stopPropagation()}> 
            <Menu onHandleClick={handleApplyDate} />
          </Dialog>
          </div>
        </button>
        <div className={`${styles.dp__item} ${styles.dp__date}`}>
          <FilledInput
            readOnly
            disableUnderline={true}
            className={styles.dp__textInput}
            fullWidth
            id="fullWidth"
            value={`${timeString.since} ${timeString.time} ${timeString.unit}`}
            hiddenLabel
            size="small"
          />
        </div>
        <button className={`${styles.dp__item} ${styles.dp__refreshButton}`}>
          3
        </button>
      </div>
    </div>
  );
};
