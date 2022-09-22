import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';



// eslint-disable-next-line no-undef
test('Renderiza en Pantalla', () => {
  render(<App />);
  const startCount = screen.getByText("You clicked 0 times");
  // eslint-disable-next-line no-undef
  expect(startCount).toBeTruthy();
});
