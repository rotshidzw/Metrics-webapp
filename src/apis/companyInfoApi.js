import axios from 'axios';

const getAllcomanyInfoData = async (ticker) => {
  const companyInfoUrl = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=1e8817c7ca78a54d05c70f6c71be0907`;
  try {
    const response = await axios(companyInfoUrl);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getAllcomanyInfoData;
