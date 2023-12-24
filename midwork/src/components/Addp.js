import React, { useState } from 'react';
import { addproduct } from '../services/api';
import Dashboardj from './Dashboardj';

const Addp = () => {
  const [ProductData, setProductData] = useState({
    ProductId: '',
    ProductName: '',
    ProductDescription: '',
    ProductCategory: '',
    ProductPrice: '',
    ProductImage: '',
  });

  const handleChange = (e) => {
    setProductData({ ...ProductData, [e.target.name]: e.target.value });
  };

  const addDesc = async (e) => {
    e.preventDefault();
    await addproduct(ProductData);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-3" style={{marginLeft:"-10px", marginTop:"-45px"}}>
          <Dashboardj />
        </div>
        <div className="col-lg-9">
          <div className="card p-3" style={{marginLeft:"-100px", marginTop:"50px",maxHeight: '550px', overflow: 'auto' }} >
            <div className="card-body" >
              
              <form>
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
                  <label htmlFor="ProductDescription" className="form-label text-secondary">
                    PRODUCT DESCRIPTION
                  </label>
                  <input
                    type="text"
                    id="ProductDescription"
                    className="form-control"
                    name="ProductDescription"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="ProductCategory" className="form-label text-secondary">
                    PRODUCT CATEGORY
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ProductCategory"
                    name="ProductCategory"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="ProductPrice" className="form-label text-secondary">
                    PRODUCT PRICE
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="ProductPrice"
                    id="ProductPrice"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="ProductImage" className="form-label text-secondary">
                    PRODUCT IMAGE
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    name="ProductImage"
                    id="ProductImage"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <button className="btn btn-dark form-control text-warning" onClick={(e) => addDesc(e)}>
                  ADD PRODUCT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addp;