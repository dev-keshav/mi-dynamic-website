"use client"

import { Suspense, lazy, useMemo, useState, useEffect } from "react"

import { Icons } from "../icons"
import RecordRenderer from "../shared/record-renderer"
import NavigationTabs from "./nav-tab"
import { getTitle } from "@/constants/getTitle"

const companyImportPortsTableConfig = {
  columns: ["Commodity", "Import Value (USD %)"],
  rows: [
    {
      commodity: "Agra ICD",
      importValue: "25%",

      customStyles: {
        commodity: "text-center",
        importValue: "text-center",
      },
    },
    {
      commodity: "Ahemdabad Air",
      importValue: "35%",

      customStyles: {
        commodity: "text-center",
        importValue: "text-center",
      },
    },
    {
      commodity: "Ahemdabad ICD	",
      importValue: "20%",

      customStyles: {
        commodity: "text-center",
        importValue: "text-center",
      },
    },
    {
      commodity: "Amritsar ACC Import Data	",
      importValue: "1.5%",

      customStyles: {
        commodity: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
    {
      commodity: "Amritsar ACC Import Data	",
      importValue: "2.5%",

      customStyles: {
        commodity: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
    {
      commodity: "Ankaleshwar ICD Import Data",
      importValue: "6.5%",

      customStyles: {
        commodity: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
    {
      commodity: "Ballabgarh ICD Import Data",
      importValue: "6.5%",

      customStyles: {
        commodity: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
    {
      commodity: "Bangalore Air Import Data",
      importValue: "6.5%",

      customStyles: {
        commodity: "blur-sm text-center",
        importValue: "blur-sm text-center",
      },
    },
  ],
}

const CompanyImportPorts = () => {
  const [hover, setHover] = useState<boolean>(false)
  const [selectedTab, setSelectedTab] = useState(1);

  const PieChart = lazy(() => import("./company-import-ports-chart"))

  useEffect(() => {
    getPieChart()
    
  }, [selectedTab]);

  

  function getPieChart() {
    return <PieChart selectedTab={selectedTab}/>
  }

  const pieChart = getPieChart()

  const memoizedGetBarChart = useMemo(() => {
    return getPieChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab])

  const memorizedPieChart = useMemo(() => {
    return memoizedGetBarChart
  }, [memoizedGetBarChart])

  const memorizedChart = useMemo(() => {
    return (
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative hidden w-2/3 cursor-pointer items-center justify-center p-2 sm:hidden md:hidden lg:block"
      >
        {hover && (
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded bg-black bg-opacity-50 text-white">
            <Icons.lockColored className="h-[32px] w-[32px]" />
            <div className="w-3/4 text-center text-base font-bold text-opacity-100">
              Subscribe today to Market Inside pro and access the latest data
            </div>
            <button className="box-content inline-block  bg-princeton-orange px-4 py-2 text-center text-base font-semibold uppercase tracking-wider text-white transition duration-500 ease-in-out hover:shadow-white">
              Schedule a Demo
            </button>
          </div>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          {memorizedPieChart}
        </Suspense>
      </div>
    )
  }, [hover, memorizedPieChart])

  type Tab = {
    id: number;
    label: string;
  };

  const tabs: Tab[] = [
    { id: 1, label: 'Port of Unloading' },
    { id: 2, label: 'Port of Loading' },
  ];

  const handleTabChange = (tabId:any) => {
    setSelectedTab(tabId);
  };

  
  const title1 = "ABCD Private Limited uploaded goods from which ports?"
const title2 = "ABCD Private Limited loaded goods through which ports?";

const viewtext1 ="ABCD Private Limited unloading ports are Agra ICD, Ahmedabad Air, Ahmedabad ICD and more"
const viewtext2 ="ABCD Private Limited loading ports are Agra ICD, Ahmedabad Air, Ahmedabad ICD and more"
  

  return (
    <div><NavigationTabs tabs={tabs} onSelectTab={handleTabChange} />
    <div className="flex flex-col items-center py-11">
      <div className="flex w-3/4 flex-col gap-2 p-10">
        <div className="w-full text-center text-3xl text-raisin-black" style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
        {getTitle(title1,title2,selectedTab)}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
        {getTitle(viewtext1 ,viewtext2 ,selectedTab)}
        </div>
      </div>
      <div className="flex w-full gap-5 px-11 pb-11">
        <div className="w-full md:max-w-[680px]">
          <RecordRenderer
            columns={companyImportPortsTableConfig.columns}
            rows={companyImportPortsTableConfig.rows}
            pagination={false}
            classNameHeader="h-12 text-center text-base text-center font-semibold bg-deep-saffron"
            classNameRow="h-11"
          />
        </div>
        {memorizedChart}
      </div>
    </div>
    </div>
  )
}

export default CompanyImportPorts
