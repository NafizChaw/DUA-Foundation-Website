import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./views/Home.jsx";
import Donate from "./views/Donate.jsx";
import About from "./views/About.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </Router>
    );
}

export default App;
