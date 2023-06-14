import { useRef, useState } from "react";
import styles from "./DataPicker.module.css";
import { Menu } from "../Menu/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dialog from "@mui/material/Dialog";
import { DPRange, DPType, DateType, LinkType, TimeString } from "../../types";
import { TimeVidget } from "../TimeVidget/TimeVidget";
import dayjs, { Dayjs } from "dayjs";
import Popover from "@mui/material/Popover";
import { ISOStrToDPRange, calcDate, calcThisDay, calcYesterday } from "../../utils";

interface IDataPicker {
  onChange: (range: DPRange) => void;
}
export const DataPicker = (props: IDataPicker) => {

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [timeString, setTimeString] = useState<TimeString>({
    since: "Last",
    time: 0,
    unit: "second",
  });
  const now = new Date().toISOString();
  const [curDate, setCurDate] = useState<DPType>({
    dateStart: now,
    dateEnd: now,
    editedDate: DateType.StartDate,
  });

  const handleDateChange = (date: Date, type: DateType) => {
    let range:DPRange;
    const dateString = date.toISOString();
    if (type === DateType.StartDate) {
      setCurDate({ ...curDate, dateStart: dateString });
      range = {startDate:dayjs(date),endDate:ISOStrToDPRange(curDate.dateEnd)};

    } else {
      setCurDate({ ...curDate, dateEnd: dateString });
      range = {startDate:ISOStrToDPRange(curDate.dateStart),endDate:dayjs(date)};
    };
    props.onChange(range);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else setAnchorEl(e.currentTarget);
  };

  const handleApplyDate = (time: TimeString) => {
    setTimeString(time);
    const range = calcDate(time);
    props.onChange(range);

    handleClose();
  };

  const handleLinkClick = (range: LinkType) => {
    let date;
    switch (range) {
      case "yesterday":
        date = calcYesterday();
        return;

      case "today":
        date = calcThisDay();
        return date;
      default:
        date = calcThisDay();
        return date;
    }

    props.onChange(date);
    //setTimeString();

    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (date: Date) => {
    //setCurDate(date);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
        </button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div>
            {" "}
            <Menu onHandleLink={handleLinkClick} onHandleClick={handleApplyDate} timeString={timeString} />
          </div>
        </Popover>

        <div className={`${styles.dp__item} ${styles.dp__date}`}>
          <TimeVidget
            timeString={timeString}
            curDate={curDate}
            onDateChange={handleDateChange}
          />
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
