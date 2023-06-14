
import styles from "./TimeVidget.module.css";
import { DPType, DateFunc, DateType,TimeString } from "../../types";

import FilledInput from "@mui/material/FilledInput";
import { useEffect, useState } from "react";
import { TimeInteractive } from "../TimeInteractive/TimeInteractive";



export const TimeVidget = ( props:{timeString:TimeString,relateTimeVisible:boolean ,curDate:DPType,onDateChange:DateFunc}) => {
  const[visible,setVisible] = useState(props.relateTimeVisible);

  useEffect(()=>{
    setVisible(prev=>prev=props.relateTimeVisible);
  },[props.relateTimeVisible]);

  const handleClick=(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    e.preventDefault();
    setVisible(prev=>!prev);
  }

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
            onClick={handleClick}
          />
      :
      <TimeInteractive timeString={props.timeString} curDate={props.curDate} onDateChange={props.onDateChange} />
      }
    </div>
    
  );
};
