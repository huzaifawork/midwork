import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      await axios.put(`http://localhost:5000/dashboard/updateproduct/${productId}`, productData);
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
    <div className='container mt-5'>
      <div className='card p-4' style={{ maxWidth: '500px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f8f9fa' }}>
        <h1 className='mb-4 text-center'>Update Product</h1>
        <label className='form-label mb-2'>Product ID to Update:</label>
        <div className='input-group mb-3'>
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
        <label className='form-label mb-2'>Product Name:</label>
        <input type='text' className='form-control mb-3' name='ProductName' value={productData.ProductName} onChange={handleInputChange} />
        <label className='form-label mb-2'>Product Description:</label>
        <input type='text' className='form-control mb-3' name='ProductDescription' value={productData.ProductDescription} onChange={handleInputChange} />
        <label className='form-label mb-2'>Product Category:</label>
        <input type='text' className='form-control mb-3' name='ProductCategory' value={productData.ProductCategory} onChange={handleInputChange} />
        <label className='form-label mb-2'>Product Price:</label>
        <input type='text' className='form-control mb-3' name='ProductPrice' value={productData.ProductPrice} onChange={handleInputChange} />
        <label className='form-label mb-2'>Product Image:</label>
        <input type='text' className='form-control mb-3' name='ProductImage' value={productData.ProductImage} onChange={handleInputChange} />
        <button className='btn btn-warning form-control' onClick={handleUpdate}>
          Update Product
        </button>
      </div>
    </div>
  );
}

export default UpdateProduct;






