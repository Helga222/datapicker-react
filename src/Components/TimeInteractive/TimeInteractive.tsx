import TextField from "@mui/material/TextField";
import { TimeString } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./TimeInteractive.module.css";
export const TimeInteractive = ({ since, time, unit }: TimeString) => {
  return (
    <div className={styles.content}>
      <div className={styles.ti__item}>
        <TextField
          size="small"
          fullWidth
          inputProps={{ style: { textAlign: "right" } }}
          value={`${since} ${time} ${unit}`}
          hiddenLabel
          variant="filled"
        />
      </div>
      <div className={styles.ti__icon}>
        <ArrowForwardIcon fontSize="medium" />
      </div>
      <div className={styles.ti__item}>
        <TextField
          size="small"
          fullWidth
          value="now"
          hiddenLabel
          variant="filled"
        />
      </div>
    </div>
  );
};
