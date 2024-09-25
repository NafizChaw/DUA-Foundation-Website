import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Sidebar from './Sidebar'; // Import Sidebar component
import Header from './shared/Header'; // Import Header component for desktop
import logo from '../assets/logos/dua_logo.ico'; // Import the logo
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './styles/Home.css'; // Your custom styles

function Home() {
    // Initialize AOS for animations
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // State to manage sidebar toggle in mobile view
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false); // Close the sidebar when clicked outside
    };

    return (
        <div>
            {/* Logo, Website Name, and Donation Button (Visible on all screens) */}
            <div className="shared-header text-center py-4">
                <img src={logo} alt="Dua Foundation Logo" className="logo-shared img-fluid mx-auto d-block" />
                <h1 className="shared-name">Dua Foundation</h1>
                <a href="/donate" className="btn btn-dark mt-2">Donate</a>
            </div>

            {/* Header (Visible only on desktop) */}
            <div className="d-none d-lg-block">
                <Header />
            </div>

            {/* Sidebar (Visible only on smaller screens) */}
            <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
                <Sidebar closeSidebar={closeSidebar} />
            </div>

            {/* Toggle button for Sidebar (Visible only on mobile) */}
            <button className="toggle-btn d-lg-none" onClick={toggleSidebar}>
                &#9776;
            </button>

            {/* Main content */}
            <div className={`main-content ${isSidebarOpen ? 'blurred' : ''}`} onClick={closeSidebar}>
                <section id="home-section" className="section home py-5" data-aos="fade-up">
                    <div className="container">
                        <h1>Home Section</h1>
                        <p>Welcome to the Dua Foundation Home Section</p>
                    </div>
                </section>

                <section id="about-section" className="section about py-5" data-aos="fade-left">
                    <div className="container">
                        <h1>About Section</h1>
                        <p>This is the about section content.</p>
                    </div>
                </section>

                <section id="projects-section" className="section projects py-5" data-aos="fade-right">
                    <div className="container">
                        <h1>Projects Section</h1>
                        <p>Explore our various projects here.</p>
                    </div>
                </section>

                <section id="ongoing-projects-section" className="section ongoing-projects py-5" data-aos="zoom-in">
                    <div className="container">
                        <h1>Ongoing Projects Section</h1>
                        <p>Here are the ongoing projects at Dua Foundation.</p>
                    </div>
                </section>

                <section id="donor-members-section" className="section donor-members py-5" data-aos="fade-up">
                    <div className="container">
                        <h1>Donor and Lifetime Members Section</h1>
                        <p>Meet our donors and lifetime members.</p>
                    </div>
                </section>

                <section id="gallery-section" className="section gallery py-5" data-aos="flip-up">
                    <div className="container">
                        <h1>Gallery Section</h1>
                        <p>Explore our gallery.</p>
                    </div>
                </section>

                <section id="video-section" className="section video py-5" data-aos="flip-left">
                    <div className="container">
                        <h1>Video Section</h1>
                        <p>Watch videos about our foundation.</p>
                    </div>
                </section>

                <section id="news-section" className="section news py-5" data-aos="fade-up">
                    <div className="container">
                        <h1>News Section</h1>
                        <p>Latest news about our activities.</p>
                    </div>
                </section>

                <section id="contact-section" className="section contact py-5" data-aos="zoom-out">
                    <div className="container">
                        <h1>Contact Section</h1>
                        <p>Contact us for more information.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
