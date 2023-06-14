import styles from "./DateMenu.module.css";
import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "../TabPanel";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock/DigitalClock";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { PickerSelectionState } from "@mui/x-date-pickers/internals/hooks/usePicker";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import { useDispatch, useStore } from "react-redux";
import { DPType, DateType, DateFunc, TimeString } from "../../types";
import { setDateEnd, setDateStart, setDateType } from "../../Redux/actions";

export const DateMenu = (props: { type: DateType; curDate:DPType; onDateChange: DateFunc;timeString:TimeString }) => {
  const [value, setValue] = useState(0);
  const initialDate = (props.type===DateType.StartDate) ? props.curDate.dateStart : props.curDate.dateEnd;
  const [curDate, setCurDate] = useState(dayjs(initialDate));
  const [relativeDate, setRelativeDate] = useState({
    units: "seconds",
    time: 0,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (props.type===DateType.StartDate){
      setCurDate(dayjs(props.curDate.dateStart))
    }
    else setCurDate(dayjs(props.curDate.dateEnd))
    onDateChange(curDate);
  }, [curDate]);

  const onDateChange = (value: dayjs.Dayjs | null) => {
    if (value) {
 
      setCurDate(value);
      const date = value.toDate();
      if (props.type === DateType.StartDate) {
        props.onDateChange(date, DateType.StartDate);
      } else props.onDateChange(date, DateType.EndDate);
    }
  };

  const handleCalendarChange = (
    value: dayjs.Dayjs | null,
    selectionState?: PickerSelectionState | undefined
  ) => {
    onDateChange(value);
  };

  const handleClockChange = (
    value: any,
    selectionState?: PickerSelectionState | undefined,
    selectedView?: "hours" | undefined
  ) => {
    onDateChange(value);
  };

  const handleRelativeTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    let newTime = Number(event.target.value);
    setRelativeDate({ ...relativeDate, time: newTime });

    let date = curDate.subtract(newTime, relativeDate.units as ManipulateType);
    setCurDate(date);
  };

  const handleRelativeUnitChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault();
    let newUnits = event.target.value as ManipulateType;
    setRelativeDate({ ...relativeDate, units: newUnits });

    let date = curDate.subtract(relativeDate.time, newUnits);
    setCurDate(date);
  };

  return (
    <div className={styles.content}>
      <Tabs variant="fullWidth" value={value} onChange={handleChange}>
        <Tab label="Absolute" />
        <Tab label="Relative" />
        <Tab label="Now" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className={styles.tab__content}>
          <DateCalendar
            sx={{ flex: "1 0 auto" }}
            onChange={handleCalendarChange}
            value={curDate}
          />
          <DigitalClock
            ampm={false}
            sx={{ marginTop: "40px" }}
            onChange={handleClockChange}
            value={curDate}
          />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.tab__content}>
          <input
            name="time"
            className={`${styles.tab__number} ${styles.menu__select__item}`}
            defaultValue={0}
            type="number"
            onChange={handleRelativeTimeChange}
            value={props.timeString.time}
          />
          <select
            name="units"
            className={styles.tab__input}
            onChange={handleRelativeUnitChange} value={props.timeString.unit}
          >
            <option value="second">Seconds ago</option>
            <option value="minute">Minutes ago</option>
            <option value="hour">Hours ago</option>
            <option value="day">Days ago</option>
            <option value="week">Weeks ago</option>
            <option value="year">Years ago</option>
          
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
