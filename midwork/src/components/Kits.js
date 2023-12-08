import React from 'react';
import "../css/kits.css";

function Kits() {
  return (
    <div>
      <h2 id='kits'>Kits / / / /</h2>
      <div className="container-fuid">
        <div className="picture-container d-flex justify-content-center align-items-center">
          <div className="image-box">
            <img id="kit1" src='https://shop.realmadrid.com/cdn/shop/files/shop_by_gender_male_b19a7681-1ede-49d3-8245-75ea4610b422_330x.jpg?v=1684689837' alt="Kit 1" className="kit-image" />
            <div className="box">
              <p>Real Madrid Training Kit</p>
              <button className="kit-button">Shop Now</button>
            </div>
          </div>
          <div className="image-box">
            <img id="kit2"src='Kit2.jpg' alt="Kit 2" className="kit-image" />
            <div className="box">
              <p>Real Madrid Away Kit</p>
              <button className="kit-button">Shop Now</button>
            </div>
          </div>
        </div>
        <div className="picture-container d-flex justify-content-center align-items-center">
          <div className="image-box">
            <img id="kit3"src='Kit3.jpg' alt="Kit 3" className="kit-image" />
            <div className="box">
              <p>Real Madrid Third Kit</p>
              <button className="kit-button">Shop Now</button>
            </div>
          </div>
          <div className="image-box">
            <img id="kit4" src='https://shop.realmadrid.com/cdn/shop/files/gk-pod-misa_535x.jpg?v=1694523452' alt="Kit 4" className="kit-image" />
            <div className="box">
              <p>Goalkeeper Kit</p>
              <button className="kit-button">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kits;
