import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  HomeOutlined,
  TeamOutlined,
  ContactsOutlined,
  SettingOutlined,
  TableOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Menu, Typography } from 'antd';
import './index.css';

type MenuItem = Required<MenuProps>['items'][number];
const { Title, Text } = Typography;

const items: MenuItem[] = [
  { key: '1', icon: <HomeOutlined />, label: 'DashBoard' },
  {
    key: 'data',
    label: 'Data',
    children: [
      { key: '21', label: 'Manage Team', icon: <TeamOutlined /> },
      { key: '22', label: 'Contacts Information', icon: <ContactsOutlined /> },
      { key: '23', label: 'Invoices Balances', icon: <TableOutlined /> },
    ],
  },
  {
    key: 'pages',
    label: 'Pages',
    children: [
      { key: '31', label: 'Profile Form', icon: <SettingOutlined /> },
      { key: '32', label: 'Calendar', icon: <SettingOutlined /> },
      { key: '33', label: 'FAQ Page', icon: <SettingOutlined /> },
    ],
  },
  {
    key: 'charts',
    label: 'Charts',
    children: [
      { key: '41', label: 'Bar Chart', icon: <SettingOutlined /> },
      { key: '42', label: 'Pie Chart', icon: <SettingOutlined /> },
      { key: '43', label: 'Geography Chart', icon: <SettingOutlined /> },
      { key: '44', label: 'Line Chart', icon: <SettingOutlined /> },
    ],
  },
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

const App: React.FC = () => {
  const isMd = useMediaQuery({ query: '(max-width: 768px)' });
  const [collapsed, setCollapsed] = useState(false);
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const toggleHandler = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setCollapsed(isMd);
  }, [isMd]);

  return (
    <div className="sidebar">
      {!collapsed && (
        <div className="side-top">
          <div className="header">
            <Title level={2} style={{ color: '#C2CAD8' }}> ADMINS </Title>
            <MenuOutlined onClick={toggleHandler} />
          </div>
          <Avatar size={50} src="../../../public/pig.jpg" />
          <div className="texts">
            <Text strong style={{ color: '#DEE4E9' }} > Luo Qianqian </Text>
            <Text strong style={{ color: '#347173' }} > Admin </Text>
          </div>
        </div>
      )}
      <Menu
        onClick={onClick}
        style={{ width: collapsed ? 60 : 216 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['data']}
        mode="inline"
        items={items}
        theme="dark"
        inlineCollapsed={collapsed}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
      />
    </div>
  );
};

export default App;
