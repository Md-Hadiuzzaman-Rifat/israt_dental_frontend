import React from 'react';
import Doctors from "../doctors/Doctors";

const home = () => {
    return (
        <div>
            <h1 style={{color:"blue", paddingBottom:"30px"}}>Our Doctors List:</h1>
            <Doctors></Doctors>
        </div>
    );
};

export default home;