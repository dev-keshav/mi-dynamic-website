"use client"

import { useState } from "react"
import Image from "next/image"
import ScheduleDemo from "../search/schedule-demo"
import { Icons } from "../icons"
import { getTitle } from "@/constants/getTitle"
import NavigationTabs from "./nav-tab"
import { title } from "process"

const CompanyExporter = () => {
  const [hover, setHover] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  type Tab = {
    id: number;
    label: string;
  };

  const tabs: Tab[] = [
    { id: 1, label: 'Buyers' },
    { id: 2, label: 'Suppliers' },
  ];

  const handleTabChange = (tabId:any) => {
    setSelectedTab(tabId);
  };
  const [selectedTab, setSelectedTab] = useState(1);
  const title1 = "Who are the top buyers of ABCD Private Limited?"
  const title2 = "Who are the top suppliers of ABCD Private Limited?"

  const viewtext1="Top buyers of ABCD Private Limited are XYZ, ACCD, AICD and more"
const viewtext2="Top suppliers of ABCD Private Limited are XYZ, ACCD, AICD and more"
  return (
    <>
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
      <NavigationTabs tabs={tabs} onSelectTab={handleTabChange} />
      <div className="hidden flex-col items-center py-11 md:flex">
        <div className="flex w-3/4 flex-col gap-2 p-10">
          <div className="w-full text-center text-3xl  text-raisin-black"style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
          {getTitle(title1,title2,selectedTab)}
          </div>
          <div className="text-center text-base font-normal text-dim-gray">
          {getTitle(viewtext1 ,viewtext2 ,selectedTab)}
          </div>
        </div>
        <div className="flex w-full  gap-5 px-11 pb-11">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative flex w-full cursor-pointer items-center justify-center p-0 md:p-2"
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
                  className="box-content inline-block  bg-princeton-orange px-4 py-2 text-center text-base font-semibold uppercase tracking-wider text-white transition duration-500 ease-in-out   hover:shadow-schedule-btn"
                >
                  Schedule a Demo
                </button>
              </div>
            )}
            <Image
              src="/tree-graph.png"
              alt="tree-graph"
              height={310}
              width={750}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyExporter
