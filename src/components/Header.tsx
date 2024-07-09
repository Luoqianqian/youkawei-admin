import React from 'react';
import { Typography } from 'antd';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

type propsType = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: propsType) {
  return (
    <div className="header">
      <div className="titles">
        <Title style={{ color: '#DEE4E9' }} level={3}>
          {title}
        </Title>
        <Text strong style={{ color: '#347173' }}>
          {subtitle}
        </Text>
      </div>
      <div className="button">
        <Button type="primary">
          <DownloadOutlined />
          <span>DOWNLOAD REPORTS</span>
        </Button>
      </div>
    </div>
  );
}

export default Header;
