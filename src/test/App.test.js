import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renderiza en Pantalla', () => {
  render(<App />);
      const startCount = screen.getByText("You clicked 0 times");
  expect(startCount).toBeTruthy();
});
