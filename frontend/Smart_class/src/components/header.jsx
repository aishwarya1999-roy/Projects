import React from "react";
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../assets/logo/logo1.png';
function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo-container">
            <Link to="/"><img src={logo} alt="Logo" className="opening-logo" /></Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
