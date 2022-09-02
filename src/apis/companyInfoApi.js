import axios from 'axios';

const getAllcomanyInfoData = async (ticker) => {
  const companyInfoUrl = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=cfb96111e5b3134b48b788d8f8bdb079`;
  try {
    const response = await axios(companyInfoUrl);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getAllcomanyInfoData;
