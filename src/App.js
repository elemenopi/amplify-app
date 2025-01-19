import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Premium from './pages/Premium';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/premium">Premium</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
