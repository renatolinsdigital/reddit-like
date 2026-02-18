import App from './App';
import { act } from 'react';
import { render, screen } from '@testing-library/react';

test('renders the app with ordering text', async () => {
  render(<App />);
  await act(async () => {
    const someText = await screen.getByText(/Order results/i);
    expect(someText).toBeInTheDocument();
  });
});
