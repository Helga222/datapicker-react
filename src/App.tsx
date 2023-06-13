import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataPicker } from "./Components/DataPicker/DataPicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DPRange } from "./types";

function App() {

  const handleChange = (range:DPRange)=>{
    const stDate = range.startDate;
    const endDate = range.endDate;
  }
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DataPicker onChange={handleChange}/>
      </LocalizationProvider>
    </div>
  );
}

export default App;
