import React from 'react';
import "../css/footer.css"
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="py-5 bg-tertiary dark text-dark overflow-hidden" style={{height:"400px"}}>
      <div className="row">
        <div className="col-2 ms-5">
          <h5>Shop Categories</h5>
          <ul className="nav flex-column ">
            <li className="nav-item mb-2"><a href="/category/electronics" className="nav-link p-0 text-dark ">Mens</a></li>
            <li className="nav-item mb-2"><a href="/category/clothing" className="nav-link p-0 text-dark ">Women</a></li>
            <li className="nav-item mb-2"><a href="/category/furniture" className="nav-link p-0 text-dark ">Children</a></li>
            {/* Add more categories as needed */}
          </ul>
        </div>

        <div className="col-2">
          <h5>Customer Service</h5>
          <ul className="nav flex-column text-dark " >
          <Link to="/contactus">

            <li className="nav-item mb-2 text-dark "><a href="/contact" className="nav-link p-0 text-dark ">Contact Us</a></li>
          </Link>
          <Link to="/login">

            <li className="nav-item mb-2 text-dark "><a href="/contact" className="nav-link p-0 text-dark ">Register Here</a></li>
          </Link>
          <Link to="/faqs">

            <li className="nav-item mb-2 text-dark "><a href="/faqs" className="nav-link p-0 text-dark ">FAQs</a></li>
          </Link>
          <Link to="/r&r">

            <li className="nav-item mb-2 text-dark "><a href="/return-policy" className="nav-link p-0 text-dark ">Return Policy</a></li>
          </Link>
          <Link to="/t&co">

            <li className="nav-item mb-2 text-dark "><a href="/return-policy" className="nav-link p-0 text-dark ">Terms And Conditions</a></li>
          </Link>
          <Link to="/signup">

            <li className="nav-item mb-2 text-dark "><a href="/return-policy" className="nav-link p-0 text-dark ">Sign up </a></li>
          </Link>
            {/* Add more customer service links as needed */}
            <Link to="/history">

            <li className="nav-item mb-2 text-dark "><a href="/return-policy" className="nav-link p-0 text-dark ">History </a></li>
          </Link>
          </ul>
        </div>

        <div className="col-2">
          <h5>My Account</h5>
          <ul className="nav flex-column text-dark ">
            <li className="nav-item mb-2 text-dark "><a href="/login" className="nav-link p-0 text-dark ">Login</a></li>
            <li className="nav-item mb-2 text-dark "><a href="/signup" className="nav-link p-0 text-dark ">Sign Up</a></li>
            <Link to="/view-user"> 

            <li className="nav-item mb-2 text-dark "><a href="/my-orders" className="nav-link p-0 text-dark ">My Orders</a></li>
            </Link>
            {/* Add more account links as needed */}
            <Link to="userdelete">
            <li className="nav-item mb-2 text-dark "><a href="/my-orders" className="nav-link p-0 text-dark ">Delete User</a></li>

            </Link>
          </ul>
        </div>

              </div>

      <div className="d-flex justify-content-between text-dark  py-4 my-4 border-top">
        <p className="ms-5">© {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.</p>
        <ul className="list-unstyled d-flex text-dark">
          <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-twitter"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-instagram"></i></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><i className="fab fa-facebook"></i></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
