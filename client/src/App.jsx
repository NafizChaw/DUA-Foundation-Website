import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Counter from "./views/Counter.jsx";
import Home from "./views/Home.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Counter />} />
            </Routes>
        </Router>
    );
}

export default App;
