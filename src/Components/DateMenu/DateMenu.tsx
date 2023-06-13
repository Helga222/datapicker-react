import styles from "./DateMenu.module.css";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "../TabPanel";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock/DigitalClock";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickerSelectionState } from "@mui/x-date-pickers/internals/hooks/usePicker";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useStore } from "react-redux";
import { DPType, DateType } from "../../types";
import { setDateEnd, setDateStart, setDateType } from "../../Redux/actions";
interface IDateMenuProps {
  onDateChange: (date:Date) => void;
  //
}

export const DateMenu = () => {

  const [value, setValue] = useState(0);
  const curState = useStore<DPType>().getState();
  const [curDate,setCurDate] = useState(dayjs('2022-04-17T15:30'));
  const dispatch = useDispatch();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCalendarChange = (value: dayjs.Dayjs | null, selectionState?: PickerSelectionState | undefined)=>{
    if (value){
      setCurDate(value);
      const date = value.toDate();
      /*if (curState.editedDate==DateType.StartDate){
        dispatch(setDateStart(date.toISOString()));
      }
      else dispatch(setDateEnd(date.toISOString()));*/
   }
  }

  const handleClockChange = (value: any, selectionState?: PickerSelectionState | undefined, selectedView?: "hours" | undefined)=>{
    if (value){
      setCurDate(value);
      const date = value.toDate();
      /*if (curState.editedDate==DateType.StartDate){
        dispatch(setDateType(date.toISOString()));
      }
     else dispatch(setDateEnd(date.toISOString()));*/
    }
  }


  return (
    <div className={styles.content}>
      <Tabs variant="fullWidth" value={value} onChange={handleChange}>
        <Tab label="Absolute" />
        <Tab label="Relative" />
        <Tab label="Now" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={styles.tab__content}>
          <DateCalendar sx={{ flex: "1 0 auto" }} onChange={handleCalendarChange} value={curDate}/>
          <DigitalClock ampm={false} sx={{ marginTop: "40px"}} onChange={handleClockChange} value={curDate}/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.tab__content}>
          <input
            name="time"
            className={`${styles.tab__number} ${styles.menu__select__item}`}
            defaultValue={0}
            type="number"
          />
          <select
            name="unit"
            className={`${styles.tab__input} ${styles.menu__select__item}`}
          >
            <option value="секунд">Seconds ago</option>
            <option value="минут">Minutes ago</option>
            <option value="часов">Hours ago</option>
            <option value="дней">Days ago</option>
            <option value="недель">Weeks ago</option>
            <option value="недель">Years ago</option>
          </select>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.tab__content}></div>
        Item Three
      </TabPanel>
    </div>
  );
};
