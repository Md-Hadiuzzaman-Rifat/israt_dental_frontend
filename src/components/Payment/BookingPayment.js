import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51Mr47xIrkfWin5GdgppkRUsrkOaHzHen7OePqx5dmatK2HVEyvY0Kx7wJmskiYNa5m7lRUdjQbNtiFlJqyflNUki00d48f8Gsp')

const BookingPayment = () => {
    const [patientDetails, setPatientDetails]=useState({})
    let params = useParams();

    useEffect(()=>{
        fetch(`http://localhost:2020/appointment/bookingPayment/${params.bookingId}`)
        .then(res=>res.json())
        .then(data=>setPatientDetails(data))
    },[params.bookingId])

    const option={
        clientSecret: ''
    }

    return (
        <div>
            <h1>Make Payment</h1>
            <br />
            <p>Patient Name: {patientDetails.name}</p>
            <p>Appointment: {patientDetails.service}</p>
            <p>Schedule: {patientDetails.schedule}</p>
            <p style={{color:"blue", marginTop:"25px"}}>Fee: {patientDetails.fee} Taka</p>
        </div>
    );
};

export default BookingPayment;