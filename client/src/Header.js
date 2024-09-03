// src/components/Header.js

import React from 'react';
import logo from './images/Logo1.ico'; // Adjust the path based on your directory structure
import './Header.css'; // Optional: if you want to add custom styles for the header

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            {/* Add any additional elements like a title or slogan here */}
        </div>
    );
};

export default Header;
