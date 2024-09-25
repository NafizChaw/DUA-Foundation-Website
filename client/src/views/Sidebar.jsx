import './styles/Sidebar.css';
import React from 'react';

const SideNav = ({ closeSidebar }) => {
    return (

        <div>

            {/* Side Navigation Menu */}
            <div className="sidenav open">
                <button className="closebtn" onClick={closeSidebar} aria-label="Close Navigation Menu">
                    &times;
                </button>
                <ul>
                    <li><a href="#home-section" onClick={closeSidebar}>Home</a></li>
                    <li><a href="#about-section" onClick={closeSidebar}>About</a></li>
                    <li><a href="#projects-section" onClick={closeSidebar}>Projects</a></li>
                    <li><a href="#ongoing-projects-section" onClick={closeSidebar}>Ongoing Projects</a></li>
                    <li><a href="#donor-members-section" onClick={closeSidebar}>Donor and Lifetime Members</a></li>
                    <li><a href="#gallery-section" onClick={closeSidebar}>Gallery</a></li>
                    <li><a href="#video-section" onClick={closeSidebar}>Video</a></li>
                    <li><a href="#news-section" onClick={closeSidebar}>News</a></li>
                    <li><a href="#contact-section" onClick={closeSidebar}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
