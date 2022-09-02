import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from '../styles/CompanyDetails.module.css';

const CompanyDetails = ({ companyData }) => {
  const {
    image,
    companyName,
    symbol,
    StockPrice,
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
        <button type="button" className={styles['button-back']}>
          Back Home
        </button>
      </Link>
      <div className={styles['company-body']}>
        <div className={styles['comp-logo']}>
          <img src={image} alt="comp-logo" />
        </div>
        <div className={styles['list-cont']}>
          <ul className={styles['list-info']}>
            <li data-testid="companyName">{companyName}</li>
            <li>{symbol}</li>
            <li>{StockPrice}</li>
            <li>{ceo}</li>
            <li>{website}</li>
            <li>{description}</li>
            <li>{address}</li>
            <li>{changes}</li>
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
