// src/components/ProtectedRoute.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    //로그인 여부를 알기위해 userInfo 를 얻어낸다.
    const userInfo = useSelector(state=>state.userInfo);
    if(!userInfo){

        return <Navigate to="/"/>
    }

    return children;
}

export default ProtectedRoute;
