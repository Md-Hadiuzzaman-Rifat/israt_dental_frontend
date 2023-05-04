import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import BookingPayment from "./components/Payment/BookingPayment";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import Appointment from "./components/appointment/Appointment";
import AddDoctor from "./components/dashboard/AddDoctor/AddDoctor";
import Dashboard from "./components/dashboard/Dashboard";
import MakeAdmin from "./components/dashboard/MakeAdmin/MakeAdmin";
import DashboardSchedule from "./components/dashboardSchedule/DashboardSchedule";
import Gallery from "./components/gellery/Gallery";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigatin";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
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
          

          <Route path="/*" element={<PrivateRouter />}>
            <Route path="appointment" element={<Appointment />}></Route>
            <Route
              path="appointment/bookingPayment/:bookingId"
              element={<BookingPayment />}
            ></Route>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="makeAdmin" element={ <MakeAdmin/>}></Route>
              <Route path="addDoctor" element={ <AddDoctor></AddDoctor>}></Route>
              <Route path="makeAdmin" element={<ProtectedRoute> <MakeAdmin/></ProtectedRoute>}></Route>
              <Route path="addDoctor" element={ <ProtectedRoute><AddDoctor></AddDoctor></ProtectedRoute>}></Route>
              <Route path="dashboardSchedule" element={ <DashboardSchedule></DashboardSchedule> }></Route>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
