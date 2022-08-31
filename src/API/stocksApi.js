import axios from 'axios';

const stocksUrl = 'https://financialmodelingprep.com/api/v3/actives?apikey=61d3e77e74207aa24ad5a8c19e3746ab';

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
