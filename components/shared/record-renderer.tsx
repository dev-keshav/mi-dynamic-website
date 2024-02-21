"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
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

export const iconMap = {
  "*": <Icons.lockColored className="inline h-4 w-4 text-green-600" />,
  up: <Icons.up className="inline h-4 w-4" />,
  down: <Icons.down className="inline h-4 w-4 text-red-600" />,
}

export default function   RecordRenderer({
  columns,
  rows,
  onChange = () => {},
  total = 100,
  page = 1,
  limit = 10,
  pagination = true,
  classNameHeader = "",
  classNameRow = "",
  isLocked = false,
  classNameWrapper = "",
  
  ...rest
}: Readonly<{
  columns: string[]
  rows: { [key: string]: any }[]
  onChange?: () => void
  total?: number
  page?: number
  limit?: number
  pagination?: boolean
  classNameHeader?: string
  classNameRow?: string
  classNameWrapper?: string
  isLocked?: boolean
 

}>) {
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
      <div className={`relative mt-4 h-[400px] max-w-[100vw] overflow-y-scroll`}>
        {isLocked && (
          <div
            onClick={() => setOpen(true)}
            className="absolute bottom-0 z-10 flex h-[220px] w-full cursor-pointer flex-col items-center justify-center  gap-[20px]"
          >
            <Image src="/lockdata.png" alt="lock" height={32} width={32} unoptimized={true}/>
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
        <Table className="border text-sm ">
          <TableHeader>
            <TableRow
              className={cn(
                "bg-alternative hover:bg-alternative",
                classNameHeader
              )}
            >
              {columns.map((column, idx) => (
                <TableHead
                  key={column}
                  className={cn(
                    `bg-dark-gunmetal text-sm text-white ${
                      idx > 0 && "text-center"
                    }`,
                    classNameHeader
                  )}
                >
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((item, idx) => {
              return (
                <TableRow key={idx} className={classNameRow}>
                  {Object.keys(item).map((val) => {
                    const customStyles = item?.customStyles
                    const customClass =
                      customStyles && val && customStyles[val]
                        ? customStyles[val]
                        : ""

                    const className = `p-2 px-3 ${customClass}`

                    return (
                      val !== "customStyles" && (
                        <TableCell key={val} className={className}>
                          {item[val]}
                        </TableCell>
                      )
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        {pagination && (
          <div>
            <Pagination
              className="mt-8"
              total={total}
              page={page}
              limit={limit}
              onChange={onChange}
              {...rest}
            />
          </div>
        )}
      </div>
    </>
  )
}
