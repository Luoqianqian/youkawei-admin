import React from 'react';
import GeoChart from '../../components/GeoChart';
import Header from '../../components/Header';
import { mockGeographyData as data } from '../../data/mockData.js';

function Geography() {
  return (
    <div>
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
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
        <GeoChart data={data} />
      </div>
    </div>
  );
}

export default Geography;
