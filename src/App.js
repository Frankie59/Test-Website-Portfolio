import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import UpcomingProjects from './UpcomingProjects'; // Import the new component

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'upcomingprojects':
        return <UpcomingProjects />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="flex justify-between p-4 bg-opacity-75 bg-gray-900 text-white">
        <div className="flex items-center">
          {/* Adjust the width and height of the logo */}
          <img src="/logo.png" alt="My Logo" className="w-12 h-12" />
        </div>
        <div className="flex space-x-4">
          {/* Updated styling for the buttons */}
          <button
            onClick={() => setCurrentPage('home')}
            className="hover:underline text-lg px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className="hover:underline text-lg px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
          >
            Work
          </button>
          <button
            onClick={() => setCurrentPage('upcomingprojects')}
            className="hover:underline text-lg px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
          >
            Upcoming Project
          </button>
        </div>
      </nav>

      {/* Render current page */}
      {renderPage()}
    </div>
  );
}

export default App;

