// import React,{useContext} from 'react'
// import { useState } from 'react';
// import "../css/viewp.css"; // Add a CSS file for this component
// import { Data } from '../App';
// function See() {
//   const{parg}=useContext(Data);
//   const {cart,setcart}=useContext(Data)
//   const handleonclick=()=>{
//     setcart(cart+1)
//   }
//   const [products, setProducts] = useState([
//         {
//           id: 181,
//           name: 'White Training Kit',
//           description: 'training kit 23/24',
//           image: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMZ0127_03_ee911357-62f2-4d35-a862-fdc9d85b2846_720x.jpg?v=1685962973', // Replace with the actual image URL
//           category: 'Training',
//           size: 'M L S XL XXLX',
//           price: '$50',
//         },
//         {
//           id: 2,
//           name: 'Black Training Kit',
//           description: 'Away Training KIt 23/24',
//           image: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMZ0130-02_720x.jpg?v=1689091318', // Replace with the actual image URL
//           category: 'Training',
//           size: 'L M S XXL',
//           price: '$30',
//         },
//         {
//           id: 3,
//           name: 'Casual Shirt',
//           description: 'Casual Shirt For Fashion',
//           image: 'https://shop.realmadrid.com/cdn/shop/files/RMCFMZ0135-03_720x.jpg?v=1691663625', // Replace with the actual image URL
//           category: 'T-Shirts',
//           size: 'All Available',
//           price: '$15',
//         },
//         {
//           id: 4,
//           name: 'Home Kit 23/24',
//           description: 'Full sleeve Shirt for home matches ',
//           image: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMZ0128_03_6d5d23f8-5137-4fa7-b859-bf97c9a19729_720x.jpg?v=1685963023', // Replace with the actual image URL
//           category: 'T-shirts',
//           size: 'All Available',
//           price: '$25',
//         },
//         {
//           id: 5,
//           name: 'Full Sleeve Third Kit',
//           description: 'For Neutral Venues',
//           image: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMZ0131-02_720x.jpg?v=1689091335', // Replace with the actual image URL
//           category: 'T-Shirts',
//           size: 'S L M',
//           price: '$35',
//         },
//         {
//           id: 6,
//           name: 'Casual Black Shirts',
//           description: 'Half Sleeve Shirt Black Color Fashion',
//           image: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMZ0134-02_720x.jpg?v=1690988678', // Replace with the actual image URL
//           category: 'T-Shirts',
//           size: 'S M L XL',
//           price: '$55',
//         },
//         {
//           id: 7,
//           name: 'Full Sleeve Home KIt 23/24',
//           description: 'Full Sleeve Home kit For the present Season',
//           image: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMZ0129_03_c4409c26-cf19-4b4a-b215-e9efd170f256_720x.jpg?v=1685963081', // Replace with the actual image URL
//           category: 'T-Shirts',
//           size: 'S M',
//           price: '$100',
//         },
//         {
//           id: 198,
//           name: 'Scarf 23/24 Season',
//           description: 'Scarf For Playing Matches',
//           image: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMK0068-03_720x.jpg?v=1685973681', // Replace with the actual image URL
//           category: 'Accessories',
//           size: "Available",

          
//           price: '$10',
//         },
//         {
//           id: 199,
//           name: 'Limited Edition Cap',
//           description: 'This item is here for a short time',
//           image: 'https://shop.realmadrid.com/cdn/shop/products/RMCFMH0073-02_720x.jpg?v=1685973669', // Replace with the actual image URL
//           category: 'Accessories',
//           size: '50 pieces',
//           price: '$20',
//         },
//         // Add more products here
//       ]);
      
//   return (
//     <div className="container">
//       <div className="row">
//         {products.map((product) => (
//           <div key={product.id} className="col-lg-6  col-sm-6 mt-4">
//             <div className="card">
//               <img  style={{width:"100%", height:"300px"}}src={product.image} alt={product.name} className="card-img-top" />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                   <p><strong>{parg}</strong> {product.price}</p>
//                 </div>
//                 <button type="button" className="btn btn-primary" onClick={handleonclick}>Add to Cart</button>
//               </div>
//             </div>
          
//         ))}
//       </div>
//     </div>
//   );
// }


// export default See;

// See.js (view products page)
import React, { useEffect, useState } from 'react';
import { getProduct } from '../services/api';

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
    <div className='container mt-5'>
      <table className='table table-bordered table-info '>
        <thead>
          <tr>
            <th className="text-warning"scope='col'>Product Id</th>
            <th className="text-warning"scope='col'>Product Name</th>
            <th className="text-warning"scope='col'>Product Description</th>
            <th className="text-warning"scope='col'>Product Category</th>
            <th className="text-warning"scope='col'>Product Price</th>
            <th className="text-warning"scope='col'>Product Image</th>
          </tr>
        </thead>
        <tbody>
          {ProductData.map((details) => (
            <tr key={details.ProductId}>
              <td className='text-danger'>{details.ProductId}</td>
              <td className='text-danger'>{details.ProductName}</td>
              <td className='text-danger'>{details.ProductDescription}</td>
              <td className='text-danger'>{details.ProductCategory}</td>
              <td className='text-danger'>{details.ProductPrice}</td>
              <td>
                <img
                  src={details.ProductImage}
                  alt={details.ProductName}
                  className='img-fluid'
                  style={{ maxWidth: '50px', maxHeight: '50px', objectFit: 'cover' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default See;