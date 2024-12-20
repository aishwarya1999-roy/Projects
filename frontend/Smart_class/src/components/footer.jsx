/* src/components/header.jsx */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo1.png';
import mountain from '../assets/footer-bg.png';
import yellow_bg from '../assets/footer-bg-yellow.png';
import './footer.css';


function Footer() {
    return (
        <div className='container'>
        <footer>
            <div className="footer-container">
            <img src={yellow_bg} alt="Logo" className='yellow_bg'/>
                <div className='footer-text' >
                    <Link to="/">
                    <img src={logo} alt="Logo"/>
                </Link>
                <span>All rights reserved 2024 © Smart Class</span>
                </div>
                

                <div className='mountains-box'>
                    <img src={mountain}></img>
                </div>
            </div>
           
        </footer>
        </div>
        
    );
}

export default Footer;