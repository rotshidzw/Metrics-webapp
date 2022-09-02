import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import { fetchCompanyInfoData } from '../../redux/features/companyInfoSlice';
import CompanyDetails from '../CompanyDetailes';

import styles from '../../styles/Company.module.css';

const Company = () => {
  const { companyInfoData, status } = useSelector((state) => state.companyInfo);

  const dispatch = useDispatch();

  const { ticker } = useParams();

  useEffect(() => {
    dispatch(fetchCompanyInfoData(ticker));
  }, []);

  if (status === 'loading') {
    return <p>loading</p>;
  }

  if (status === 'failed') {
    return <p>failed</p>;
  }

  return (
    <div className={styles['cont-comp']}>
      {companyInfoData.map((company) => (
        <CompanyDetails key={uuidv4} companyData={company} />
      ))}
    </div>
  );
};

export default Company;
