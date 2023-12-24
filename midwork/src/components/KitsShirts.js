import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../services/api'; 
function KitsShirts() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${url}/dashboard/addproduct`);
      setProductList(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container">
    
      <h1 className="text-center mt-4 mb-4" style={{ textAlign: "center", margin: "auto", color: "darkblue", fontSize: "40px" }}>Kits & Shirts</h1>
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-3" key={product.ProductId}>
            <div className="card mb-3" style={{ width: "100%", justifyContent: "space-between", height: "90%", backgroundColor: "#f0f0f0" }}>
              <img
                src={product.ProductImage}
                alt=""
                className="card-img-top img-fluid"
                style={{ width: '250px', height: '250px', textAlign: "center" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "16px", fontWeight: "bold" }}>{product.ProductName}</h5>
                <p className="card-text" style={{ textAlign: "center", margin: "auto", fontSize: "14px", color: "gray" }}>{product.ProductDescription}</p>
                <p className="card-text" style={{ textAlign: "center", margin: "auto", fontSize: "18px", fontWeight: "bold" }}>
                  {product.ProductPrice} €
                  <hr style={{ borderColor: "red", height: "2px", margin: "10px 0" }} />
                </p>
                {/* ... (other product details) */}
              </div>
            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default KitsShirts;