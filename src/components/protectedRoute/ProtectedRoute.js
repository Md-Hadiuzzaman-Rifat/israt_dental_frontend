import React from 'react';
import { useAuth } from "../../contexts/AuthContexts";


const ProtectedRoute = ({children}) => {
    const {admin}=useAuth
    console.log(admin)
    return (
        <div>
            {admin && children }
        </div>
    );
};

export default ProtectedRoute;