import { importColumnData } from "@/constants"

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
import Pagination from "../shared/pagination"

const importTableData = [
  {
    chapter: "Chapter 01",
    des: "Live Animals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 02",
    des: "Meat",
    prevMonth: "34,000",
    currentMonth: {
      val: "36,000",
      icon: "up",
    },
    lastYear: { val: "46,000", icon: "down" },
    currentYear: "76,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 03",
    des: "Fish and Crustceans",
    prevMonth: "22,000",
    currentMonth: {
      val: "42,000",
      icon: "up",
    },
    lastYear: { val: "22,000", icon: "down" },
    currentYear: "52,000",
    totalShare: "50%",
  },
  {
    chapter: "Chapter 04",
    des: "Dairy Products",
    prevMonth: "51,000",
    currentMonth: {
      val: "31,000",
      icon: "up",
    },
    lastYear: { val: "32,000", icon: "down" },
    currentYear: "71,000",
    totalShare: "50%",
  },
  {
    chapter: "Chapter 05",
    des: "Animal Origin Products",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "66,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 06",
    des: "Live Trees and Other Plants",
    prevMonth: "35,000",
    currentMonth: {
      val: "32,000",
      icon: "up",
    },
    lastYear: { val: "62,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 07",
    des: "Edible Vegetables and Certain Roots",
    prevMonth: "32,000",
    currentMonth: {
      val: "65,000",
      icon: "up",
    },
    lastYear: { val: "82,000", icon: "down" },
    currentYear: "65,000",
    totalShare: "50%",
  },
  {
    chapter: "Chapter 08",
    des: "Edible Fruits and Nuts",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 09",
    des: "Coffee, Tea, Mate & Spices",
    prevMonth: "42,000",
    currentMonth: {
      val: "32,000",
      icon: "up",
    },
    lastYear: { val: "65,000", icon: "down" },
    currentYear: "42,000",
    totalShare: "50%",
  },
  {
    chapter: "Chapter 10",
    des: "Cereals",
    prevMonth: "35,000",
    currentMonth: {
      val: "25,000",
      icon: "up",
    },
    lastYear: { val: "51,000", icon: "down" },
    currentYear: "55,000",
    totalShare: "100%",
  },
  {
    chapter: "Chapter 11",
    des: "Milling Industry Products",
    prevMonth: "42,000",
    currentMonth: {
      val: "32,000",
      icon: "up",
    },
    lastYear: { val: "65,000", icon: "down" },
    currentYear: "42,000",
    totalShare: "50%",
  },
  {
    chapter: "Chapter 12",
    des: "Oil Seeds and Oleaginous Fruits",
    prevMonth: "42,000",
    currentMonth: {
      val: "32,000",
      icon: "up",
    },
    lastYear: { val: "65,000", icon: "down" },
    currentYear: "42,000",
    totalShare: "50%",
  },
  {
    chapter: "Chapter 13",
    des: "Lac Gums, Resins and Other Vegetable Saps & Extracts",
    prevMonth: "42,000",
    currentMonth: {
      val: "32,000",
      icon: "up",
    },
    lastYear: { val: "65,000", icon: "down" },
    currentYear: "42,000",
    totalShare: "50%",
  },
  {
    chapter: "Chapter 14",
    des: "Vegetable Planting Materials",
    prevMonth: "42,000",
    currentMonth: {
      val: "32,000",
      icon: "up",
    },
    lastYear: { val: "65,000", icon: "down" },
    currentYear: "42,000",
    totalShare: "50%",
  },
]

export const iconMap = {
  "*": <Icons.lockColored className="inline h-4 w-4 " />,
  up: <Icons.up className="inline h-4 w-4 text-green-600" />,
  down: <Icons.down className="inline h-4 w-4 text-red-600" />,
}

export default function CommodityRecordsTable() {
  return (
    <div className="mt-4 h-[500px] max-w-[100vw] overflow-y-scroll">
      <Table className="border text-sm ">
        <TableHeader className={cn("bg-dark-gunmetal text-sm text-white")}>
          <TableRow className="bg-alternative hover:bg-alternative">
            {importColumnData.map((column) => (
              <TableHead
                key={column}
                className="bg-dark-gunmetal text-base text-white"
              >
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {importTableData.map((item, idx) => {
            return (
              <TableRow className="h-[54px]" key={`${item.chapter}_${idx}`}>
                <TableCell className="w-1/6 p-2 px-3">{item.chapter}</TableCell>
                <TableCell className="p-2 px-3">{item.des}</TableCell>
                <TableCell className="max-w-[300px] p-2 px-3">
                  <span className="line-clamp-1">{item.prevMonth}</span>
                </TableCell>
                <TableCell className="p-2 px-3 text-center">
                  <div className="flex items-center gap-1">
                    {
                      iconMap[
                        (item?.currentMonth?.icon ||
                          "*") as keyof typeof iconMap
                      ]
                    }
                    {item.currentMonth.val}
                  </div>
                </TableCell>
                <TableCell className="p-2 px-3 text-center">
                  <div className="flex gap-1">
                    {
                      iconMap[
                        (item?.lastYear?.icon || "*") as keyof typeof iconMap
                      ]
                    }
                    {item.lastYear.val}
                  </div>
                </TableCell>
                <TableCell className="p-2 px-3">{item.currentYear}</TableCell>
                <TableCell className="p-2 px-3">{item.totalShare}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
