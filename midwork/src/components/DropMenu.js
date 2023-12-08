
import React, { useState } from 'react';
import "../css/Drop.css";
import { Link } from 'react-router-dom';

function DropMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <div id="dropmenu">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link to="/kits&shirts"style={{fontSize:"25px", textDecoration:"none", color:"black"}}>
            KITS
          {/* <a id="nav1" className="navbar-brand" href="#">KITS</a> */}
        </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`} id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/shopbyplayer" className="ms-4" style={{fontSize:"25px", textDecoration:"none", color:"black"}}>
                 SHOPBYPLAYER
                {/* <a className="nav-link active" href="#">SHOPBYPLAYER</a> */}
              </Link>
            </li>
              <li className="nav-item" >
              <Link to="/training" className="ms-4" style={{fontSize:"25px", textDecoration:"none", color:"black"}}>

                TRAINING 
              </Link>
              </li>
           {/* <li className="nav-item dropdown"> */}
                {/* <a className="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" > */}
                  {/* FASHION */}
                {/* </a> */}
                {/* <div className="dropdown-menu"> */}
                  {/* <Link to="/fashion/clothing">Clothing</Link> */}
                  {/* <Link to="/fashion/footwear">Footwear</Link> */}
                  {/* Add more fashion links here */}
                {/* </div> */}
              {/* </li> */}
              <li className="nav-item">
                <Link to="/accessories" className="ms-4" style={{fontSize:"25px", textDecoration:"none", color:"black"}}>
                   ACCESSORIES
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/sale"className="ms-4" style={{fontSize:"25px", textDecoration:"none", color:"black"}}>
              SALE

              </Link>
                {/* <a className="nav-link active" aria-disabled="true">SALE</a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropMenu;
