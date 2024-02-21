"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { useState } from "react"
import { Icons } from "../icons"
import ScheduleDemo from "../search/schedule-demo"

const IconMap = {
  "*": <Icons.lockColored className="inline h-6 w-8" />,
  up: <Icons.up className="inline h-6 w-8" />,
  down: <Icons.lockColored className="inline h-6 w-8" />,
}

export default function CompanyShipmentTable({
  showBtn = false,
}: Readonly<{
  showBtn?: boolean
}>) {
  const [open, setOpen] = useState<boolean>(false)

  const commonStyles = {
    date: "blur-sm",
    hsCode: "blur-sm",
    productDescription: "blur-sm",
    importerName: "blur-sm",
    exporterName: "blur-sm",
    originCountry: "blur-sm",
    quantity: "blur-sm",
    unit: "blur-sm",
    netWeight: "blur-sm",
    totalValue: "blur-sm",
    importer: "blur-sm",
    exporter: "blur-sm",
  }

  const columns = [
    "Date",
    "HS Code",
    "Product Description",
    "Importer Name",
    "Exporter Name",
    "Origin Country",
    "Quantity",
    "Unit",
    "Net Weight[Kg]",
    "Total Value[usd]",
  ]
  const data = [
    {
      date: "17/Feb/2020",
      hsCode: "381121001000",
      productDescription:
        "R00301b 218 kg * other prepared additives for other liquid",
      importerName: "*",
      exporterName: "*",
      originCountry: "France",
      quantity: "872",
      unit: "Kilogram",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        netWeight: "blur-sm",
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "848790900011",
      productDescription: "Oil seal",
      importerName: "*",
      exporterName: "*",
      originCountry: "Poland",
      quantity: "8880",
      unit: "Units",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        quantity: "blur-sm",
        netWeight: "blur-sm",
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "391000000019",
      productDescription: "Silicone oils (solid)",
      importerName: "*",
      exporterName: "*",
      originCountry: "Germany",
      quantity: "1250",
      unit: "Units",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "842123000000",
      productDescription: "Oil filter-wd 962/32",
      importerName: "*",
      exporterName: "*",
      originCountry: "Germany",
      quantity: "120",
      unit: "Kilogram",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "841950800000",
      productDescription: "Oil cooler",
      importerName: "*",
      exporterName: "*",
      originCountry: "France",
      quantity: "872",
      unit: "Kilogram",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "841229819000",
      productDescription: "Hydraulic oil motor",
      importerName: "*",
      exporterName: "*",
      originCountry: "Russia",
      quantity: "872",
      unit: "Kilogram",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "271019990025",
      productDescription: "Other lubrication oils",
      importerName: "*",
      exporterName: "*",
      originCountry: "France",
      quantity: "872",
      unit: "Kilogram",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "270900900000",
      productDescription: "Crude oil",
      importerName: "*",
      exporterName: "*",
      originCountry: "France",
      quantity: "872",
      unit: "Kilogram",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "330499009013",
      productDescription:
        "Face cream / eye cream / aloe multi-purpose skin gel ",
      importerName: "*",
      exporterName: "*",
      originCountry: "France",
      quantity: "872",
      unit: "Kilogram",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        ...commonStyles,
      } as any,
    },
    {
      date: "17/Feb/2020",
      hsCode: "842123000000",
      productDescription: "Oil filter",
      importerName: "*",
      exporterName: "*",
      originCountry: "France",
      quantity: "872",
      unit: "Kilogram",
      netWeight: "872",
      totalValue: "6174.34",
      customStyles: {
        ...commonStyles,
      } as any,
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
              <TableRow key={`${item.hsCode}_${idx}`}>
                <TableCell
                  className={`p-2 px-3 ${item?.customStyles?.date ?? ""}`}
                >
                  {item.date}
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${item?.customStyles?.hsCode ?? ""}`}
                >
                  {item.hsCode}
                </TableCell>
                <TableCell
                  className={`max-w-[300px] p-2 px-3 ${
                    item?.customStyles?.productDescription ?? ""
                  }`}
                >
                  <span className="line-clamp-1">
                    {item.productDescription}
                  </span>
                </TableCell>
                <TableCell
                  className={`p-2 px-3 text-center ${
                    item?.customStyles?.importer ?? ""
                  }`}
                >
                  <Icons.lockColored className="inline h-6 w-8" />
                </TableCell>
                <TableCell
                  className={`p-2 px-3 text-center ${
                    item?.customStyles?.exporter ?? ""
                  }`}
                >
                  <Icons.lockColored className="inline h-6 w-8" />
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${
                    item?.customStyles?.originCountry ?? ""
                  }`}
                >
                  {item.originCountry}
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${item?.customStyles?.quantity ?? ""}`}
                >
                  {item.quantity}
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${item?.customStyles?.unit ?? ""}`}
                >
                  {item.unit}
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${item?.customStyles?.netWeight ?? ""}`}
                >
                  {item.netWeight}
                </TableCell>
                <TableCell
                  className={`p-2 px-3 ${item?.customStyles?.totalValue ?? ""}`}
                >
                  {item.totalValue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
