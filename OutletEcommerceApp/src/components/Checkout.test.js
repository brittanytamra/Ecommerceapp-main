// src/components/Checkout.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout from './Checkout';

test('calculates total correctly when products are selected', () => {
  const selectedProducts = [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 30 },
  ];

  render(<Checkout selectedProducts={selectedProducts} />);

  const totalElement = screen.getByText(/Total: \$80/i);
  expect(totalElement).toBeInTheDocument();
});

test('displays message when no products are selected', () => {
  render(<Checkout selectedProducts={[]} />);

  const messageElement = screen.getByText(/No products selected./i);
  expect(messageElement).toBeInTheDocument();
});
