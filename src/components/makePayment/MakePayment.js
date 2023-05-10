import React from 'react';
import { useParams } from "react-router-dom";

const MakePayment = () => {
    const params=useParams()
    
    return (
        <div>
            <h2>Payment for id: {params.paymentId}</h2>
        </div>
    );
};

export default MakePayment;