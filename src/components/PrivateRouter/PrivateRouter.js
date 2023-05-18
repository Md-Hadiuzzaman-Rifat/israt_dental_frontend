import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContexts';

const PrivateRouter = () => {
    const history=useLocation()
    console.log(history.pathname);

    const {currentUser}=useAuth()
    return currentUser? <Outlet/> : <Navigate to="/login" state={{location:history.pathname}} />;
};

export default PrivateRouter;