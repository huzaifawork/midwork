import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css"
import { Data } from '../App';

function Navbar() {
  const {cart,setcart}=useContext(Data)

  
  return (
    
    <nav className="navbar navbar-light border-none" style={{ position: "sticky" }}>
    
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/tohome">
          <img src="rm.jpg" alt="" width="150" height="60" />
        </Link>
        <div className="d-flex align-items-center">
          <Link to="/tohome" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/admin" className="nav-link">Admin</Link>
          
          <Link to="/cart" className="nav-link ">
            
            <i className="fa-solid fa-bag-shopping " style={{ fontSize: "20px", marginLeft: "10px" }}><span class="badge bg-secondary">{cart}</span></i>
          </Link>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


