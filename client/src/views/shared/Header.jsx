import React from 'react';
import logo from '../../assets/logos/dua_logo.ico';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header container-fluid">
            <div className="row align-items-center justify-content-between">
                {/* Column for Logo */}

                {/* Navigation Links in the Center */}
                <div className="col">
                    <ul className="nav-list d-flex justify-content-around">
                        <li><a href="#home-section">Home</a></li>
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#projects-section">Projects</a></li>
                        <li><a href="#ongoing-projects-section">Ongoing Projects</a></li>
                        <li><a href="#donor-members-section">Donor and Lifetime Members</a></li>
                        <li><a href="#gallery-section">Gallery</a></li>
                        <li><a href="#video-section">Video</a></li>
                        <li><a href="#news-section">News</a></li>
                        <li><a href="#contact-section">Contact</a></li>
                    </ul>
                </div>

                {/* Column for Donate Button */}
            </div>
        </header>
    );
}

export default Header;
