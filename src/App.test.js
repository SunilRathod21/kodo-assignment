import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const text = screen.getByText("Search");
  expect(text).toBeInTheDocument();
});
