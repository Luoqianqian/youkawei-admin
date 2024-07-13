import React from 'react';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import { mockLineData as data } from '../../data/mockData.js';

function Line() {
  return (
    <div>
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <div
        style={{
          height: '70vh',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          paddingLeft: '20px',
        }}
      >
        <LineChart data={data} />
      </div>
    </div>
  );
}

export default Line;
