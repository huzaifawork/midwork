import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Delp() {
  const [productId, setProductId] = useState('');
  const [productDetails, setProductDetails] = useState(null);

  const handleInputChange = (e) => {
    setProductId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/dashboard/deleteproduct/${productId}`);
      console.log('Product deleted successfully!');
      // Optionally, clear the form or update the list of products after deletion
      setProductId('');
      setProductDetails(null);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleFetchDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/dashboard/getproduct/${productId}`);
      setProductDetails(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
      setProductDetails(null);
    }
  };

  useEffect(() => {
    if (productId) {
      handleFetchDetails();
    } else {
      setProductDetails(null);
    }
  }, [productId]);

  return (
    <div className='container mt-5'>
    
      <div className='card p-4' style={{ maxWidth: '600px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f8f9fa' }}>
        <h1 className='mb-4 text-center'>Delete Product</h1>
        <div className='mb-3'>
          <label className='form-label'>Product ID to Delete:</label>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              value={productId}
              onChange={handleInputChange}
            />
            <button className='btn btn-primary' onClick={handleFetchDetails}>
              Fetch Details
            </button>
          </div>
        </div>

        {productDetails && (
          <div>
            <h4>Product Details:</h4>
            <table className='table table-bordered table-dark'>
              <thead>
                <tr>
                  <th scope='col'>Product Id</th>
                  <th scope='col'>Product Name</th>
                  <th scope='col'>Product Description</th>
                  <th scope='col'>Product Category</th>
                  <th scope='col'>Product Price</th>
                  <th scope='col'>Product Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{productDetails.ProductId}</td>
                  <td>{productDetails.ProductName}</td>
                  <td>{productDetails.ProductDescription}</td>
                  <td>{productDetails.ProductCategory}</td>
                  <td>{productDetails.ProductPrice}</td>
                  <td>
                    <img
                      src={productDetails.ProductImage}
                      alt={productDetails.ProductName}
                      className='img-fluid'
                      style={{ maxWidth: '50px', maxHeight: '50px', objectFit: 'cover' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <button className='btn btn-danger form-control mt-3' onClick={handleDelete}>
              Delete Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Delp;
