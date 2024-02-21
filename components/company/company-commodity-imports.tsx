"use client"

import { Suspense, lazy, useMemo, useState } from "react"
import RecordRenderer from "../shared/record-renderer"
import NavigationTabs from "./nav-tab"
import { getTitle } from "@/constants/getTitle"

const commodityImportTableConfig = {
  columns: ["Commodity", "Import Value (USD %)"],
  rows: [
    {
      commodity: "010120 -- Asses, mules and hinnies; live",
      importValue: "35%",

      customStyles: {
        commodity: "text-center",
        importValue: "text-center",
      },
    },
    {
      commodity: "020430 -- Meat; of sheep, lamb carcasses",
      importValue: "40%",

      customStyles: {
        commodity: "text-center",
        importValue: "text-center",
      },
    },
    {
      commodity: "010111 --Horses; live, pure-bred breeding",
      importValue: "35%",

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

const CompanyCommodityImports = () => {
  const BarChart = lazy(() => import("./company-commodity-charts"))

  function getBarChart() {
    return <BarChart />
  }

  const memoizedGetBarChart = useMemo(() => {
    return getBarChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const memorizedBarChart = useMemo(() => {
    return memoizedGetBarChart
  }, [memoizedGetBarChart])

  const memorizedChart = useMemo(() => {
    return (
      <div className="relative hidden w-2/3 cursor-pointer items-center justify-center p-2 sm:hidden md:hidden lg:block">
        <Suspense fallback={<div>Loading...</div>}>
          {memorizedBarChart}
        </Suspense>
      </div>
    )
  }, [memorizedBarChart])

  type Tab = {
    id: number;
    label: string;
  };
  const tabs: Tab[] = [
    { id: 1, label: 'Import Commodities' },
    { id: 2, label: 'Export Commodities' },
  ];

  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabChange = (tabId:any) => {
    setSelectedTab(tabId);
  };

  const title1 = "Which commodities ABCD Private Limited imports?";
  const title2 = "Which commodities ABCD Private Limited exports?";

  const viewtext1 ="ABCD Private Limited import commodities are 010120 -- Asses, mules and hinnies; live 35%, 020430 -- Meat; of sheep, lamb carcasses 20%,";
  const viewtext2 = "ABCD Private Limited export commodities are 010120 -- Asses, mules and hinnies; live 35%, 020430 -- Meat; of sheep, lamb carcasses 20%,"


  return (
    <div>
      <NavigationTabs tabs={tabs} onSelectTab={handleTabChange}/>
    <div className="flex flex-col items-center py-11">

      <div className="flex w-3/4 flex-col gap-2 p-10">
        <div className="w-full text-center text-3xl  text-raisin-black" style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
          {getTitle(title1,title2,selectedTab)}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
        {getTitle(viewtext1 ,viewtext2 ,selectedTab)}
        </div>
      </div>
      <div className="flex w-full gap-5 px-11 pb-11">
        <div className="w-full md:max-w-[680px]">
          <RecordRenderer
            columns={commodityImportTableConfig.columns}
            rows={commodityImportTableConfig.rows}
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
  )
}

export default CompanyCommodityImports
