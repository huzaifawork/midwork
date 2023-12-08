import React from 'react';
import Dashboardi from './Dashboardi';
import "../css/dashj.css";

function Dashboardj() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <Dashboardi />
        </div>

        <div className="col-lg-9 col-md-8">
          {/* Main Content */}
          <div id="content" className="w-100">
            <div className="container-fluid">
              {/* First Row: Total Orders and Total Customers */}
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="card bg-danger" id="card1">
                    <div className="card-body bg-danger">
                      <h5 className="card-title">Total Orders</h5>
                      <p className="card-text">100</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card bg-secondary">
                    <div className="card-body bg-secondary">
                      <h5 className="card-title">Total Customers</h5>
                      <p className="card-text">50</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second Row: Total Products and Live Data */}
              <div className="row mt-4">
                <div className="col-lg-6 col-md-6">
                  <div className="card bg-info">
                    <div className="card-body bg-info">
                      <h5 className="card-title">Total Products</h5>
                      <p className="card-text">200</p>
                    </div>
                  </div>
                </div>
                <div  id="card4" className="col-lg-6 col-md-6" > {/* Adjust column width */}
                  <div style={
                    {width:"100%"
                    ,height:"100%"}
                  }className="card bg-dark">
                    <div className="card-body bg-dark mr-5">
                      <h5 className="card-title">Watch</h5>
                      <p className="card-text">Active users</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional content for the dashboard */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboardj;