import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl">Project Management System</h1>
      <nav className="mt-2">
        <Link to="/" className="mr-4">Login</Link>
        <Link to="/dashboard" className="mr-4">Dashboard</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

