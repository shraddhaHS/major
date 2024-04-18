import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar row m-0 py-4">
      <div className="col-4 ps-3">
        <div className="logo">
          <img src="\images\Group 46067.png" alt="" />
        </div>
      </div>
      <div className="col-8 d-flex align-items-center justify-content-end pe-3">
        <ul className='list-unstyled d-flex mb-0 me-3'>
          <li>
            <NavLink exact to="/" className={location.pathname === '/' ? 'active-link' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Donate" className={location.pathname === '/Donate' ? 'active-link' : ''}>
              Donate
            </NavLink>
          </li>
          <li>
            <NavLink to="/Pages/Campaigns" className={location.pathname === '/Pages/Campaigns' ? 'active-link' : ''}>
              Campaigns
            </NavLink>
          </li>
          <li>
            <NavLink to="/Pages/Blogs" className={location.pathname === '/Pages/Blogs' ? 'active-link' : ''}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/Pages/Team" className={location.pathname === '/Pages/Team' ? 'active-link' : ''}>
              Team
            </NavLink>
          </li>
        </ul>
        <button className="btn wallet ms-5">Connect Wallet</button>
      </div>
    </div>
  );
}

export default Navbar;
