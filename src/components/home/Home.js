import React from 'react';
import Footer from "../Footer/Footer";
import Doctors from "../doctors/Doctors";
import Header from "../header/Header";
const home = () => {
    return (
        <div>
            <Header></Header>
            <h1 style={{color:"black", paddingBottom:"30px"}}>Our Doctors List :</h1>
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default home;