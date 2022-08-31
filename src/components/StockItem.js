import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const StockItem = ({ stocks }) => {
  const {
    companyName, symbol, changes, stockPrice,
  } = stocks;

  return (
    <Link to={`/details/${symbol}`}>
      <div>
        <h1>{companyName}</h1>
        <span>{symbol}</span>
        <span>{changes.toFixed(2)}</span>
      </div>
      <div>
        <span>USD</span>
        <span>{parseFloat(stockPrice).toFixed(2)}</span>
      </div>
    </Link>
  );
};

StockItem.propTypes = {
  stocks: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    stockPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default StockItem;
