import { Route, Routes, Navigate } from 'react-router-dom';
import AdminRoutes from './admin.router';
import React from 'react';
import Blogs from '../Pages/Blogs';
import Homepage from '../Pages/Homepage';
import Team from '../Pages/Team';
import BlogsCard from '../Pages/BlogsCard';
import Campaign from '../Pages/Campaign';


const RootRouter = () => {
  return (<>
      <Routes>
        <Route element={<AdminRoutes />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/Pages/Blogs" element={<Blogs />} />
            <Route path="/pages/blogs/card" element={<BlogsCard />} />
            <Route path="/Pages/Team" element={<Team />} />
            <Route path="/Pages/Campaigns" element={<Campaign />} />
            <Route path="/Donate" element={<Campaign />} />
            
        </Route>
      </Routes>
  </>)
}

export default RootRouter;