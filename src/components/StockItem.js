import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import ArrowCircleRight from '../icons/ArrowCircleRight';

import styles from '../styles/StockItem.module.css';

const StockItem = ({ stocks }) => {
  const {
    companyName, symbol, changes, stockPrice,
  } = stocks;

  return (
    <div className={styles['stock-item']}>
      <Link to={`/details/${symbol}`} className={styles['stock-link']}>
        <div className={styles['stock-header']}>
          <h1>{companyName}</h1>
          <div>
            {symbol}
            {' '}
            -
            {'   '}
            <span className={styles.green}>{`( ${changes.toFixed(2)} )`}</span>
          </div>
          <ArrowCircleRight />
        </div>
        <div className={styles['stock-footer']}>
          <span>USD</span>
          <span>{parseFloat(stockPrice).toFixed(2)}</span>
        </div>
      </Link>
    </div>
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
