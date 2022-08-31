import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { fetchStocksData } from '../../redux/features/stocksSlice';
import StockItem from '../StockItem';

const Stocks = () => {
  const { stocksData, status } = useSelector((state) => state.stocks);

  // console.log(status === 'idle');
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStocksData());
    }
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const onSearchStockHandler = (event) => {
    setSearchTerm(event.target.value.trim().toLowerCase());
  };

  const filteredStocks = searchTerm === ''
    ? stocksData
    : stocksData.filter((stock) => stock.companyName.toLowerCase().includes(searchTerm));

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={onSearchStockHandler}
          placeholder="search by company name"
        />
      </div>
      <div>
        {filteredStocks.map((stock) => (
          <StockItem key={uuidv4()} stocks={stock} />
        ))}
      </div>
    </div>
  );
};

export default Stocks;
