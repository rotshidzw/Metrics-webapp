import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';
import Stocks from './Stocks';

const MockedStocks = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Stocks />
    </Provider>
  </BrowserRouter>
);

describe('stocks', () => {
  test('test search input', async () => {
    render(<MockedStocks />);
    const searchInput = screen.getByPlaceholderText(/Search by company name/i);
    fireEvent.change(searchInput, { target: { value: 'apple' } });
    expect(searchInput.value).toBe('apple');
  });
});
