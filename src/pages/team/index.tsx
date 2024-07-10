import React from 'react';
import Header from '../../components/Header';
import { mockDataTeam } from '../../data/mockData.js';
import { Table, TableProps } from 'antd';

type teamType = {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
};

const dataSource: teamType[] = mockDataTeam;

const columns: TableProps<teamType>['columns'] = [
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
    sorter: (a, b) => a.age - b.age,
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
    filters: [
      {
        text: 'admin',
        value: 'admin',
      },
      {
        text: 'manager',
        value: 'manager',
      },
      {
        text: 'user',
        value: 'user',
      },
    ],
    onFilter: (value, record) => record.access === value,
    render: (access) => {
      return (
        <div
          style={{
            width: 60,
            color: '#D6DCE3',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#369B7D',
          }}
        >
          {access}
        </div>
      );
    },
  },
];

function Team() {
  return (
    <div>
      <Header title="TEAM" subtitle="Managing the team member" />
      <Table
        pagination={{ pageSize: 6 }}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}

export default Team;
