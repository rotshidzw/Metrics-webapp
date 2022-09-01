import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from '../styles/CompanyDetails.module.css';

const CompanyDetails = ({ companyData }) => {
  const {
    image,
    companyName,
    symbol,
    StockPrice,
    marketCap,
    ceo,
    website,
    description,
    address,
    changes,
    currency,
  } = companyData;

  return (
    <div className={styles.container}>
      <Link to="/">
        <button type="button" className={styles['btn-back']}>
          Back Home
        </button>
      </Link>
      <div className={styles['company-info-body']}>
        <div className={styles['company-logo']}>
          <img src={image} alt="company-logo" />
        </div>
        <div className={styles['list-container']}>
          <ul className={styles['list-info']}>
            <li>{companyName}</li>
            <li>{symbol}</li>
            <li>{StockPrice}</li>
            <li>{marketCap}</li>
            <li>{ceo}</li>
            <li>{website}</li>
            <li>{description}</li>
            <li>{address}</li>
            <li>{changes.toFixed(2)}</li>
            <li>{currency}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

CompanyDetails.propTypes = {
  companyData: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    changes: PropTypes.number.isRequired,
    StockPrice: PropTypes.number.isRequired,
    marketCap: PropTypes.number.isRequired,
    ceo: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default CompanyDetails;
