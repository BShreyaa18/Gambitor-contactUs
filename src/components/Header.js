import React from "react";
import logo from "../images/Logo.png";
import gambitor from "../images/Gambitor.png";
import { BrowserRouter, Link } from "react-router-dom";
function Header()
{
    return(
      <BrowserRouter>
        <nav className="navh">
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn" >
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">
        <img src={logo} alt="" id="logo"  className="logoh" />
        <img src={gambitor} alt="" id="gambitor" className="gambitorh" />
      </label>
      <ul className="headerlist"> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/event">Events</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/practicepaper">Practice Paper</Link></li>
        <li><Link to="/register" className="active">Register</Link></li>  
      </ul>
    </nav>
    </BrowserRouter>
    );
}
export default Header;