// Banner1.tsx
import React from 'react';
import './style.css';

const Banner1: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className="ah-headline">
          Get Access Of <br />
          <span className="ah-words-wrapper">
            <b className="is-visible">
              Market Intelligence Platform
              Customs Data
              Global Trade Data
              Bill of lading Data
              Import Export Data
            </b>
          </span>
          <br />
          And Grow Your Business
        </h1>
      </div>
      <div className="vewrealmarbtn">
        <a className="btn shdedemobtn" href="http://www.marketinsidedata.com/schedule-demo">
          Schedule Your Demo
        </a>
      </div>
    </div>
  );
};

export default Banner1;
