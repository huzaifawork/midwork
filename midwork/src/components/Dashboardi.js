import React from 'react';
import "../css/dash.css";
import { Link, Route, Routes } from 'react-router-dom';

function Dashboardi() {
  return (
    <nav id="sidebar" style={{top:"18%", height:"78vh", position:"sticky"}} className="bg-info">
      <div className="p-5">  
        <a href="/" className="navbar-brand d-flex align-items-center ps-3">
          <img src="/logo.jpg" alt="" width="45" height="45" className="mr-2 rounded-circle " />
          <span className="font-weight-bold text-uppercase ms-2">Dashboard</span>
        </a>
      </div>
      <ul className="list-unstyled components ms-5">
        <li>
          <a href="/">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        
        <li>
          <a href="/profile">
            <i className="fas fa-user"></i> <del>Profile
            </del></a>
        </li>
        <li>
          <a href="/wallet">
            <i className="fas fa-wallet"></i><del> Wallet
            </del></a>
        </li>
        <li className="dropdown">
          <button id="dropdownMenuButton1"className="btn btn-secondary dropdown-toggle border-none" data-bs-toggle="dropdown">
            <i className="fas fa-chart-bar"></i> Products Management
          </button>
          <ul className="dropdown-menu">
              <Link to="/dashboard/addproduct">

            <li><a className="dropdown-item" href="/add-products">Add Products</a></li>
              </Link>
              <Link to="/dashboard/deleteproduct">

            <li><a className="dropdown-item" href="/delete-products">Delete Products</a></li>
              </Link>
              <Link to="/dashboard/updateproduct">

            <li><a className="dropdown-item" href="/update-products">Update Products</a></li>
              </Link>
              <Link to="/dashboard/viewproduct">

            <li><a className="dropdown-item" href="/view-products">View Products</a></li>
              </Link>
          </ul>
        </li>
        <li>
          <a href="/tasks">
            <i className="fas fa-tasks"></i> <del>Tasks
            </del></a>
        </li>
        <li>
          <a href="/settings">
            <i className="fas fa-cog"></i><del> Settings
            </del> </a>
        </li>
        <li>
          <a href="/help">
            <i className="fas fa-question-circle"></i> <del>Help
            </del></a>
        </li>
      </ul>
      <div className="p-3"></div>
     
    </nav>
  );
}

export default Dashboardi;
