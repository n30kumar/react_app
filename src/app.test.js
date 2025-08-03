import { render, screen } from '@testing-library/react';
import App from './app';

test('renders hello message', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, GitHub Actions!/i);
  expect(headingElement).toBeInTheDocument();
});
