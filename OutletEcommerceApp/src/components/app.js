// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddToCart = (products) => {
    setSelectedProducts(products);
  };

  return (
    <div>
      <ProductList onAddToCart={handleAddToCart} />
      <Checkout selectedProducts={selectedProducts} />
    </div>
  );
};

export default App;
// src/components/Checkout.js