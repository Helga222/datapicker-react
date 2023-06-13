import { useRef, useState } from "react";
import styles from "./DataPicker.module.css";
import { Menu } from "../Menu/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dialog from "@mui/material/Dialog";
import { DPType, DateType, TimeString } from "../../types";
import { TimeVidget } from "../TimeVidget/TimeVidget";
import dayjs, { Dayjs } from "dayjs";
export const DataPicker = () => {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);
  const [timeString, setTimeString] = useState<TimeString>({
    since: "за последние",
    time: 0,
    unit: "секунды",
  });
  const now = new Date().toISOString(); 
  const [curDate,setCurDate] = useState<DPType>({
    dateStart: now,
    dateEnd: now,
    editedDate: DateType.StartDate,
  })

  const handleDateChange = (date:Date,type:DateType)=>{
    const dateString = date.toISOString();
    if (type===DateType.StartDate){
      setCurDate({...curDate,dateStart:dateString})
    }
    else setCurDate({...curDate,dateEnd:dateString});
    
  }


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
              visible ? styles.dp__popup_visible : styles.dp__popup_invisible
            }`}
          >
            <Dialog open={visible} ref={modalRef}>
              <Menu onHandleClick={handleApplyDate} />
            </Dialog>
          </div>
        </button>
        <div className={`${styles.dp__item} ${styles.dp__date}`}>
          <TimeVidget timeString={timeString}  curDate={curDate} onDateChange={handleDateChange}/>
        </div>
        <button className={`${styles.dp__item} ${styles.dp__refreshButton}`}>
          3
        </button>
      </div>
    </div>
  );
};
function getState() {
  throw new Error("Function not implemented.");
}

