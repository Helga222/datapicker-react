
import styles from "./TimeVidget.module.css";
import { TimeString } from "../../types";

import FilledInput from "@mui/material/FilledInput";
import { useState } from "react";
import { TimeInteractive } from "../TimeInteractive/TimeInteractive";



export const TimeVidget = ( {since,time,unit}:TimeString) => {
  const[visible,setVisible] = useState(true);

  return (
    <div>
      {visible ?
      <FilledInput
            readOnly
            disableUnderline={true}
            sx={{ input: { cursor: 'pointer' } }}
            fullWidth
            id="fullWidth"
            inputProps={{ style: { textAlign: "center" } }}
            value={`${since} ${time} ${unit}`}
            hiddenLabel
            size="small"
            onClick={()=>setVisible(!visible)}
          />
      :
      <TimeInteractive since={since} time={time} unit={unit} />
      }
    </div>
    
  );
};
