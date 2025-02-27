import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // Import the context to toggle theme

const Navbar = ({ onToggleTheme }) => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'green-white' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <strong>My App</strong>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-secondary" onClick={onToggleTheme}>
          {theme === 'green-white' ? 'Switch to Green-Black' : 'Switch to Green-White'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
