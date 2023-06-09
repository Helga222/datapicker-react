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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { normalize } from "path";
export const DataPicker = () => {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);
  const [timeString, setTimeString] = useState({
    since: "за последние",
    time: 0,
    unit: "секунды",
  });

  const handleClick = (e: any) => {
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
          {/*<FilledInput
            readOnly
            disableUnderline={true}
            className={styles.dp__textInput}
            sx={{ input: { cursor: 'pointer' } }}
            fullWidth
            id="fullWidth"
            value={`${timeString.since} ${timeString.time} ${timeString.unit}`}
            hiddenLabel
            size="small"
          />*/}

          <div className={styles.dp__date__content}>
            <TextField
              size="small"
              fullWidth
              inputProps={{ style: { textAlign: "right" } }}
              value={`${timeString.since} ${timeString.time} ${timeString.unit}`}
              hiddenLabel
              variant="filled"
            />
          </div>
          <div className={styles.dp__icon}>

          <ArrowForwardIcon fontSize="medium"/>
          </div>
          <div className={styles.dp__date__content}>
            <TextField
              size="small"
              fullWidth
              value="now"
              hiddenLabel
              variant="filled"
            />
          </div>
        </div>
        <button className={`${styles.dp__item} ${styles.dp__refreshButton}`}>
          3
        </button>
      </div>
    </div>
  );
};
