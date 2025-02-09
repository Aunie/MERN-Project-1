import React from 'react';
import { NavLink  } from 'react-router-dom'; // Import Link for navigation
import "bootstrap-icons/font/bootstrap-icons.css";
import '../assets/css/style.css'
import { useAuth } from '../store/auth';
const Navbar = () => {

  const {isLoggedIn} = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar-bg w-100">
  <NavLink className="navbar-brand text-white" to="/">
    MyApp
  </NavLink>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink
          to="/"
           className={({ isActive }) => (isActive ? 'nav-link text-white active' : 'nav-link text-white')}
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/about"
           className={({ isActive }) => (isActive ? 'nav-link text-white active' : 'nav-link text-white')}
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
           className={({ isActive }) => (isActive ? 'nav-link text-white active' : 'nav-link text-white')}
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/service"
           className={({ isActive }) => (isActive ? 'nav-link text-white active' : 'nav-link text-white')}
        >
          Service
        </NavLink>
      </li>

      {isLoggedIn ?  <li className="nav-item">
        <NavLink
          to="/logout"
           className={({ isActive }) => (isActive ? 'nav-link text-white active' : 'nav-link text-white')}
        >
          Logout
        </NavLink>
      </li>
      : 
      <>
        <li className="nav-item">
        <NavLink
          to="/register"
           className={({ isActive }) => (isActive ? 'nav-link text-white active' : 'nav-link text-white')}
        >
          Register
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/login"
           className={({ isActive }) => (isActive ? 'nav-link text-white active' : 'nav-link text-white')}
        >
          Login
        </NavLink>
      </li>
      </>
      }
      

      
    </ul>
  </div>
</nav>



  );
};

export default Navbar;