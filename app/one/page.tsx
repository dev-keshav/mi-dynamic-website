// pages/index.tsx
import React from 'react';
import Card from '@/components/home/Card';
import Banner1 from '@/components/home/banner1';
import ExportImg from '../../public/assets/homepage/exporter.png';
import ImportImg from '../../public/assets/homepage/importer.png';
import LogisticsImg from '../../public/assets/homepage/logistics.png';

const servicesData = [
  {
    imageSrc: ImportImg,
    heading: 'Importer',
    text:
      'Discover sources of buying products by connecting with potential suppliers while keeping an eye on the shipments through the global trade intelligence platform online.',
  },
  {
    imageSrc: ExportImg,
    heading: 'Exporter',
    text:
      'Learn to determine the market share of required commodities by finding potential suppliers while tracking the shipments through the global trade data platform online.',
  },
  {
    imageSrc: LogisticsImg,
    heading: 'Logistics',
    text:
      'Elevate your business operations and increase market exposure while managing shipments through the online import-export data platform online.',
  },
];

const industriesData = [
  'Law Firms',
  'Corporation',
  'Insurance Companies',
  'Research & Consulting',
  'Financial Institutions',
  'Sales & Marketing',
  'Asset Management',
  'IT and Consulting',
  'Academic Institution',
  'Government Agencies',
];

export default function Mainscreen() {
  return (
    <section className="flex flex-wrap justify-center">
      <Banner1 />

      {servicesData.map((service, index) => (
        <Card key={index} {...service} />
      ))}

      <div className="md:w-1/3 lg:w-1/3 sm:w-1/2 xs:w-full mb-4">
        <div className="inside_banner p-12 border-2 border-gray-300 w-full m-2">
          <ul className="pl-6 font-montserrat">
            {industriesData.map((industry, index) => (
              <li key={index} className="list-none border-b-2 border-gray-300 mb-4 pb-3 w-80%">
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
