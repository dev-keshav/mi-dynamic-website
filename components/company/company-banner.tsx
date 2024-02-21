"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { StatRenderer } from "../import-agra-icd-port/agra-import-data"

const statsConfig = [
  { title: "Import Turnover:", des: "154 Million" },
  { title: "Export Turnover:", des: "121 Million" },
  { title: "Import Rank:", des: "40" },  
  { title: "Export Rank in India:", des: "30" },
]

const companyInfoConfig = {
  name: "ABCD Private Limited",
  tenure: "(June 2019 to May 2020)",
  location: "Mumbai Maharashtra, Maharashtra, Pin 400021",
  country: "India",
  logo: "/adbclimite.png",
}

const siteMap = [
  { item: "Overview", id: "overview" },
  { item: "Import & Export Turnover", id: "Import & Export Turnover" },
  { item: "Countries", id: "Countries" },
  { item: "Commodities", id: "commodities" },
  { item: "Supply Chain", id: "supply-chain" },
  { item: "Ports", id: "ports" },
  { item: "Competitors", id: "competitors" },
  { item: "Shipment Records", id: "shipment-records" },
  { item: "Company Contacts", id: "company-contracts" },
  { item: "FAQs", id: "faqs" },
]

const CompanyBanner = () => {
  const stickyRelocate = () => {
    const windowTop = window.scrollY
    const anchorElement = document.getElementById("sticky-anchor")
    const divTop = anchorElement?.offsetTop ?? 0

    const stickyElement = document.getElementById("sticky")

    if (windowTop > divTop) {
      stickyElement?.classList.add("stick")
    } else {
      stickyElement?.classList.remove("stick")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", stickyRelocate)
    stickyRelocate()
    return () => {
      window.removeEventListener("scroll", stickyRelocate)
    }
  }, [])

  return (
    <>
      <div className="flex flex-col bg-anti-flash-white px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center ml-2">
          <div className="mt-12 bg-white px-3 py-12 md:mx-4 md:w-1/3" style={{width: '300px'}}>
            <Image
              src={companyInfoConfig.logo}
              width={380}
              height={250}
              alt="logo"
              unoptimized={true}
            />
          </div>
          <div className="w-full py-8 md:mx-4 md:w-2/3">
            
            <h1 className="mb-2 text-4xl  leading-10 text-arsenic mt-3">
              {companyInfoConfig.name}
            </h1>
            <p className="mb-4 text-base text-dark-dim-grey">
              {companyInfoConfig.tenure}
            </p>
            <p className="mb-2 flex items-center gap-2 font-medium text-arsenic">
              <svg
                className="h-4 w-4 text-deep-saffron"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="map-marker-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                ></path>
              </svg>
              {companyInfoConfig.location}
            </p>
            <p className="mb-4 flex items-center gap-2 font-medium text-arsenic">
              <svg
                className="h-4 w-4 text-deep-saffron"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="flag"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M336.174 80c-49.132 0-93.305-32-161.913-32-31.301 0-58.303 6.482-80.721 15.168a48.04 48.04 0 0 0 2.142-20.727C93.067 19.575 74.167 1.594 51.201.104 23.242-1.71 0 20.431 0 48c0 17.764 9.657 33.262 24 41.562V496c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-83.443C109.869 395.28 143.259 384 199.826 384c49.132 0 93.305 32 161.913 32 58.479 0 101.972-22.617 128.548-39.981C503.846 367.161 512 352.051 512 335.855V95.937c0-34.459-35.264-57.768-66.904-44.117C409.193 67.309 371.641 80 336.174 80zM464 336c-21.783 15.412-60.824 32-102.261 32-59.945 0-102.002-32-161.913-32-43.361 0-96.379 9.403-127.826 24V128c21.784-15.412 60.824-32 102.261-32 59.945 0 102.002 32 161.913 32 43.271 0 96.32-17.366 127.826-32v240z"
                ></path>
              </svg>
              {companyInfoConfig.country}
            </p>
            <div className="mb-2 flex flex-col gap-[10px] py-[15px] md:mr-[200px] md:flex-row md:justify-between md:gap-5">
              {statsConfig.map(({ title, des }) => {
                return <StatRenderer key={title} title={title} des={des} />
              })}
            </div>
          </div>
        </div>
        <div className="mt-5 flex w-full flex-wrap justify-center gap-5 px-2 md:mt-8">
          {siteMap.map(({ item, id }, idx) => (
            <Link
              className={cn(
                "flex gap-4 text-[16px] font-semibold text-princeton-orange hover:text-davy-grey"
              )}
              key={id}
              href={`#${id}`}
            >
              {item}
              {siteMap.length - 1 > idx && (
                <div key={item} className="text-black">
                  |
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div id="sticky-anchor"></div>
      <div
        id="sticky"
        className="hidden min-h-[160px] w-full px-16 shadow-fixed-card"
      >
        <div className="relative mb-[10px] mt-[-10px] flex w-full items-center justify-between text-[28px] font-extrabold text-princeton-orange">
          <div> ABCD Private Limited</div>
          <button className="btn-styles mr-[-40px] mt-[25px] h-[45px] w-fit px-4 py-2 font-semibold text-white shadow-md focus:outline-none">
            Schedule a Demo
          </button>
        </div>
        <div className="mt-[-35px] flex w-3/4 items-center justify-between">
          <div className="mb-2 flex flex-col gap-[10px] md:mr-[200px] md:flex-row md:gap-8">
            {statsConfig.map(({ title, des }) => {
              return (
                <StatRenderer
                  key={title}
                  title={title}
                  des={des}
                  classTitle="text-sm"
                  classDes="mt-[-10px] text-lg"
                  classWrapper="!gap-0"
                />
              )
            })}
          </div>
          <div className="mt-[-10px] p-3">
            <Image
              src={companyInfoConfig.logo}
              width={100}
              height={80}
              alt="logo"
              unoptimized={true}
            />
          </div>
        </div>

        <div className="mb-[10px] flex w-full flex-wrap gap-5">
          {siteMap.map(({ item, id }, idx) => (
            <Link
              className={cn(
                "flex gap-4 text-[16px] font-bold text-princeton-orange hover:text-davy-grey"
              )}
              key={id}
              href={`#${id}`}
            >
              {item}
              {siteMap.length - 1 > idx && (
                <div key={item} className="text-black">
                  |
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default CompanyBanner
