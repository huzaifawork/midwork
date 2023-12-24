import React from 'react';
import Dashboardj from '../components/Dashboardj';
import "../css/analytics.css";
const Analytics = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Dashboard */}
        <div className="col-lg-2" style={{ marginLeft: '-10px', marginTop: '-45px' }}>
          <Dashboardj />
        </div>

        {/* Analytics Content */}
        <div className="col-lg-10">
          <div className="container mt-5">
            {/* Custom Cards */}
            <div className="row">
              {/* Custom Card 1 */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="card bg-dark mt-3"
                  style={{
                    width: '260px',
                    height: '130px',
                    // backgroundImage: 'url("card1.jpg")',
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="card-body" style={{ borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ fontSize: '24px', color: 'white', position: 'absolute', top: '10px', left: '10px' }}>
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <div style={{ color: 'white', fontSize: '20px', marginTop: '40px' }}>Total Revenue</div>
                    <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>$14.6K</div>
                  </div>
                </div>
              </div>

              {/* Custom Card 2 */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="card mt-3"
                  style={{
                    width: '260px',
                    height: '130px',
                    backgroundColor:"orange"
                    // backgroundImage: 'url("card2.jpg")',
                    // backgroundSize: 'cover',
                  }}
                >
                  <div className="card-body" style={{ borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ fontSize: '24px', color: 'white', position: 'absolute', top: '10px', left: '10px' }}>
                      <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div style={{ color: 'white', fontSize: '20px', marginTop: '40px' }}>Total Orders</div>
                    <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>576</div>
                  </div>
                </div>
              </div>

              {/* Custom Card 3 */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="card mt-3"
                  style={{
                    width: '260px',
                    height: '130px',
                    backgroundColor:"seagreen"
                    // backgroundImage: 'url("card3.jpg")',
                    // backgroundSize: 'cover',
                  }}
                >
                  <div className="card-body" style={{ borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ fontSize: '24px', color: 'white', position: 'absolute', top: '10px', left: '10px' }}>
                      <i className="fas fa-user"></i>
                    </div>
                    <div style={{ color: 'white', fontSize: '20px', marginTop: '40px' }}>Total Visits</div>
                    <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>4.8K</div>
                  </div>
                </div>
              </div>

              {/* Custom Card 4 */}
              <div className="col-lg-3 col-md-6">
                <div
                  className="card mt-3"
                  style={{
                    width: '260px',
                    height: '130px',
                    backgroundColor:"purple"
                    // backgroundImage: 'url("card4.jpg")',
                    // backgroundSize: 'cover',
                  }}
                >
                  <div className="card-body" style={{ borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                    <div style={{ fontSize: '24px', color: 'white', position: 'absolute', top: '10px', left: '10px' }}>
                      <i className="fab fa-facebook-messenger"></i>
                    </div>
                    <div style={{ color: 'white', fontSize: '20px', marginTop: '40px' }}>Product Activity</div>
                    <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginTop: '5px' }}>34K</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Card */}
            <div className="row mt-3">
              <div className="col-lg-12">
                <div className="card" style={{ width: '530px', marginLeft: '-535px' }}>
                  <div className="card-body" style={{ fontSize: '8px', padding: '2px', boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)' }}>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="/images/t-shirt1.webp" alt="Product 1" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                            <div>
                              <p style={{ fontSize: '6px', margin: '0' }}>P1</p>
                              <p style={{ fontSize: '6px', margin: '0' }}>+2 others</p>
                            </div>
                          </td>
                          <td style={{ fontSize: '6px' }}>$25.00</td>
                          <td>
                            <div className="status-indicator processing" style={{ fontSize: '6px', padding: '1px 2px' }}>Proc</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="/images/t-shirt2.webp" alt="Product 2" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                            <div>
                              <p style={{ fontSize: '6px', margin: '0' }}>P2</p>
                              <p style={{ fontSize: '6px', margin: '0' }}>+2 others</p>
                            </div>
                          </td>
                          <td style={{ fontSize: '6px' }}>$35.00</td>
                          <td>
                            <div className="status-indicator completed" style={{ fontSize: '6px', padding: '1px 2px' }}>Comp</div>
                          </td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-12">
                <div className="card" style={{ width: '1090px', marginLeft: '25px' }}>
                  <div className="card-body" style={{ fontSize: '12px', padding: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <h5 style={{ borderBottom: '3px solid orange', display: 'inline-block', padding: '5px', width: '100%' }}>Product Activity</h5>
                    <table className="table mt-3" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Product</th>
                          <th>Total Orders</th>
                          <th>Total Visits</th>
                          <th>Favourites</th>
                          <th>Checkouts</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="/images/t-shirt6.webp" alt="Product" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                          </td>
                          <td>Product Name</td>
                          <td>576</td>
                          <td>4.8K</td>
                          <td>15</td>
                          <td>30</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="/images/t-shirt12.webp" alt="Product" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                          </td>
                          <td>Product Name</td>
                          <td>576</td>
                          <td>4.8K</td>
                          <td>15</td>
                          <td>30</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="/images/t-shirt7.webp" alt="Product" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                          </td>
                          <td>Product Name</td>
                          <td>576</td>
                          <td>4.8K</td>
                          <td>15</td>
                          <td>30</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="/images/t-shirt8.webp" alt="Product" style={{ width: '20px', height: '20px', objectFit: 'cover' }} />
                          </td>
                          <td>Product Name</td>
                          <td>576</td>
                          <td>4.8K</td>
                          <td>15</td>
                          <td>30</td>
                        </tr>
                        {/* Add more rows as needed */}
                      </tbody>
                    </table>
                    <div className="text-right">
                      <button className="btn btn-danger dropdown">Today</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;