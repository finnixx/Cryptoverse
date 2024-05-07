import React from 'react';
import AppBar from './components/AppBar';
import Exchanges from './components/Exchanges';
import CryptoCurrencies from './components/CryptoCurrencies';
import Homepage from './components/Homepage';
import News from './components/News';
import CryptoDetails from './components/CryptoDetails';
import './App.css';
import { Layout, Typography, Space } from 'antd';
// Changes made in the next line
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* Changes made in the next line */}
      <Router>
        <div className="navbar">
          <AppBar />
        </div>
        <div className="main">
          <Layout>
            <div className='routes'>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/crypto" element={<CryptoCurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className='footer'>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>
            <Space />
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/News">News</Link> {/* Capitalized 'News' */}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
