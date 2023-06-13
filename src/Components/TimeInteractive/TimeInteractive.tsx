import TextField from "@mui/material/TextField";
import { DPType, DateFunc, DateType,TimeString } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./TimeInteractive.module.css";
import { useEffect, useState } from "react";
import Popover from "@mui/material/Popover";
import { DateMenu } from "../DateMenu/DateMenu";
import { Dayjs } from "dayjs";
import { useStore } from "react-redux/es/hooks/useStore";
import { useDispatch, useSelector } from "react-redux";
import { setDateType } from "../../Redux/actions";
export const TimeInteractive = (props:{timeString: TimeString,curDate:DPType,onDateChange:DateFunc}) => {
  const [anchorElStart, setAnchorElStart] = useState<HTMLElement | null>(null);
  const [anchorElEnd, setAnchorElEnd] = useState<HTMLElement | null>(null);
  
  //const { getState } = useStore<DPType>();

  const [curDateStart, setCurDateStart] = useState(props.curDate.dateStart);
  const [curDateEnd, setCurDateEnd] = useState(props.curDate.dateEnd);
  const [dateType, setDateType] = useState(props.curDate.editedDate);

  useEffect(() => {
    setCurDateStart(props.curDate.dateStart);
    setCurDateEnd(props.curDate.dateEnd);
  }, [props.curDate]);

  const handleClickStart = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorElEnd(null);
    
    setAnchorElStart(event.currentTarget);
    setDateType(DateType.StartDate);
    //dispatch(setDateType(DateType.StartDate));
  };

  const handleClickEnd = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorElStart(null);
    setAnchorElEnd(event.currentTarget);
    setDateType(DateType.EndDate);
    //dispatch(setDateType(DateType.EndDate));
  };

  const handleClose = () => {
    setAnchorElStart(null);
    setAnchorElEnd(null);
  };

  const handleChange = (date: Date) => {
    //setCurDate(date);
  };

  const openStart = Boolean(anchorElStart);
  const openEnd = Boolean(anchorElEnd);
  const idStart = openStart ? "simple-popover" : undefined;
  const idEnd = openEnd ? "simple-popover" : undefined;
  return (
    <div className={styles.content}>
      <div className={styles.ti__item}>
        <TextField
          aria-describedby={idStart}
          size="small"
          fullWidth
          inputProps={{ style: { textAlign: "right" } }}
          value={`${curDateStart}`}
          hiddenLabel
          name="dateStart"
          variant="filled"
          onClick={handleClickStart}
        />
        <Popover
          id={idStart}
          open={openStart}
          anchorEl={anchorElStart}
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
            <DateMenu type={dateType} onDateChange={props.onDateChange}/>
          </div>
        </Popover>
      </div>
      <div className={styles.ti__icon}>
        <ArrowForwardIcon fontSize="medium" />
      </div>
      <div className={styles.ti__item}>
      <TextField
          aria-describedby={idEnd}
          size="small"
          fullWidth
          hiddenLabel
          name="dateEnd"
          variant="filled"
          onClick={handleClickEnd}
          value={`${curDateEnd}`}
        />
        <Popover
          id={idEnd}
          open={openEnd}
          anchorEl={anchorElEnd}
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
            <DateMenu type={dateType} onDateChange={props.onDateChange}/>
          </div>
        </Popover>
      </div>
    </div>
  );
};
