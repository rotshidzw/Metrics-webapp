import axios from 'axios';

const stocksUrl = 'https://financialmodelingprep.com/api/v3/actives?apikey=cfb96111e5b3134b48b788d8f8bdb079';

const getStocksData = async () => {
  try {
    const response = await axios(stocksUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default getStocksData;
