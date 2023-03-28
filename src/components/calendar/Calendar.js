import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import * as React from 'react';


export default function Calendar({date,handleChange}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={date}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
