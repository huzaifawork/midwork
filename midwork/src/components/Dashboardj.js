import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faShoppingBag, faCheck, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashj.css'; // Import your custom CSS file
import AdminNavbar from "../components/AdminNavbar";
import { Link } from 'react-router-dom';
// ... (your existing imports)

const Dashboardj = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div id="sidebar" className="d-flex flex-column align-items-start p-3 text-white  sidebar " style={{ width: "220px", height: "100vh", backgroundColor: "#fff", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px" , }}>
      <Link to="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src="rm.jpg" alt="Logo" className="logo" width="100px" style={{ marginTop: "20px", marginLeft: "10px" }} />
      </Link>
      <ul className="nav flex-column">
        <li className={`nav-item ${activeItem === 'dashboard' ? 'active' : ''}`}>
          <Link to="/admin" className={`nav-link mt-5 ${activeItem === 'dashboard' ? 'active-link' : ''}`} onClick={() => handleItemClick('dashboard')}>
            <FontAwesomeIcon icon={faThLarge} className="me-2" />
            Dashboard
          </Link>
        </li>
        <li className={`nav-item ${activeItem === 'products' ? 'active' : ''}`}>
          <div className="accordion" id="productsAccordion">
            <Link className={`nav-link mt-2 ${activeItem === 'products' ? 'active-link' : ''}`} data-bs-toggle="collapse" to="#productsCollapse" role="button" aria-expanded={activeItem === 'products'} aria-controls="productsCollapse" onClick={() => handleItemClick('products')}>
              <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
              Products
            </Link>
            <div className={`collapse ${activeItem === 'products' ? 'show' : ''}`} id="productsCollapse">
              <ul className="nav flex-column">
                
              <li className="nav-item">
                  <a href="#" className="nav-link text-dark mt-2">
                   . Collections
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark mt-2">
                    . Drafts
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark mt-2">
                    . Releases
                  </a>
                </li>
                <li className="nav-item">
                <Link className='nav-link text-dark mt-2' to="/dashboard/addproduct">
                . Add Products
                </Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link text-dark mt-2' to="/dashboard/deleteproduct">
                . Delete Products
                </Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link text-dark mt-2' to="/dashboard/viewproduct">
                . View Products
                </Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link text-dark mt-2' to="/dashboard/updateproduct">
                . Update Products
                </Link>
                </li>
 
              </ul>
            </div>
          </div>
        </li>
        <li className={`nav-item ${activeItem === 'orders' ? 'active' : ''}`}>
          <div className="accordion" id="ordersAccordion">
            <Link className={`nav-link mt-2 ${activeItem === 'orders' ? 'active-link' : ''}`} data-bs-toggle="collapse" to="#ordersCollapse" role="button" aria-expanded={activeItem === 'orders'} aria-controls="ordersCollapse" onClick={() => handleItemClick('orders')}>
              <FontAwesomeIcon icon={faCheck} className="me-2" />
              Orders
            </Link>
            <div className={`collapse ${activeItem === 'orders' ? 'show' : ''}`} id="ordersCollapse">
              <ul className="nav flex-column">
              <li className="nav-item">
                  <a href="#" className="nav-link text-dark mt-2">
                   . Total Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark mt-2">
                    . Trackers
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-dark mt-2">
                    . Customers
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
        </li>
        <li className={`nav-item ${activeItem === 'customers' ? 'active' : ''}`}>
          <Link to="#" className={`nav-link mt-2 ${activeItem === 'customers' ? 'active-link' : ''}`} onClick={() => handleItemClick('customers')}>
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Customers
          </Link>
        </li>
        <li className={`nav-item ${activeItem === 'payouts' ? 'active' : ''}`}>
          <Link to="#" className={`nav-link mt-2 ${activeItem === 'payouts' ? 'active-link' : ''}`} onClick={() => handleItemClick('payouts')}>
            <FontAwesomeIcon icon={faWallet} className="me-2" />
            Payouts
          </Link>
        </li>
      </ul>
      <AdminNavbar/>
    </div>
  );
};

export default Dashboardj;


              
              
            