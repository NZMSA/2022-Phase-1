import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders source code path', () => {
  render(<App />);
  const linkElement = screen.getByText(/src\/App.tsx/i);
  expect(linkElement).toBeInTheDocument();
});
