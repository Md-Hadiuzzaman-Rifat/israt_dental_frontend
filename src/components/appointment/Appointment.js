import dayjs from 'dayjs';
import React from "react";
import Calendar from "../calendar/Calendar";
import Card from "../card/Card";
import "./Appointment.css";


const Appointment = () => {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const handleChange=(newValue)=>{
    setValue(newValue)
  }

  return (
    <div className="appointment">
      <h2>You Can Fixed an Appointment Date From Here.</h2>
      <br />
      <br />
      <div className="appointment-content">
        <div className="appointment-content__card">
          <Card value={value}></Card>
        </div>
        <div className="appointment-content__calendar">
          <Calendar date={value} handleChange={handleChange}></Calendar>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
