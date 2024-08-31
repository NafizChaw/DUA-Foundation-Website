import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Ongoing Projects</a></li>
                <li><a href="#">Donor and Lifetime Member</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Volunteer Registration</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
