import React from 'react';
import logo from '../../assets/logos/dua_logo.ico';
import '../styles/Header.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header container-fluid">
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    {/* Logo */}
                    <img src={logo} alt="Dua Foundation Logo" className="logo img-fluid" />
                </div>
                <div className="col-auto header-right">
                    {/* Optional: Links or buttons */}
                    <Link to="/donate" className="btn-donate">Donate</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
