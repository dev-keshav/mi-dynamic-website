"use client"

import { useState } from "react"
import Image from "next/image"
import { overviewConfig } from "@/constants"

import ScheduleDemo from "../search/schedule-demo"

const OverViewRenderer = ({
  icon,
  title,
  des,
  blurPart = false,
}: {
  icon: string
  des: string
  title: string
  blurPart?: boolean | string
}) => {
  return (
    <div className="flex w-[320px] justify-center text-lg font-normal text-dark-gunmetal md:w-[50%]">
      <div className="flex w-[200px] items-center gap-3 p-3">
        <Image src={icon} alt="title" width={20} height={15} />
        {title}
      </div>
      <div className="flex  w-[220px] flex-wrap items-center gap-[2px] p-3">
        <div>{des}</div>
        {blurPart && <div className="blur-sm">{blurPart}</div>}
      </div>
    </div>
  )
}

const CompanyOverview = () => {
  const [open, setOpen] = useState<boolean>(false)

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
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className=" px-20 pb-10 text-4xl  leading-10 text-black" style={{ fontFamily: 'Roboto, sans-serif',  fontSize: '30px', fontWeight: '500'}}>
          Company Overview
        </h2>
        <div className=" flex w-full flex-wrap  px-20 pb-12 pt-5">
          {overviewConfig.map(({ blurPart, des, icon, title }) => (
            <OverViewRenderer
              key={icon}
              blurPart={blurPart}
              des={des}
              icon={icon}
              title={title}
            />
          ))}
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-5 bg-old-lace py-11 text-black transition-colors hover:bg-dark-lava hover:text-white">
          <Image src="/lockdata.png" alt="lock" height={32} width={32} unoptimized={true}/>
          <div className="w-1/2 text-center text-base font-bold ">
            This information is available in the Market Inside Platform. To
            explore ABCD Private Limited‘s full profile
          </div>
          <button
            onClick={() => setOpen(true)}
            className="box-content inline-block  bg-princeton-orange px-4 py-2 text-center text-base font-semibold uppercase tracking-wider text-white transition duration-500 ease-in-out hover:shadow-schedule-btn"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </>
  )
}

export default CompanyOverview
