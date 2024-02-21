"use client"

import { SetStateAction, useState } from "react"
import Image from "next/image"
import NavigationTabs from "@/components/company/nav-tab"
import { Icons } from "../icons"
import ScheduleDemo from "../search/schedule-demo"
import RecordRenderer from "../shared/record-renderer"
import { getTitle } from "@/constants/getTitle"

const partnersTableConfig = {
  columns: ["Country", "Import Value (USD %)"],
  rows: [
    {
      country: "US",
      valPercentage: "23%",
      customStyles: {
        country: "text-center",
        valPercentage: "text-center",
      },
    },

    {
      country: "China",
      valPercentage: "29%",
      customStyles: {
        country: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Japan",
      valPercentage: "10%",
      customStyles: {
        country: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "United States",
      valPercentage: "6.5%",
      customStyles: {
        country: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "India",
      valPercentage: "2.2%",
      customStyles: {
        country: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "China",
      valPercentage: "3.5%",
      customStyles: {
        country: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "Indonesia",
      valPercentage: "5.5%",
      customStyles: {
        country: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "Australia",
      valPercentage: "1.5%",
      customStyles: {
        country: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "UK",
      valPercentage: "2.5%",
      customStyles: {
        country: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },

    {
      country: "India",
      valPercentage: "6.5%",
      customStyles: {
        country: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },

    {
      country: "China",
      valPercentage: "6.5%",
      customStyles: {
        country: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
  ],
}

type Tab = {
  id: number;
  label: string;
};

const tabs: Tab[] = [
  { id: 1, label: 'Countries Imports from' },
  { id: 2, label: 'Countries Exports to' },
];



const CompanyImportsFrom = () => {
  const [hover, setHover] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const handleTabChange = (tabId: SetStateAction<number>) => {
    setSelectedTab(tabId);
  };
  const [selectedTab, setSelectedTab] = useState(1);
  
  const title1 = "Where ABCD Private Limited Imports from ?"
const title2 = "Where ABCD Private Limited Exports to ?";
  
const viewtext1 ="ABCD Private Limited Imports from US 23%, China 21%, Japan 18% and more"
const viewtext2 ="ABCD Private Limited Imports to US 23%, China 21%, Japan 18% and more"
  


  return (
    <>
    <NavigationTabs tabs={tabs} onSelectTab={handleTabChange} />
      {open && (
        <ScheduleDemo
          handleKeyPress={(e) => {
            if (e.key === "Escape") {
              setOpen(false)
            }
          }}
          handleBackdropClick={() => {
            setOpen(false)
          }}
        />
      )}
      <div className="flex flex-col items-center py-11">
        <div className="flex w-3/4 flex-col gap-2 p-10">
          <div className="w-full text-center text-3xl  text-raisin-black"style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
          {getTitle(title1,title2,selectedTab)}
          </div>
          <div className="text-center text-base font-normal text-dim-gray">
          {getTitle(viewtext1 ,viewtext2 ,selectedTab)}
          </div>
        </div>
        <div className="flex w-full flex-row-reverse gap-0 px-11 pb-11 md:gap-5">
          <div className="w-full md:max-w-[500px]">
            <RecordRenderer
              columns={partnersTableConfig.columns}
              rows={partnersTableConfig.rows}
              pagination={false}
              classNameHeader="h-12 text-center text-base text-center font-semibold bg-deep-saffron"
              classNameRow="h-11"
            />
          </div>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="invisible relative flex w-[0px] cursor-pointer items-center justify-center p-0 md:visible md:w-full md:p-2"
          >
            {hover && (
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded-lg bg-black bg-opacity-50 text-white">
                <Icons.lockColored className="h-[32px] w-[32px]" />
                <div className="w-3/4 text-center text-base font-bold text-opacity-100">
                  Subscribe today to Market Inside pro and access the latest
                  data
                </div>
                <button
                  onClick={() => setOpen(true)}
                  className="box-content inline-block  bg-princeton-orange px-4 py-2 text-center text-base font-semibold uppercase tracking-wider text-white transition duration-500 ease-in-out hover:shadow-schedule-btn"
                >
                  Schedule a Demo
                </button>
              </div>
            )}
            <Image src="/world.svg" alt="world" height={310} width={750} unoptimized={true}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyImportsFrom
