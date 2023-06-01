import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  expect(screen.getByText('Scoop litter')).toBeInTheDocument()
  expect(screen.getByText('Steam faucet')).toBeInTheDocument()
});
