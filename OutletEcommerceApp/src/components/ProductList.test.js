// src/components/ProductList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProductList from './ProductList';

test('mimics user selecting a product and adding it to the cart', () => {
  const handleAddToCart = jest.fn();
  const { getByLabelText, getByText } = render(<ProductList onAddToCart={handleAddToCart} />);

  const productA = getByLabelText(/Product A/i);
  fireEvent.click(productA);

  const addToCartButton = getByText(/Add to Cart/i);
  fireEvent.click(addToCartButton);

  expect(handleAddToCart).toHaveBeenCalledWith([{ id: 1, name: 'Product A', price: 50 }]);
});
