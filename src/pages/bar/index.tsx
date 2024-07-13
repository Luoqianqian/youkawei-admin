import React from 'react';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';
import { mockBarData as data } from '../../data/mockData.js';

function Bar() {
  return (
    <div>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
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
        <BarChart data={data} />
      </div>
    </div>
  );
}

export default Bar;
