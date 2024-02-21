'use client'
import { useState } from "react";
import CompanyShipmentTable from "./company-shipment-table"
import NavigationTabs from "./nav-tab"
import { getTitle } from "@/constants/getTitle";


const CompanyShipmentRecord = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  type Tab = {
    id: number;
    label: string;
  };
  const tabs: Tab[] = [
    { id: 1, label: 'Import Shipment' },
    { id: 2, label: 'Export Shipment' },
  ];

  const handleTabChange = (tabId:any) => {
    setSelectedTab(tabId);
  }

  const title1 = "ABCD Private Limited's Import Shipments"
const title2="ABCD Private Limited's Export Shipments"

  
  return (
    <div><NavigationTabs tabs={tabs} onSelectTab={handleTabChange} />
    <div id="shipment-record" className="p-[50px]">
      <div className="mb-10 p-8 text-center text-3xl " style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
        {getTitle(title1,title2,selectedTab)}
      </div>
      <CompanyShipmentTable />
    </div>
    </div>
  )
}

export default CompanyShipmentRecord
