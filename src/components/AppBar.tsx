import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons';
import icon from '../images/crypto-com-cryptocurrency.svg';

const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'cryptocurrencies',
      icon: <FundOutlined />,
      label: <Link to="/crypto">Cryptocurrencies</Link>,
    },
    {
      key: 'exchanges',
      icon: <MoneyCollectOutlined />,
      label: <Link to="/exchanges">Exchanges</Link>,
    },
    {
      key: 'news',
      icon: <BulbOutlined />,
      label: <Link to="/news">News</Link>,
    }
  ];

function AppBar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">CryptoVerse</Link> {/* Corrected Typographical Error */}
        </Typography.Title>
      </div>
      
      <Menu theme="dark"  items={menuItems} />
      
    </div>
  );
}

export default AppBar;
