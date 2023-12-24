import React from 'react';
import "../css/Collections.css";
import { Link } from 'react-router-dom';

function Collections() {
  return (
    <div className="side-collection">
      <h1></h1>
      <div className="card-deck d-flex">
        <div className="col1 card mt-4"> {/* Add margin-top for spacing */}
          Training Kits
          <img className="card-img-top" src="Shirtcol.jpg" alt="Card image cap" style={{ width: "100%", height: "auto" }} />
          

          <button type="button" className="btn btn-primary">Click Here To See →</button>
          
        </div>
        <div className="col1 card mt-4"> {/* Add margin-top for spacing */}
          Jackets & Hoodies
          <img className="card-img-top" src="Jacketcol.jpg" alt="Card image cap" style={{ width: "100%", height: "auto" }} />
          <button type="button" className="btn btn-primary">Click Here To See →</button>
        </div>
        <div className="col1 card mt-4"> {/* Add margin-top for spacing */}
          Accessories
          <img className="card-img-top" src="Ballcol.jpg" alt="Card image cap" style={{ width: "100%", height: "auto" }} />
          <button type="button" className="btn btn-primary">Click Here To See →</button>
        </div>
      </div>
    </div>
  );
}

export default Collections;