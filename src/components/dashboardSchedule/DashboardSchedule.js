import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useAuth } from "../../contexts/AuthContexts";
import Calendar from "../calendar/Calendar";
// import DataTable from "./DataTable/DataTable";
import DataTable from "../dashboard/DataTable/DataTable";

const DashboardSchedule = () => {
    const [value, setValue] = React.useState(dayjs(new Date()));
    const [appointments, setAppointments] = React.useState([]);

    const { currentUser } = useAuth();

    const email = currentUser.email;

    useEffect(() => {
        fetch(
          `https://israt-dental-backend-git-master-md-hadiuzzaman-rifat.vercel.app/appointments?email=${email}&date=${value.$d.toLocaleDateString()}`
        )
          .then((res) => res.json())
          .then((data) => setAppointments(data));
      }, [email, value]);
    const handleChange = (newValue) => {
        setValue(newValue);
      };
    return (
        <div>
        <Calendar date={value} handleChange={handleChange}></Calendar>
        <br />
        <DataTable appointments={appointments}></DataTable>
        </div>
    );
};

export default DashboardSchedule;

