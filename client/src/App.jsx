import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./views/Home.jsx";
import Donate from "../../donate.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </Router>
    );
}

export default App;
