import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import Header from '../../components/Header';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const FAQ: React.FC = () => {
  return (
    <div>
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />
      <div className="faq-accordion">
        <Collapse accordion items={items} />
      </div>
    </div>
  );
};

export default FAQ;
