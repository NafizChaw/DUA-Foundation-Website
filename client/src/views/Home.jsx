import Header from "./shared/Header.jsx";
import Sidebar from "./Sidebar.jsx";
import './styles/Home.css'

function Home(){
    return (
        <div className="App">
            {/* Title for the landing page */}
            <div className="landing-page-title">
                <h1>Dua Foundation</h1>
                {/* You can add additional styling or text here */}
            </div>

            <Header/> {/* Logo is displayed here */}
            <Sidebar/>
        </div>
    )
}

export default Home;