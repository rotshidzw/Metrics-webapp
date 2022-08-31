import axios from 'axios';

const getAllcomanyInfoData = async (ticker) => {
  const companyInfoUrl = `https://financialmodelingprep.com/api/v3/profile/${ticker}?apikey=bee8e453e38b2613f8b2e141b1e6d8d8`;
  try {
    const response = await axios(companyInfoUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getAllcomanyInfoData;
