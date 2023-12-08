import React, { useState } from 'react';
import { addproduct } from '../services/api';

function Addp() {
  // Define and initialize productList and setProductList
  const [productList, setProductList] = useState([]);

  const [ProductData, setProductData] = useState({
    ProductId: "",
    ProductName: "",
    ProductDescription: "",
    ProductCategory: "",
    ProductPrice: "",
    ProductImage: "",
  });

  const { ProductId, ProductName, ProductDescription, ProductCategory, ProductPrice, ProductImage } = ProductData;

  const handleChange = (e) => {
    setProductData({ ...ProductData, [e.target.name]: e.target.value });
  };

  const addDesc = async (e) => {
    e.preventDefault();
    // Update productList using setProductList
    setProductList([...productList, ProductData]);
    // Call addproduct with ProductData
    await addproduct(ProductData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card p-4" style={{ maxWidth: '400px', borderRadius: '50px', boxShadow: '20 14px 50px rgba(0,0,0,0.5)', backgroundColor: '#f8f9fa' }}>
        <h1 className="mb-4 text-center text-danger">ADD PRODUCTS</h1>
        <form>
          {/* ... Your form inputs */}
          <button className="btn btn-dark form-control text-warning" onClick={(e) => addDesc(e)}>
            ADD PRODUCT
          </button>
<div className="mb-3">
<label htmlFor="ProductId" className="form-label text-secondary">
PRODUCT ID
</label>
<input
type="text"
id="ProductId"
className="form-control"
name="ProductId"
onChange={(e) => handleChange(e)}
/>

</div>

<div className="mb-3">
<label htmlFor="ProductName" className="form-label text-secondary">
PRODUCT NAME
</label>
<input
type="text"
id="ProductName"
className="form-control"
name="ProductName"
onChange={(e) => handleChange(e)}
/>
</div>

<div className="mb-3">
  <label htmlFor="ProductDescription" className="form-label text-secondary">PRODUCT DESCRIPTION</label>
  <input type="text" id="ProductDescription" className="form-control" name="ProductDescription" onChange={(e) => handleChange(e)} />
</div>

<div className="mb-3">
  <label htmlFor="ProductCategory" className="form-label text-secondary">PRODUCT CATEGORY</label>
  <input type="text" className="form-control" id='ProductCategory' name="ProductCategory" onChange={(e) => handleChange(e)} />
</div>

<div className="mb-3">
  <label htmlFor="ProductPrice" className="form-label text-secondary">PRODUCT PRICE</label>
  <input type="text" className="form-control" name="ProductPrice" id='ProductPrice' onChange={(e) => handleChange(e)} />
</div>

<div className="mb-3">
  <label htmlFor="ProductImage" className="form-label text-secondary">PRODUCT IMAGE</label>
  <input type="url" className="form-control" name="ProductImage" id='ProductImage' onChange={(e) => handleChange(e)} />
</div>



        </form>
      </div>
    </div>
  );
}

export default Addp;

