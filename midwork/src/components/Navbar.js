// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';


const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-light border-none" style={{ position: "sticky", height: "15vh" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/tohome">
          <img src="rm.jpg" alt="" width="150" height="60" />
        </Link>
        <div className="d-flex align-items-center">
          <Link to="/tohome" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          {user ? (
            <>
              <span className="nav-link">{user.userName}</span>
              {user.userType === "admin" && <Link to="/admin" className="nav-link">Dashboard</Link>}
              <button className="nav-link" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/signup" className="nav-link">Sign Up</Link>
              <Link to="/login" className="nav-link">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
