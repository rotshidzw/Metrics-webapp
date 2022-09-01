import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { fetchStocksData } from '../../redux/features/stocksSlice';
import StockItem from '../StockItem';

import styles from '../../styles/Stocks.module.css';
import Header from '../Header';

const Stocks = () => {
  const { stocksData, status } = useSelector((state) => state.stocks);

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
    <>
      <Header />
      <div className={styles['main-container']}>
        <div className={styles['search-input-container']}>
          <input
            className={styles['search-input']}
            type="text"
            onChange={onSearchStockHandler}
            placeholder="Search by company name"
          />
        </div>
        <div className={styles['stocks-container']}>
          {filteredStocks.map((stock) => (
            <StockItem key={uuidv4()} stocks={stock} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Stocks;
