import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import ArrowCircleRight from '../icons/ArrowCircleRight';

import styles from '../styles/StockItem.module.css';

const StockItem = ({ stocks }) => {
  const {
    companyName, symbol, changes, stockPrice,
  } = stocks;

  return (
    <div data-testid="companyItem" className={styles['stock-item']}>
      <Link to={`/details/${symbol}`} className={styles['stock-item__link']}>
        <div className={styles['stock-item__header']}>
          <h1>{companyName}</h1>
          <div>
            {symbol}
            {' '}
            -
            {'   '}
            <span className={styles.green}>{`( ${changes} )`}</span>
          </div>
          <ArrowCircleRight />
        </div>
        <div className={styles['stock-item__footer']}>
          <span>USD</span>
          <span>{parseFloat(stockPrice)}</span>
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
