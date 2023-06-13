
import styles from "./TimeVidget.module.css";
import { DPType, DateFunc, DateType,TimeString } from "../../types";

import FilledInput from "@mui/material/FilledInput";
import { useState } from "react";
import { TimeInteractive } from "../TimeInteractive/TimeInteractive";



export const TimeVidget = ( props:{timeString:TimeString,curDate:DPType,onDateChange:DateFunc}) => {
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
            value={`${props.timeString.since} ${props.timeString.time} ${props.timeString.unit}`}
            hiddenLabel
            size="small"
            onClick={()=>setVisible(!visible)}
          />
      :
      <TimeInteractive timeString={props.timeString} curDate={props.curDate} onDateChange={props.onDateChange} />
      }
    </div>
    
  );
};
