"use client"

import { useState } from "react"

import ScheduleDemo from "../search/schedule-demo"
import NavigationTabs from "./nav-tab"
import { getTitle } from "@/constants/getTitle"

const competitorsCardConfig = [
  {
    company: "Exxon Mobil Corporation",
    info: [
      {
        title: "Import Turnover:",
        des: "154 Million",
      },
      {
        title: "No. of Employees:",
        des: "201-500",
      },
    ],
  },
  {
    company: "Exxon Mobil Corporation",
    isBlur: true,
    info: [
      {
        title: "Import Turnover:",
        des: "154 Million",
      },
      {
        title: "No. of Employees:",
        des: "201-500",
      },
    ],
  },
  {
    company: "Exxon Mobil Corporation",
    isBlur: true,
    info: [
      {
        title: "Import Turnover:",
        des: "154 Million",
      },
      {
        title: "No. of Employees:",
        des: "201-500",
      },
    ],
  },
  {
    company: "Exxon Mobil Corporation",
    isBlur: true,
    info: [
      {
        title: "Import Turnover:",
        des: "154 Million",
      },
      {
        title: "No. of Employees:",
        des: "201-500",
      },
    ],
  },
]




export const CompetitorsInfoRender = ({
  title,
  des,
}: Readonly<{
  title: string
  des: string
}>) => {
  return (
    <div className="flex w-[150px] flex-col gap-3 text-charleston-green md:w-fit">
      <div className="text-sm font-medium text-deep-saffron">{title}</div>
      <div className="text-sm font-bold">{des} </div>
    </div>
  )
}

const ImportCard = ({
  company,
  info,
  isBlur = false,
}: Readonly<{
  company: string
  info: { title: string; des: string }[]
  isBlur?: boolean
}>) => {
  return (
    <div
      className={`mx-[2px] flex w-full flex-col border-2 border-deep-saffron p-10 lg:w-[48%] ${
        isBlur && "blur-sm"
      }`}
    >
      <h4 className="mb-2 cursor-pointer text-2xl font-normal">{company}</h4>
      <div className="flex gap-3">
        {info.map(({ title, des }) => (
          <CompetitorsInfoRender title={title} des={des} />
        ))}
      </div>
    </div>
  )
}

type Tab = {
  id: number;
  label: string;
};

const tabs: Tab[] = [
  { id: 1, label: 'Import Competitors' },
  { id: 2, label: 'Export Competitors' },
];






const CompanyCompetitors = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedTab, setSelectedTab] = useState(1);
  const handleTabChange = (tabId:any) => {
    setSelectedTab(tabId);
  };

  const title1 = "Top Import Competitors of ABCD Private Limited"
const title2 = "Top Export Competitors of ABCD Private Limited";

  return (
    
    <><NavigationTabs tabs={tabs} onSelectTab={handleTabChange} />
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
      <div id="import-ports" className="flex flex-col  items-center py-11">
        <div className="flex w-3/4 flex-col gap-2 p-0 lg:p-10">
          <div className="w-full pb-10 text-center text-3xl  text-raisin-black"style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
          {getTitle(title1,title2,selectedTab)}
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 px-11 pb-11 lg:flex-row">
          <div className="flex w-full flex-wrap gap-4 px-0 lg:w-[75%]  lg:px-4">
            {competitorsCardConfig.map(({ company, isBlur, info }) => (
              <ImportCard company={company} isBlur={isBlur} info={info} />
            ))}
          </div>
          <div className="flex w-full flex-col items-center justify-center border-2 border-deep-saffron bg-transparent-saffron px-8 py-16 hover:bg-dark-transparent-saffron lg:w-1/3">
            <h3 className="mb-6 text-center text-3xl font-semibold">
              Want to know your competitors?
            </h3>
            <h5 className="mb-6 text-center text-xl font-medium">
              Get detailed trade data of 3M+ companies and monitor the trade
              activities of your competitors.
            </h5>
            <button
              onClick={() => setOpen(true)}
              className="box-content inline-block w-[200px]  bg-princeton-orange px-4 py-2 text-center text-base font-semibold uppercase tracking-wider text-white transition duration-500 ease-in-out hover:shadow-schedule-btn"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyCompetitors
