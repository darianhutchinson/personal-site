import './navbar.css';
import React from 'react';
import {  Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
  <div className="nav-bar">
    <li className="nav-item">
      <Link to="/" className="nav-link text-white">About Me</Link>
    </li>
    <li className="nav-item">
      <Link to="/previousWork" className="nav-link text-white">Previous Work</Link>
    </li>
    <li className="nav-item">
      <Link to="/projects" className="nav-link text-white">Projects</Link>
    </li>
    <li className="nav-item">
      <Link to="/contact" className="nav-link text-white">Contact Me</Link>
    </li>
  </div>
  ); 
};  
export default Navbar;