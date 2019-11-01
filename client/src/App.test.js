import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Navbar from './components/Navbar';



test('Renders without crashing', () => {
  render(<App />);
})

test('Element should have data-testId', () => {
  const { getByTestId } = render(<Navbar />)
  getByTestId('custom-toggle');
})

test('Image contains altText', () => {
  const { getByAltText } = render(<App />)
  getByAltText(/women's.*? 2019.*? world*? cup*? trophy/i)
})

