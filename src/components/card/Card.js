import React, { useState } from 'react';
import { visit } from "../../data/Data";
import BookingModal from "../bookingModal/BookingModal";
import Button from "../button/Button";
import "./Card.css";

const Card = ({value}) => {
    
    const [open, setOpen] =useState(false);
    const [schedule,setSchedule]=useState("")
    const [service,setService]=useState("")
    const [fee,setFee]=useState('')

    const handleOpen = (doctor) => {
        setOpen(true);
        setSchedule(doctor.Schedule)
        setService(doctor.work)
        setFee(doctor.fee)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const date=value.$d
  
    return (
        <div className='card'>
            {
                visit.map((doctor,index)=>(
                    
                    <div key={index}  className='card-section'>
                        <h3>{doctor.Schedule}</h3>
                        <h3>{doctor.work}</h3>
                        <p>Fee: {doctor.fee}Taka</p>
                        <Button onClick={()=>handleOpen(doctor)}>Book Now</Button>
                    </div>
                ))
            }
            {
                open && <BookingModal service={service} schedule={schedule} fee={fee}
                handleClose={handleClose} open={open} date={date}/>
            }
        </div>

    );
};

export default Card;