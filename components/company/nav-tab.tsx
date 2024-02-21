'use client'
import React, { useState } from 'react';

type Tab = {
  id: number;
  label: string;
};

interface NavigationTabsProps {
  tabs: Tab[];
  onSelectTab: (tabId: number) => void;
}


const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs,onSelectTab}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  
  const handleTabClick = (tabId: number) => {
    setSelectedTab(tabId);
    onSelectTab(tabId); // Call the onSelectTab function with the selected tabId
  };

  return (
    <nav style={{ borderBottom: '2px solid #f78020', marginLeft: '3%', marginRight: '2%' }} className="flex">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="cursor-pointer py-2 px-4"
          style={{
            borderBottom: selectedTab === tab.id ? '2px solid #f78020' : '2px solid transparent',
            backgroundColor: selectedTab === tab.id ? '#f78020' : 'transparent',
            color: selectedTab === tab.id ? 'white' : 'inherit',
          }}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </nav>
  );
};

export default NavigationTabs;