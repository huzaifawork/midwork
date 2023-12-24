import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashboardj from '../components/Dashboardj'; // Import your Dashboardj component
import { url } from '../services/api';
function UpdateProduct() {
  const [productId, setProductId] = useState('');
  const [productData, setProductData] = useState({
    ProductName: '',
    ProductDescription: '',
    ProductCategory: '',
    ProductPrice: '',
    ProductImage: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${url}/dashboard/updateproduct/${productId}`, productData);
      console.log('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleFetchDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/dashboard/getproduct/${productId}`);
      const existingProductData = response.data;
      setProductData(existingProductData);
    } catch (error) {
      console.error('Error fetching product details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        {/* Dashboard */}
        <div className='col-lg-2' style={{ padding: 0 , marginTop:"-45px",marginLeft:"-10px"}}>
          {/* Include the Dashboard content here */}
          <Dashboardj />
        </div>

        {/* UpdateProduct Content */}
        <div className='col-lg-6'>
          <div className='container'>
            <div className='card p-4' style={{ width:"800px", borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f8f9fa' , marginTop:"50px", marginLeft:"150px"}}>
              <h1 className='mb-4 text-center'>Update Product</h1>
              <div className='mb-3'>
                <label className='form-label'>Product ID to Update:</label>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control'
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                  />
                  <button className='btn btn-primary' onClick={handleFetchDetails} disabled={loading}>
                    {loading ? 'Fetching...' : 'Fetch Details'}
                  </button>
                </div>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Product Name:</label>
                <input type='text' className='form-control' name='ProductName' value={productData.ProductName} onChange={handleInputChange} />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Product Description:</label>
                <input type='text' className='form-control' name='ProductDescription' value={productData.ProductDescription} onChange={handleInputChange} />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Product Category:</label>
                <input type='text' className='form-control' name='ProductCategory' value={productData.ProductCategory} onChange={handleInputChange} />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Product Price:</label>
                <input type='text' className='form-control' name='ProductPrice' value={productData.ProductPrice} onChange={handleInputChange} />
              </div>
              <div className='mb-3'>
                <label className='form-label'>Product Image:</label>
                <input type='text' className='form-control' name='ProductImage' value={productData.ProductImage} onChange={handleInputChange} />
              </div>
              <button className='btn btn-warning form-control' onClick={handleUpdate}>
                Update Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;