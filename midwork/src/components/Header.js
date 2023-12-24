import React from 'react';
import { Link } from 'react-router-dom';
import "../css/header.css"
function Header() {
  return (
    <>
      <Link to="https://www.realmadrid.com/en" style={{ textDecoration: "none" }}>
        <div
          style={{
            overflow: "hidden", // Add overflow: hidden to this container
          }}
        >
          <p id='header-text'
            style={{
              color: "white",
              backgroundColor: "#102341",
              textAlign: "center",
              margin: "0",
              padding: "0",
              height: "40px",
              paddingTop: "10px",textDecoration: "none"
            }}
          >
            Register for free here and get a discount on your favorite items
          </p>
        </div>
      </Link>
    </>
  );
}

export default Header;