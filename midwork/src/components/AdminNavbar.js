import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

const AdminNavbar = () => {
  return (
    <div className="card" style={{ borderRadius: '10px', border: '2px solid #ddd', backgroundColor: 'white' , position:"fixed"}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" style={{ right: '5px', left: '230px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="container-fluid">
          {/* Search field */}
          <div className="card p-2" style={{ width: '450px', borderRadius: '10px',borderColor:"transparent" }}>
            <div className="input-group">
              <span className="input-group-text bg-light border-0" style={{ borderRadius: '10px 0 0 10px' }}>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input type="text" className="form-control border-0" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)', border: 'none', borderRadius: '0 10px 10px 0', background: 'transparent' }} placeholder="Type to search" />
            </div>
          </div>

          {/* Icons and profile picture */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="card p-2" style={{ borderRadius: '50%', width: '45px', height: '45px', overflow: 'hidden', border: '2px solid #fff' }}>
                  <FontAwesomeIcon icon={faBell} size="lg" />
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="card p-2" style={{ borderRadius: '50%', width: '45px', height: '45px', overflow: 'hidden', border: '2px solid #fff' }}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <div className="card p-2" style={{ borderRadius: '50%', width: '60px', height: '60px', overflow: 'hidden', border: '2px solid #fff' }}>
                  {/* Use your actual profile image source */}
                  {/* <img src="pp.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' ,marginTop:"-8px", border:"2px solid black"}} /> */}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
