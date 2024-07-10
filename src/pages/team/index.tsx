import React from 'react';
import Header from '../../components/Header';
import { mockDataTeam } from '../../data/mockData.js';
import { Table } from 'antd';

type teamType = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
};

const dataSource: teamType[] = mockDataTeam;
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Access Level',
    dataIndex: 'access',
    key: 'access',
  },
];

function Team() {
  return (
    <div>
      <Header title="TEAM" subtitle="Managing the team member" />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Team;
