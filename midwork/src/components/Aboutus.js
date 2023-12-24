import React from 'react';
import '../css/about.css';

function Aboutus() {
  return (
    <div id="con" className="container text-center">
      <div className="heading">
        <h1>About Us</h1>
      </div>

      <div className="hero-section " >
        <h2 style={{marginLeft:"500px"}}>Welcome To Our Shop</h2>
        <p style={{ color: 'black', marginLeft:"450px", lineHeight:"20px" }}>
          This shop is dedicated to providing you with the best selection of items related to style, fashion, and sports. We've created a user-friendly environment to ensure you have the best shopping experience, including a hassle-free returns and refund policy. Feel free to share your reviews of the items you purchase here. We offer worldwide delivery to your specified location, and we accept a variety of international payment methods. <b>Thank You</b>
        </p>
      </div>
    </div>
  );
}

export default Aboutus;