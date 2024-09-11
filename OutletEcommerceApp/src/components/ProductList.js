// src/components/ProductList.js
import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Product A', price: 50 },
  { id: 2, name: 'Product B', price: 30 },
  { id: 3, name: 'Product C', price: 20 },
  { id: 4, name: 'Product D', price: 60 },
  { id: 5, name: 'Product E', price: 40 },
];

const ProductList = ({ onAddToCart }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectProduct = (product) => {
    setSelectedProducts((prevSelected) => {
      const isAlreadySelected = prevSelected.some((p) => p.id === product.id);
      if (isAlreadySelected) {
        return prevSelected.filter((p) => p.id !== product.id);
      } else {
        return [...prevSelected, product];
      }
    });
  };

  const handleAddToCart = () => {
    onAddToCart(selectedProducts);
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <input
            type="checkbox"
            id={`product-${product.id}`}
            onChange={() => handleSelectProduct(product)}
          />
          <label htmlFor={`product-${product.id}`}>{product.name} - ${product.price}</label>
        </div>
      ))}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductList;
