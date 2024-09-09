import {
  HomeOutlined,
  UserOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  BookOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ITEMS = [
  {
    label: '首页',
    icon: <HomeOutlined />,
    key: '/',
  },
  {
    label: '文章',
    icon: <BookOutlined />,
    key: '/posts',
  },
  {
    label: '商品',
    key: '/products',
    icon: <ShoppingOutlined />,
  },
  {
    label: '订单',
    key: '/orders',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: '用户',
    key: '/customers',
    icon: <UserOutlined />,
  },
];

function SideBar() {
  const [selectedKeys, setSelectedKeys] = useState("/"); 

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedKeys(location.pathname);
  }, [location.pathname]);

  return (
    <Menu
      onClick={(item) => navigate(item.key)}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      mode="inline"
      items={ITEMS}
    />
  );
}

export default SideBar;
