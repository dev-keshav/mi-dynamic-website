// Trend.tsx

import React from 'react';
import './trend.css';

interface TrendProps {
  head_line: string;
  list_items: string[];
}

const Trend: React.FC<TrendProps> = ({ head_line, list_items }) => {
  return (
    <div className='pt-10 lg:px-16 '>
      <div className="head mb-6">
        <h2 className="font-bold text-2xl mb-2">{head_line}</h2>
      </div>
      <div className=' flex flex-row flex-wrap'>
      {list_items.map((item, index) => (
        <div key={index} className='homecard' >
          <a style={{fontFamily: 'Roboto, sans-serif'}}>
            {item}
          </a>
        </div>
      ))}</div>
    </div>
  );
};

export default Trend;
