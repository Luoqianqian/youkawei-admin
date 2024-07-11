import React from 'react';
import { ConfigProvider, Typography } from 'antd';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

type propsType = {
  title: string;
  subtitle: string;
};

function Header({ title, subtitle }: propsType) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            titleMarginBottom: 0,
          },
        },
      }}
    >
      <div className="app-header">
        <Title style={{ color: '#D6DCE3' }} level={3}>{title}</Title>
        <Text strong style={{ color: '#347173' }}>
          {subtitle}
        </Text>
      </div>
    </ConfigProvider>
  );
}

export default Header;
