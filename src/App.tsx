import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { DataPicker } from "./Components/DataPicker/DataPicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DataPicker />
      </LocalizationProvider>
    </div>
  );
}

export default App;
