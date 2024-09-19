import logo from '../../assets/logos/dua_logo.ico';
import '../styles/Header.css';


function Header(){
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo"/>
            {/* Add any additional elements like a title or slogan here */}
        </div>
    )
}

export default Header;