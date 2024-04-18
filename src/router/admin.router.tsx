import React from 'react';
import { Navigate, Outlet, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminRoutes = () => {


  return (
    <>
      <Navbar />
      <Outlet />
    </>

  )
}

export default AdminRoutes;

