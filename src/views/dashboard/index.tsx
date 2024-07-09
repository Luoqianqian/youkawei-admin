import React from 'react';
import { Col, Row } from 'antd';
import Header from '../../components/Header';
import './index.css';

const DashBoard: React.FC = () => (
  <>
    <Header title="DASHBOARD" subTitle="welcome to your dashboard!" />
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
    <Row>
      <Col span={16}>col-12</Col>
      <Col span={8}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
  </>
);

export default DashBoard;
