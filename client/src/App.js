import React, { useEffect } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import './App.css';

function App() {
    useEffect(() => {
        document.title = 'Dua Foundation'; // Set the browser tab title
    }, []);

    return (
            <div className="App">
                {/* Title for the landing page */}
                <div className="landing-page-title">
                    <h1>Dua Foundation</h1>
                    {/* You can add additional styling or text here */}
                </div>

                <Header /> {/* Logo is displayed here */}
                <Navbar />
                <Sidebar />
            </div>

    );
}

export default App;
