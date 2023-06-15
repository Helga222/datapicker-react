import TextField from "@mui/material/TextField";
import { DPType, DateFunc, DateType, TimeString } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./TimeInteractive.module.css";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import { DateMenu } from "../DateMenu/DateMenu";

export const TimeInteractive = (props: {
  timeString: TimeString;
  curDate: DPType;
  onDateChange: DateFunc;
}) => {
  const [anchorElStart, setAnchorElStart] = useState<HTMLElement | null>(null);
  const [anchorElEnd, setAnchorElEnd] = useState<HTMLElement | null>(null);

  const [dateType, setDateType] = useState(DateType.StartDate);

  const handleClickStart = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorElEnd(null);

    setAnchorElStart(event.currentTarget);
    setDateType(DateType.StartDate);
  };

  const handleClickEnd = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorElStart(null);
    setAnchorElEnd(event.currentTarget);
    setDateType(DateType.EndDate);
  };

  const handleClose = () => {
    setAnchorElStart(null);
    setAnchorElEnd(null);
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
          value={`${props.curDate.dateStart}`}
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
            <DateMenu
              timeString={props.timeString}
              type={dateType}
              curDate={props.curDate}
              onDateChange={props.onDateChange}
            />
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
          value={`${props.curDate.dateEnd}`}
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
            <DateMenu
              timeString={props.timeString}
              type={dateType}
              curDate={props.curDate}
              onDateChange={props.onDateChange}
            />
          </div>
        </Popover>
      </div>
    </div>
  );
};
