import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import { fetchCompanyInfoData } from '../../redux/features/companyInfoSlice';
import CompanyDetails from '../CompanyDetailes';

const Company = () => {
  const { companyInfoData, status } = useSelector((state) => state.companyInfo);

  // console.log(status);
  const dispatch = useDispatch();

  const { ticker } = useParams();
  // console.log(ticker);

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
    <div>
      {companyInfoData.map((company) => (
        <CompanyDetails key={uuidv4} companyData={company} />
      ))}
    </div>
  );
};

export default Company;
