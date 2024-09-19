import React from 'react';
import Header from './shared/Header.jsx';
import Sidebar from './Sidebar.jsx';
import './styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className="container-fluid">
            {/* Title for the landing page */}
            <div className="row justify-content-center landing-page-title">
                <div className="col-12 text-center">
                    <h1>Dua Foundation</h1>
                </div>
            </div>

            {/* Header */}
            <div className="row">
                <div className="col-12">
                    <Header /> {/* Logo is displayed here */}
                </div>
            </div>

            <div className="row">
                {/* Sidebar (Visible on larger screens) */}
                <div className="col-md-4 col-12">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="col-md-8 col-12">
                    <div className="content text-center">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
