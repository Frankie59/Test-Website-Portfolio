import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import UpcomingProjects from './UpcomingProjects'; // Import the new component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className="flex justify-between p-4 bg-opacity-75 bg-gray-900 text-white">
          <div className="flex items-center">
            <img src="/logo.png" alt="My Logo" className="w-12 h-12" />
          </div>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="hover:underline text-lg px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:underline text-lg px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
            >
              Work
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upcomingprojects" element={<UpcomingProjects />} /> {/* Add new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

