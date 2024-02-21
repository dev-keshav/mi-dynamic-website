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

const importColumnData = [
  "Chapter Name and Description",
  "Previous Month Nov. 2019 (USD$)",
  "Current Month Dec, 2020 (USD$)",
  "Previous Year 2018 (USD$)",
  "Total Value Year 2019(USD$)",
  "Share Value Year 2019(%)",
]

const importTableData = [
  {
    chapter: "0101 --Horses:live",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
    prevYear: { val: "25,000", icon: "down" },
    totalValue: "55,000",
    shareValue: "100%",
  },
  {
    chapter: "0101 --Horses:live",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
    prevYear: { val: "25,000", icon: "down" },
    totalValue: "55,000",
    shareValue: "100%",
  },
  {
    chapter: "0101 --Horses:live",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
    prevYear: { val: "25,000", icon: "down" },
    totalValue: "55,000",
    shareValue: "100%",
  },
  {
    chapter: "0101 --Horses:live",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
    prevYear: { val: "25,000", icon: "down" },
    totalValue: "55,000",
    shareValue: "100%",
  },
  {
    chapter: "0101 --Horses:live",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
    prevYear: { val: "25,000", icon: "down" },
    totalValue: "55,000",
    shareValue: "100%",
  },
  {
    chapter: "0101 --Horses:live",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
    prevYear: { val: "25,000", icon: "down" },
    totalValue: "55,000",
    shareValue: "100%",
  },
  {
    chapter: "0101 --Horses:live",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
    prevYear: { val: "25,000", icon: "down" },
    totalValue: "55,000",
    shareValue: "100%",
  },
]

const iconMap = {
  "*": <Icons.lockColored className="inline h-4 w-4 " />,
  up: <Icons.up className="inline h-4 w-4 text-green-600" />,
  down: <Icons.down className="inline h-4 w-4 text-red-600" />,
}

export default function UsaIndiaImportRecords() {
  return (
    <div className="mt-4 max-w-[100vw] ">
      <Table className="border text-sm">
        <TableHeader>
          <TableRow className="bg-alternative hover:bg-alternative">
            {importColumnData.map((column) => (
              <TableHead key={column} className="text-sm text-white">
                {column}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {importTableData.map((item) => {
            return (
              <TableRow key={item.chapter}>
                <TableCell className="w-1/6 p-2 px-3">{item.chapter}</TableCell>
                <TableCell className="max-w-[300px] p-2 px-3">
                  <span className="line-clamp-1">
                    {
                      iconMap[
                        (item?.prevMonth?.icon || "*") as keyof typeof iconMap
                      ]
                    }
                    {item.prevMonth.val}
                  </span>
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
                        (item?.prevYear?.icon || "*") as keyof typeof iconMap
                      ]
                    }
                    {item.prevYear.val}
                  </div>
                </TableCell>
                <TableCell className="p-2 px-3">{item.totalValue}</TableCell>
                <TableCell className="p-2 px-3">{item.shareValue}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <div>
        <Pagination
          className="mt-8"
          total={100}
          page={1}
          limit={10}
          onChange={() => {}}
        />
      </div>
    </div>
  )
}
