import React, { useState } from 'react';
import './Sidebar.css'; // Make sure to create this CSS file

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Button to open/close the side navigation */}
            <button className="toggle-btn" onClick={toggleNav} aria-label="Toggle Navigation Menu">
                &#9776; {/* Unicode for the hamburger icon */}
            </button>

            {/* Side Navigation Menu */}
            <div className={`sidenav ${isOpen ? 'open' : ''}`}>
                {/* Close Button */}
                <button className="closebtn" onClick={toggleNav} aria-label="Close Navigation Menu">
                    &times; {/* Unicode for the close icon */}
                </button>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/ongoing-projects">Ongoing Projects</a></li>
                    <li><a href="/donor-members">Donor and Lifetime Member</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/video">Video</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
