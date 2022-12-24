import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/The Francis Bacon Sketchbook/i)
  expect(headerElement).toBeInTheDocument();
})
