import React from 'react';

type propsType = {
  title: string;
  subtitle: string;
  icon: string;
  increase: number;
};

function StatBox({ title, subtitle, icon, increase }: propsType) {
  return <div className="statbox">statbox</div>;
}

export default StatBox;
