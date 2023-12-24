import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      image: 'https://placekitten.com/200/300',
      category: 'Jackets',
      size: 'M',
      price: '$50',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      image: 'https://placekitten.com/200/300',
      category: 'T-shirts',
      size: 'L',
      price: '$30',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      image: 'https://placekitten.com/200/300',
      category: 'Accessories',
      size: 'One Size',
      price: '$15',
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts, ProductContext }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
export default ProductProvider; // Export the ProductContext