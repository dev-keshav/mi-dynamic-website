// DataContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DataState {
  importer: any; 
  exporter: any; 
  trade: any; 
  origin_country: any;
  isFilterActive: boolean;
  hscode_filter: any;
}

interface DataContextType extends DataState {
  setImporter: (data: any) => void;
  setExporter: (data: any) => void;
  setTrade: (data: any) => void;
  setOrigin_country: (country: any) => void; 
  setIsFilterActive: (isActive: boolean) => void; 
  sethscode_filter: (hscode: any) => void; 
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [importer, setImporter] = useState<any>(null);
  const [exporter, setExporter] = useState<any>(null);
  const [trade, setTrade] = useState<any>(null);
  const [origin_country, setOrigin_country] = useState<any>('All');
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [hscode_filter, sethscode_filter] =useState<any>();

  const value = {
    importer,
    exporter,
    trade,
    origin_country,
    isFilterActive,
    hscode_filter,
    sethscode_filter,
    setImporter,
    setExporter,
    setTrade,    
    setOrigin_country,
    setIsFilterActive,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
