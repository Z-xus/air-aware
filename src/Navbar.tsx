import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="bg-gradient-to-r from-blue-400 to-teal-500 p-4 text-white shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-semibold tracking-wide">Air Quality Monitor</h1>
      <div className="flex space-x-4">
        <Link
          to="/"
          className="text-white bg-transparent hover:bg-white hover:text-blue-500 font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          to="/info"
          className="text-white bg-transparent hover:bg-white hover:text-teal-500 font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          Info
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
