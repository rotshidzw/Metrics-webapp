import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';
import Company from './Company';

const MockedCompany = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Company />
    </Provider>
  </BrowserRouter>
);

describe('Company component', () => {
  test('test if the header company component rendered', async () => {
    render(<MockedCompany />);
    const companyContainer = await screen.findByTestId(/company-container/i);
    expect(companyContainer).toBeInTheDocument();
  });
});
