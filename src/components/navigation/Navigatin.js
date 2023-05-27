import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import "./Navigation.css";

const Navigatin = () => {
  const { currentUser,logout } = useAuth();

  return (
    <div className="navigation">
      <div className="navigation_flex">
        <div>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/appointment">Appointment</Link>
          </li>
          <li>
            <Link to="/dashboard/dashboardSchedule">Dashboard</Link>
          </li>
        </div>

        <div>
          {!currentUser ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <div>
              <li>
                {/* <h3>{currentUser.displayName.length >1 ? currentUser.displayName.split(" ")[1] : currentUser.displayName}</h3> */}
                <h3>{currentUser.displayName}</h3>
              </li>
              <li style={{cursor:'pointer'}} onClick={logout}> <a>Logout</a> </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigatin;
