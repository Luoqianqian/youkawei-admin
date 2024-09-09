import { useTheme } from '../context/ThemeContext.tsx';
import { Badge, Drawer, Image, List, Space, Typography } from 'antd';
import {
  UserOutlined,
  SunOutlined,
  BellOutlined,
  MailOutlined,
} from '@ant-design/icons';
import GlobalSearch from './GlobalSearch/index.tsx';

function TopBar() {
  const { toggle } = useTheme();
  return (
    <div className="top-bar">
      <Image width={120} src="/youwei.png"></Image>
      <div className="top_right">
        <GlobalSearch />
        <Space size={'middle'}>
          <SunOutlined style={{ fontSize: 24 }} onClick={() => toggle()} />
          <Badge count={132} dot>
            <MailOutlined style={{ fontSize: 24 }} />
          </Badge>
          <Badge count={56}>
            <BellOutlined style={{ fontSize: 24 }} />
          </Badge>
          <UserOutlined style={{ fontSize: 24 }} />
        </Space>
      </div>
    </div>
  );
}

export default TopBar;
