// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={assets.logo} alt="" className="logo" />
                <span className="brand-name">Sinai Chei</span>
            </div>
            <ul className="navbar-menu">
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("safety")} className={menu === "safety" ? "active" : ""}>Safety</li>
                <li onClick={() => setMenu("support")} className={menu === "support" ? "active" : ""}>Support</li>
                <li onClick={() => setMenu("about-us")} className={menu === "about-us" ? "active" : ""}>About Us</li>
            </ul>
            <div className="navbar-right">
                <button>Sign up</button>
            </div>
        </div>
    );
}

export default Navbar;
