import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./components/appointment/Appointment";
import Dashboard from "./components/dashboard/Dashboard";
import Gallery from "./components/gellery/Gallery";
import Home from "./components/home/Home";
import Login from "./components/Login/Login";
import Navigation from "./components/navigation/Navigatin";
import Signup from "./components/signup/Signup";
import { AuthProvider } from "./contexts/AuthContexts";
import { initializeFirebaseApp } from "./firebase/firebase.initialize";

const App = () => {
  initializeFirebaseApp();
  return (
    <div className="App">
      <AuthProvider>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/appointment" element={ <Appointment/> }></Route>
          <Route path="/dashboard" element={ <Dashboard/> }></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
