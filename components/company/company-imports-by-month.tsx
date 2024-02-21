"use client"

import { Suspense, lazy, useMemo,useState } from "react"
import RecordRenderer from "../shared/record-renderer"
import NavigationTabs from "@/components/company/nav-tab"
import { getTitle } from "@/constants/getTitle"

const monthlyImportTableConfig = {
  columns: ["Month", "Import Value (USD %)"],
  rows: [
    {
      month: "Jan 2019",
      importValue: "20%",

      customStyles: {
        month: "text-center",
        importValue: "text-center",
      },
    },
    {
      month: "Feb 2019",
      importValue: "30%",

      customStyles: {
        month: "text-center",
        importValue: "text-center",
      },
    },
    {
      month: "Mar 2019",
      importValue: "45%",

      customStyles: {
        month: "text-center",
        importValue: "text-center",
      },
    },
    {
      month: "Mar 2019",
      importValue: "1.5%",

      customStyles: {
        month: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
    {
      month: "Mar 2019",
      importValue: "2.5%",

      customStyles: {
        month: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
    {
      month: "Mar 2019",
      importValue: "6.5%",

      customStyles: {
        month: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
    {
      month: "Mar 2019",
      importValue: "6.5%",

      customStyles: {
        month: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
    {
      month: "Mar 2019",
      importValue: "6.5%",

      customStyles: {
        month: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
  ],
}

type Tab = {
  id: number;
  label: string;
};

const tabs: Tab[] = [
  { id: 1, label: 'Import Turnover' },
  { id: 2, label: 'Export Turnover' },
];


const CompanyImportsByMonth = () => {
  const BarChart = lazy(() => import("./company-monthly-import-chart"));
  
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (tabId:any) => {
    setSelectedTab(tabId);
  };

  const title1= "ABCD Private Limited - Total Imports by Month";
  const title2= "ABCD Private Limited - Total Exports by Month";
 


  const viewtext1="View ABCD Private Limited imports turnover by month"
  const viewtext2="View ABCD Private Limited exports turnover by Month"
    
     
 
///// change below condition for different charts importer/exporter
  const getChart = () => {
    
    return selectedTab === 1 || 2 ? <BarChart /> : null;
  };

  const memorizedChart = useMemo(() => {
    return (
      <div className="relative hidden w-2/3 cursor-pointer items-center justify-center p-2 sm:hidden md:hidden lg:block">
        <Suspense fallback={<div>Loading...</div>} >
          {getChart()}
        </Suspense>
      </div>
    );
  }, [selectedTab]);

  return (
    <div>
      <NavigationTabs tabs={tabs} onSelectTab={handleTabChange} />
      <div className="flex flex-col items-center py-11">
        <div className="flex w-3/4 flex-col gap-2 p-10">
          <div className="w-full text-center text-3xl  text-raisin-black"style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
          {getTitle(title1,title2,selectedTab)}
          </div>
          <div className="text-center text-base font-normal text-dim-gray">
          {getTitle(viewtext1 ,viewtext2 ,selectedTab)}
          </div>
        </div>
        <div className="flex w-full gap-5 px-11 pb-11">
          <div className="w-full md:max-w-[680px]">
            <RecordRenderer
              columns={monthlyImportTableConfig.columns}
              rows={monthlyImportTableConfig.rows}
              pagination={false}
              classNameHeader="h-12 text-center text-base text-center font-semibold bg-deep-saffron"
              classNameRow="h-11"
              isLocked
            />
          </div>
          {memorizedChart}
        </div>
      </div>
    </div>
  );
};

export default CompanyImportsByMonth;