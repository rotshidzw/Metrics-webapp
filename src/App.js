import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Stocks from './components/pages/Stocks';
import Company from './components/pages/Company';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Stocks />} />
        <Route exact path="/details/:ticker" element={<Company />} />
      </Routes>
    </Router>
  );
}

export default App;
