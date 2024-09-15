import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./views/Home.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
