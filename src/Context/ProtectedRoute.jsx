import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  
  const data = JSON.parse(localStorage.getItem("data"));

    const auth = data.user_role;
    // const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return (auth==2 ? <Outlet /> :  <Navigate to="/login" />);
}

export default PrivateRoute;