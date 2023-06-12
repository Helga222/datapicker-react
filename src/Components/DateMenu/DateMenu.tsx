import styles from "./DateMenu.module.css";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "../TabPanel";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock/DigitalClock";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickerSelectionState } from "@mui/x-date-pickers/internals/hooks/usePicker";

export const DateMenu = () => {

  const [date, setDate] = useState<any>();
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleCalendarChange = (e:any)=>{
    const t = 2;
    
  }

  const handleClockChange = (e:any)=>{
    const t = 2;
    const ee = date;
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
          <DateCalendar sx={{ flex: "1 0 auto" }} onChange={(value)=>setDate(value)} value={date}/>
          <DigitalClock ampm={false} sx={{ marginTop: "40px"}} onChange={handleClockChange}/>
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
