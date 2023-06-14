import { useRef, useState } from "react";
import styles from "./DataPicker.module.css";
import { Menu } from "../Menu/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { DPRange, DPType, DateType, LinkType, TimeString } from "../../types";
import { TimeVidget } from "../TimeVidget/TimeVidget";
import dayjs, { Dayjs } from "dayjs";
import Popover from "@mui/material/Popover";
import {
  calcDate,
  calcMonthToDate,
  calcThisDay,
  calcThisMonth,
  calcThisWeek,
  calcThisYear,
  calcWeekToDate,
  calcYearToDate,
  calcYesterday,
} from "../../utils";

interface IDataPicker {
  onChange: (range: DPRange) => void;
}
export const DataPicker = (props: IDataPicker) => {
  const [relTimeVisible, setRelTimeVisible] = useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [timeString, setTimeString] = useState<TimeString>({
    since: "Last",
    time: 0,
    unit: "second",
  });
  const now = new Date();

  const [curDate, setCurDate] = useState<DPType>({
    dateStart: now,
    dateEnd: now,
  });

  const handleDateChange = (date: Date, type: DateType) => {
    let range: DPRange;

    if (type === DateType.StartDate) {
      setCurDate({ ...curDate, dateStart: date });
      range = { startDate: dayjs(date), endDate: dayjs(curDate.dateEnd) };
    } else {
      setCurDate({ ...curDate, dateEnd: date });
      range = { startDate: dayjs(curDate.dateStart), endDate: dayjs(date) };
    }
    props.onChange(range);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else setAnchorEl(e.currentTarget);
  };

  const handleApplyDate = (time: TimeString) => {
    !relTimeVisible && setRelTimeVisible((prev) => !prev);
    setTimeString(time);
    const range = calcDate(time);
    props.onChange(range);
    setCurDate({
      ...curDate,
      dateStart: range.startDate.toDate(),
      dateEnd: range.endDate.toDate(),
    });
    handleClose();
  };

  const handleLinkClick = (range: LinkType) => {
    let date: DPRange;
    switch (range) {
      case "yesterday":
        date = calcYesterday();
        break;
      case "today":
        date = calcThisDay();
        break;
      case "this week":
        date = calcThisWeek();
        break;
      case "this month":
        date = calcThisMonth();
        break;
      case "this year":
        date = calcThisYear();
        break;
      case "week to date":
        date = calcWeekToDate();
        break;
      case "month to date":
        date = calcMonthToDate();
        break;
      case "year to date":
        date = calcYearToDate();
        break;
      default:
        date = calcThisDay();
        break;
    }

    props.onChange(date);
    setCurDate({
      ...curDate,
      dateStart: date.startDate.toDate(),
      dateEnd: date.endDate.toDate(),
    });
    relTimeVisible && setRelTimeVisible((prev) => !prev);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            <Menu
              onHandleLink={handleLinkClick}
              onHandleClick={handleApplyDate}
              timeString={timeString}
            />
          </div>
        </Popover>

        <div className={`${styles.dp__item} ${styles.dp__date}`}>
          <TimeVidget
            relateTimeVisible={relTimeVisible}
            timeString={timeString}
            curDate={curDate}
            onDateChange={handleDateChange}
          />
        </div>
        <button
          className={`${styles.dp__item} ${styles.dp__refreshButton}`}
        ></button>
      </div>
    </div>
  );
};

