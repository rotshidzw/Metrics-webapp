import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('test if the header componet rendered', async () => {
    render(<Header />);
    const header = screen.getByText(/METRICS-WEBAPP/i);
    expect(header).toBeInTheDocument();
  });
});
