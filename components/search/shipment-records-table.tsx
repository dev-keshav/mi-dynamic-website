"use client"

import { useEffect, useState } from "react"
import axiosInstance from "@/config/axios";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Icons } from "../icons"
import Pagination from "../shared/pagination"
import ScheduleDemo from "./schedule-demo"
import { isAny } from "tailwind-merge/dist/lib/validators";
import { Console } from "console";
import { useData } from "@/context/store";

const IconMap = {
  "*": <Icons.lockColored className="inline h-6 w-8" />,
  up: <Icons.up className="inline h-6 w-8" />,
  down: <Icons.lockColored className="inline h-6 w-8" />,
}

export default function ShipmentRecordsTable({
  showBtn = false,
}: Readonly<{
  showBtn?: boolean
}>) {
  
  const [showDemo, setShowDemo] = useState(false)
  
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


  interface Product {
    date: string;
    importer: string;
    unit: string;
    quantity: string;
    product_description: string;
    net_weight_kg: number;
    total_value_usd: number;
    hs_code: string;
    origin_country: string;
  }
  
  interface DataState {
    total_shipments: number;
    total_value_usd: number;
    products: Product[];
  }

   

// Define the type with optional 'country' property
const {  trade, origin_country, isFilterActive, exporter, importer, hscode_filter } = useData();

function formatDate(dateString : string) {
  const options: any = { day: '2-digit', month: 'short', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', options).replace(/ /g, '/').replace(/\./g, '');
}

const isError = (trade: any): trade is { message: string, code: string } => {
  return trade && typeof trade === 'object' && 'message' in trade && 'code' in trade;
};

const [filteredData, setFilteredData] = useState<Product[]>([]);
useEffect(() => {
  let newData = trade?.products || [];

  // Apply origin country filter if filter is active and origin_country is specified
  if (isFilterActive && origin_country && origin_country !== 'All') {
    newData = newData.filter((item: Product) => item.origin_country === origin_country);

  }

  // Apply hs code filter if filter is active and hscode_filter is specified and not 'All'
  if (isFilterActive && hscode_filter && hscode_filter !== 'All') {
    newData = newData.filter((item: Product) => item.hs_code === hscode_filter);
  }

  setFilteredData(newData);
}, [trade, origin_country, hscode_filter, isFilterActive]);


  return (
    <div className="mt-4 max-w-[100vw] ">
      {showDemo && (
        <ScheduleDemo
          handleKeyPress={(e) => {
            if (e.key === "Escape") {
              setShowDemo(false)
            }
          }}
          handleBackdropClick={() => {
            setShowDemo(false)
          }}
        />
      )}
      
      {trade ? (
        isError(trade) && trade.message === 'Request failed with status code 400' ? (
          <div>
            <p>code : {trade.code}</p>
          </div>
        ) :(
        <Table className="border " style={{fontSize:'13px'}}>
          <TableHeader>
            <TableRow className="bg-alternative hover:bg-alternative" >
              {columns.map((column) => (
                <TableHead key={column} className="text-xs text-white" >
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item : any, idx : any) => (
              <TableRow key={`${item.hs_code}_${idx}`}>
                <TableCell className="p-2 px-3" >{formatDate(item.date)}</TableCell>
                <TableCell className="p-2 px-3">{item.hs_code}</TableCell>
                <TableCell className="max-w-[320px] p-2 ">
                
                  <span className="line-clamp-1" title={item.product_description}>{item.product_description}</span>
                </TableCell>
                <TableCell className="p-2 px-3 text-center">
                  <Icons.lockColored className="inline h-6 w-8" />
                </TableCell>
                <TableCell className="p-2 px-3 text-center">
                  <Icons.lockColored className="inline h-6 w-8" />
                </TableCell>
                <TableCell className="p-2 px-3">{item.origin_country}</TableCell>
                <TableCell className="p-2 px-3">{item.quantity}</TableCell>
                <TableCell className="p-2 px-3">{item.unit}</TableCell>
                <TableCell className="p-2 px-3">{item.net_weight_kg}</TableCell>
                <TableCell className="p-2 px-3">{item.total_value_usd}</TableCell>
              </TableRow>
            ))}
            
          </TableBody>
        </Table>)
        
      ): (<>
            <Skeleton  className="h-[48px]"/> 
            <Skeleton count={10} className="h-[40px]"/> 
      </>)}
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
          onChange={() => {setShowDemo(true)}}
        />
        {/* <div>
        <button
            className="h-[40px] rounded-full mr-2 bg-gray px-5 text-s font-semi text-black transition-all duration-300 ease-in-out hover:bg-darkgray hover:text-white"
          >
            Download Excel
          </button><button
            className="h-[40px] rounded-full mr-2 bg-gray px-5 text-s font-semi text-black transition-all duration-300 ease-in-out hover:bg-darkgray hover:text-white"
          >
            Download PDF
          </button></div> */}
      </div>
    </div>
  )
}
