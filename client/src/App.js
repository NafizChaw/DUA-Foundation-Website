import React, { useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import DonationSection from './DonationSection';
import './App.css';

function App() {
    useEffect(() => {
        document.title = 'Dua Foundation'; // Set the browser tab title
    }, []);

    return (
        <div className="App">
            <Header />
            <Navbar />

            {/* Title for the landing page */}
            <div className="landing-page-title">
                <h1>Dua Foundation</h1>
                {/* You can add additional styling or text here */}
            </div>

            <DonationSection />
            {/* Additional content sections go here */}
        </div>
    );
}

export default App;
