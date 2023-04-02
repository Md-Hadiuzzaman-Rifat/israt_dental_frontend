import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContexts';

const PrivateRouter = () => {

    const {currentUser}=useAuth()
    return currentUser? <Outlet/> : <Navigate to="/login"/>;
};

export default PrivateRouter;