import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./views/Home.jsx";
import Donate from "../../donate.jsx";
import About from "./views/About.jsx";

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
