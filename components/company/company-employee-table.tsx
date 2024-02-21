"use client"

import { useState } from "react"
import Image from "next/image"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Icons } from "../icons"
import ScheduleDemo from "../search/schedule-demo"
import Pagination from "../shared/pagination"

const IconMap = {
  "*": <Icons.lockColored className="inline h-6 w-8" />,
  up: <Icons.up className="inline h-6 w-8" />,
  down: <Icons.lockColored className="inline h-6 w-8" />,
}

export default function CompanyEmployeeTable({
  showBtn = false,
  pagination = false,
}: Readonly<{
  showBtn?: boolean
  pagination?: boolean
}>) {
  const [open, setOpen] = useState<boolean>(false)

  const commonStyles = {
    name: "blur-sm",
    designation: "blur-sm",
    location: "blur-sm",
    email: "blur-sm",
    secondaryEmail: "blur-sm",
    phone: "blur-sm",
  }

  const columns = [
    "Name",
    "Designation",
    "Location",
    "Email",
    "Email",
    "Phone No.",
  ]

  const data = [
    {
      name: "Siddharth Karnawat",
      designation: "Head Trade Marketing, Service Delivery & NFR",
      location: "Maharashtra",
      email: "Purnendu.Baroowa@Nayaraenergy.Com	",
      secondaryEmail: "View email..",
      phone: "(+91) 9899 * * * * * * *",
      customStyles: {
        email: "blur-sm",
      } as any,
    },
    {
      name: "Purnendu Baroowa",
      designation: "Divisional Head",
      location: "Maharashtra",
      email: "Purnendu.Baroowa@Nayaraenergy.Com	",
      secondaryEmail: "View email..",
      phone: "(+91) 9899 * * * * * * *",
    },
    {
      name: "Purnendu Baroowa",
      designation: "Divisional Head",
      location: "Maharashtra",
      email: "Ashish.Niranjan@Nayaraenergy.Com",
      secondaryEmail: "View email..",
      phone: "(+91) 9899 * * * * * * *",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      name: "Ashish Niranjan",
      designation: "Vice President And Head, Shipping And Operations",
      location: "Maharashtra",
      email: "Ashish.Niranjan@Nayaraenergy.Com",
      secondaryEmail: "View email..",
      phone: "(+91) 9899 * * * * * * *",
    },
    {
      name: "Ashish Niranjan",
      designation: "Head Brand",
      location: "Maharashtra",
      email: "Shashank.Patwa@Nayaraenergy.Com",
      secondaryEmail: "View email..",
      phone: "(+91) 9899 * * * * * * *",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      name: "Shashank Patwa",
      designation: "Head Brand Communication",
      location: "Maharashtra",
      email: "Shashank.Patwa@Nayaraenergy.Com",
      secondaryEmail: "View email..",
      phone: "(+91) 9899 * * * * * * *",
    },
    {
      name: "Shashank Patwa",
      designation: "271019990025",
      location: "Gujarat",
      email: "Gaurav.Chatterjee@Nayaraenergy.Com",
      secondaryEmail: "View email..",
      phone: "(+91) 9899 * * * * * * *",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      name: "Shashank Patwa",
      designation: "Head Logistics (Petrochemicals)",
      location: "Gujarat",
      email: "Gaurav.Chatterjee@Nayaraenergy.Com",
      secondaryEmail: "View email..",
      phone: "(+91) 9899 * * * * * * *",
    },
  ]
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

      <div className="relative mt-4 max-w-[100vw] overflow-scroll">
        {false && (
          <div
            onClick={() => setOpen(true)}
            className="absolute bottom-0 z-10 flex h-[220px] w-full cursor-pointer flex-col items-center justify-center  gap-[20px]"
          >
            <Image src="/lockdata.png" alt="lock" height={32} width={32} />
            <div className="w-1/2 text-center text-base font-bold ">
              Subscribe today to Market Inside pro and access the latest data
            </div>
            <button
              onClick={() => setOpen(true)}
              className="box-content inline-block  bg-princeton-orange px-4 py-2 text-center text-base font-semibold uppercase tracking-wider text-white transition duration-500 ease-in-out hover:shadow-schedule-btn"
            >
              Schedule a Demo
            </button>
          </div>
        )}
        <Table className="border text-sm">
          <TableHeader>
            <TableRow className="bg-nickel hover:bg-nickel">
              {columns.map((column) => (
                <TableHead key={column} className="text-sm text-white">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, idx) => (
              <TableRow key={`${item.name}_${idx}`}>
                <TableCell
                  className={`cursor-pointer p-2 px-3 text-deep-saffron ${
                    item?.customStyles?.name ?? ""
                  }}`}
                >
                  {item.name}
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${
                    item?.customStyles?.designation ?? ""
                  }`}
                >
                  {item.designation}
                </TableCell>
                <TableCell
                  className={`max-w-[300px] p-2 px-3 ${
                    item?.customStyles?.location ?? ""
                  }`}
                >
                  <span className="line-clamp-1">{item.location}</span>
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${item?.customStyles?.email ?? ""}`}
                >
                  {item.email}
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${
                    item?.customStyles?.secondaryEmail ?? ""
                  }`}
                >
                  {item.secondaryEmail}
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${item?.customStyles?.phone ?? ""}`}
                >
                  {item.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {pagination && (
          <div
            className={`flex w-full items-center ${
              showBtn ? "justify-between" : "justify-center"
            }`}
          >
            <Pagination
              className="mx-0 mt-8"
              total={100}
              page={1}
              limit={10}
              onChange={() => {}}
            />
            {showBtn && (
              <button className="mr-10 mt-8 h-[43px] rounded-full bg-arsenic px-5 text-lg font-semibold text-white">
                Schedule A Demo
              </button>
            )}
          </div>
        )}
      </div>
    </>
  )
}
