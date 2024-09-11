// src/components/Checkout.js
import React from 'react';

const Checkout = ({ selectedProducts }) => {
  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h2>Checkout</h2>
      {selectedProducts.length === 0 ? (
        <p>No products selected.</p>
      ) : (
        <div>
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>{product.name} - ${product.price}</li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default Checkout;
