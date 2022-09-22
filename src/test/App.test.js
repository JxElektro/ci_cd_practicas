import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renderiza en Pantalla', () => {
  render(<App />);
  const startCount = screen.queryByTestId("click");
  expect(startCount).toBeDefined() 
});
