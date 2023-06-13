import TextField from "@mui/material/TextField";
import { DPType, TimeString } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./TimeInteractive.module.css";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import { DateMenu } from "../DateMenu/DateMenu";
import { Dayjs } from "dayjs";
import { useStore } from "react-redux/es/hooks/useStore";
export const TimeInteractive = (dateString:TimeString) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [curDate,setCurDate] = useState<Date>();
  const curState = useStore<DPType>().getState();
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (date:Date)=>{
    setCurDate(date);
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className={styles.content}>
      <div className={styles.ti__item}>
        <TextField
          aria-describedby={id}
          size="small"
          fullWidth
          inputProps={{ style: { textAlign: "right" } }}
          value={`${curDate?.toLocaleDateString()} ${curDate?.toLocaleTimeString()}`}
          hiddenLabel
          name="dateStart"
          variant="filled"
          onClick={handleClick}
        />
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
            <DateMenu onDateChange={handleChange}/>
          </div>
        </Popover>
      </div>
      <div className={styles.ti__icon}>
        <ArrowForwardIcon fontSize="medium" />
      </div>
      <div className={styles.ti__item}>
        <TextField
          aria-describedby={id}
          size="small"
          fullWidth
          hiddenLabel
          name="dateEnd"
          variant="filled"
          onClick={handleClick}
          value={`${curDate?.toLocaleDateString()} ${curDate?.toLocaleTimeString()}`}
        />
      </div>
    </div>
  );
};
