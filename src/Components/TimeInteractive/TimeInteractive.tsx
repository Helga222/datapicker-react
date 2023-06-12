import TextField from "@mui/material/TextField";
import { TimeString } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./TimeInteractive.module.css";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import { DateMenu } from "../DateMenu/DateMenu";
export const TimeInteractive = ({ since, time, unit }: TimeString) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
          value={`${since} ${time} ${unit}`}
          hiddenLabel
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
            <DateMenu />
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
          value="now"
          hiddenLabel
          variant="filled"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
