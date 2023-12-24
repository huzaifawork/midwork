import React, { useEffect, useState } from 'react';
import { getProduct } from '../services/api';
import Dashboardj from './Dashboardj';

function See() {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    const result = await getProduct();
    setProductData(result.data);
  };

  return (
    <div className="container-fluid mt-5" >
      <div className="row">
        {/* Dashboard */}
        <div className="col-lg-3" style={{marginLeft:"-10px", marginTop:"-45px"}} >
          <Dashboardj />
        </div>

        {/* See Content */}
        <div className="col-lg-9" style={{marginLeft:"-100px",marginTop:"69px"}}>
          <div
            className="card p-4 "
            style={{
              borderRadius: '15px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              backgroundImage: 'url("card1.jpg")', // Replace with the path to your image
              backgroundSize: 'cover',
            }}
          >
            <h1 className="mb-4 text-center text-dark">Product Details</h1>
            <table className="table table-borderless table-responsive text-dark" >
              <thead >
                <tr>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Description</th>
                  <th scope="col">Product Category</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Product Image</th>
                </tr>
              </thead>
              <tbody>
                {ProductData.map((details) => (
                  <tr key={details.ProductId}>
                    <td className="text-dark">{details.ProductId}</td>
                    <td className="text-dark">{details.ProductName}</td>
                    <td className="text-dark">{details.ProductDescription}</td>
                    <td className="text-dark">{details.ProductCategory}</td>
                    <td className="text-dark" style={{ color: 'neon' }}>
                      {details.ProductPrice}
                    </td>
                    <td>
                      <img
                        src={details.ProductImage}
                        alt={details.ProductName}
                        className="img-fluid"
                        style={{ maxWidth: '50px', maxHeight: '50px', objectFit: 'cover' }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default See;