import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import Sidebar from './Sidebar'; // Import Sidebar component
import Header from './shared/Header'; // Import Header component for desktop
import logo from '../assets/logos/dua_logo.ico'; // Import the logo
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import './styles/Home.css'; // Custom styles

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
        setIsSidebarOpen(false); // Close the sidebar when clicking outside
    };

    return (
        <div>
            {/* Logo, Name, and Donate Button (Visible on all screens) */}
            <div className="shared-header text-center py-4">
                <img
                    src={logo}
                    alt="Dua Foundation Logo"
                    className="logo-shared img-fluid mx-auto d-block"
                />
                <h1 className="shared-name">Dua Foundation</h1>
                <a href="/donate" className="btn btn-dark mt-2">
                    Donate
                </a>
            </div>

            {/* Header (Visible only on desktop) */}
            <div className="d-none d-lg-block">
                <Header />
            </div>

            {/* Sidebar (Mobile-only) */}
            <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
                <Sidebar closeSidebar={closeSidebar} />
            </div>

            {/* Toggle button for Sidebar (Mobile-only) */}
            <button className="toggle-btn d-lg-none" onClick={toggleSidebar}>
                &#9776;
            </button>

            {/* Main content */}
            <div
                className={`main-content ${isSidebarOpen ? 'blurred' : ''}`}
                onClick={closeSidebar}
            >
                {/* About Section */}
                <section id="about-section" className="section about py-5" data-aos="fade-left">
                    <div className="container">
                        <h1>About Dua Foundation</h1>
                        <p>
                            At the Dua Foundation, our mission is to extend a helping hand to the poor and
                            those in need, beginning with our efforts in Bangladesh and expanding across
                            the globe...
                        </p>
                        <h2 className="mt-4">Purpose</h2>
                        <p>
                            We serve as a catalyst for positive change by addressing immediate and long-term
                            needs of impoverished communities. We aim to:
                        </p>
                        <ul>
                            <li>Provide direct assistance to individuals and families facing financial hardship.</li>
                            <li>Support community-driven initiatives that promote education, healthcare, and sustainable development.</li>
                            <li>Foster a spirit of compassion by mobilizing resources and volunteers to aid those in distress.</li>
                            <li>Expand our outreach to a broader spectrum of vulnerable populations, ensuring a lasting, global impact.</li>
                        </ul>
                        <p>
                            Our commitment is to act with integrity, transparency, and unwavering dedication
                            to the betterment of humanity, one person and one community at a time.
                        </p>
                    </div>
                </section>

                {/* Projects Section with 9 flip cards */}
                <section id="projects-section" className="section projects py-5" data-aos="fade-right">
                    <div className="container">
                        <h1>Projects Section</h1>
                        <p>Explore our various projects aimed at supporting local communities and beyond.</p>

                        {/* Row 1 */}
                        <div className="row mt-4">
                            {/* Eid Project */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Eid Project</h4>
                                            <p>Celebrating Eid with essential supplies &amp; gifts.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Eid Project Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Iftar Project */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Iftar Project</h4>
                                            <p>Providing iftar meals during Ramadan.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Iftar Project Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Flood Project */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Flood Project</h4>
                                            <p>Emergency relief for flood-affected areas.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Flood Project Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="row mb-4">
                            {/* Winter Clothes Distribution Project */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Winter Clothes Project</h4>
                                            <p>Distributing warm clothing during winter.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Winter Clothes Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Placeholder Project 1 */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Placeholder Project 1</h4>
                                            <p>Short description of the project.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Placeholder Project 1 Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Placeholder Project 2 */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Placeholder Project 2</h4>
                                            <p>Short description of the project.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Placeholder Project 2 Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="row">
                            {/* Placeholder Project 3 */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Placeholder Project 3</h4>
                                            <p>Short description of the project.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Placeholder Project 3 Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Placeholder Project 4 */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Placeholder Project 4</h4>
                                            <p>Short description of the project.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Placeholder Project 4 Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Placeholder Project 5 */}
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Placeholder Project 5</h4>
                                            <p>Short description of the project.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Placeholder Project 5 Stats</h4>
                                            <p>Number of People Helped: [TBD]</p>
                                            <p>Donation Amount: [TBD]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Ongoing Projects Section */}
                <section
                    id="ongoing-projects-section"
                    className="section ongoing-projects py-5"
                    data-aos="zoom-in"
                >
                    <div className="container">
                        <h1>Ongoing Projects</h1>
                        <p>Here are the ongoing projects at Dua Foundation that you can support. More details coming soon.</p>
                    </div>
                </section>

                {/* Donor & Lifetime Members Section */}
                <section
                    id="donor-members-section"
                    className="section donor-members py-5"
                    data-aos="fade-up"
                >
                    <div className="container">
                        <h1>Donor and Lifetime Members</h1>
                        <p>We extend heartfelt gratitude to our generous donors and lifetime members.</p>
                    </div>
                </section>

                {/* Gallery Section with 9 flip cards */}
                <section
                    id="gallery-section"
                    className="section gallery py-5"
                    data-aos="flip-up"
                >
                    <div className="container">
                        <h1>Gallery</h1>
                        <p>Explore photos and moments captured during our community outreach and events.</p>

                        {/* Row 1 */}
                        <div className="row mt-4">
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 1</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 1 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 2</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 2 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 3</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 3 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="row mb-4">
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 4</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 4 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 5</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 5 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 6</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 6 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 7</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 7 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 8</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 8 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Gallery Item 9</h4>
                                            <p>Short description</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Gallery Item 9 Details</h4>
                                            <p>More info about this photo/event.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Video Section with 9 flip cards */}
                <section
                    id="video-section"
                    className="section video py-5"
                    data-aos="flip-left"
                >
                    <div className="container">
                        <h1>Video</h1>
                        <p>Watch our latest videos showcasing the impact of our projects and community stories.</p>

                        {/* Row 1 */}
                        <div className="row mt-4">
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 1</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 1 Details</h4>
                                            <p>youtube.com/[video1-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 2</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 2 Details</h4>
                                            <p>youtube.com/[video2-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 3</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 3 Details</h4>
                                            <p>youtube.com/[video3-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="row mb-4">
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 4</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 4 Details</h4>
                                            <p>youtube.com/[video4-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 5</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 5 Details</h4>
                                            <p>youtube.com/[video5-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 6</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 6 Details</h4>
                                            <p>youtube.com/[video6-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 7</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 7 Details</h4>
                                            <p>youtube.com/[video7-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 8</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 8 Details</h4>
                                            <p>youtube.com/[video8-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-4">
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <h4>Video 9</h4>
                                            <p>Short description or placeholder YouTube link.</p>
                                        </div>
                                        <div className="flip-card-back">
                                            <h4>Video 9 Details</h4>
                                            <p>youtube.com/[video9-link]</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* News Section */}
                <section id="news-section" className="section news py-5" data-aos="fade-up">
                    <div className="container">
                        <h1>News</h1>
                        <p>Stay updated with our latest announcements and community developments.</p>
                    </div>
                </section>

                {/* Contact Section */}
                <section
                    id="contact-section"
                    className="section contact py-5"
                    data-aos="zoom-out"
                >
                    <div className="container">
                        <h1>Contact</h1>
                        <p>
                            Have questions or want to learn more? Reach out for additional information,
                            volunteer opportunities, or ways to support our ongoing projects.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
