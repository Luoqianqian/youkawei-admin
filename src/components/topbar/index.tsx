import React from 'react';
import { Input, Space, space } from 'antd';
import { MoonOutlined, SettingOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import './index.css';

const { Search } = Input;

function TopBar() {
  const onSearch = () => {};
  return (
    <div className="top-bar">
      <Search placeholder="Search" allowClear onSearch={onSearch} style={{ width: 200 }} />
      <div className="icons">
        <Space>
          <MoonOutlined />
          <BellOutlined />
          <SettingOutlined />
          <UserOutlined />
        </Space>
      </div>
    </div>
  );
}

export default TopBar;
