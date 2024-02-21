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
  "Chapter",
  "Chapter Description",
  "Country Name",
  "Import Partner",
  "April 2020",
  "May 2020 Import Value (US$)",
]

const importTableData = [
  {
    chapter: "Chapter 01",
    chapterDes: "Live Animals",
    country: "India",
    importPartner: "Argentina",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
  },
  {
    chapter: "Chapter 02",
    chapterDes: "Meat",
    country: "India",
    importPartner: "Argentina",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
  },
  {
    chapter: "Chapter 03",
    chapterDes: "Fish and Crustceans",
    country: "India",
    importPartner: "Argentina",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
  },
  {
    chapter: "Chapter 04",
    chapterDes: "Dairy Products",
    country: "India",
    importPartner: "Argentina",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
  },
  {
    chapter: "Chapter 05",
    chapterDes: "Animal Origin Products",
    country: "India",
    importPartner: "Argentina",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
  },
  {
    chapter: "Chapter 06",
    chapterDes: "Live Trees and Other Plants",
    country: "India",
    importPartner: "Argentina",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
  },
  {
    chapter: "Chapter 07",
    chapterDes: "Edible Vegetables and Certain Roots",
    country: "India",
    importPartner: "Argentina",
    prevMonth: {
      val: "35,000",
      icon: "up",
    },
    currentMonth: {
      val: "25,000",
      icon: "down",
    },
  },
]

const iconMap = {
  "*": <Icons.lockColored className="inline h-4 w-4 " />,
  up: <Icons.up className="inline h-4 w-4 text-green-600" />,
  down: <Icons.down className="inline h-4 w-4 text-red-600" />,
}

export default function ImportStaticsRecords() {
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
          {importTableData.map((item, idx) => {
            return (
              <TableRow key={item.chapter}>
                <TableCell className="w-1/6 p-2 px-3">{item.chapter}</TableCell>
                <TableCell className="p-2 px-3">{item.chapterDes}</TableCell>
                <TableCell className="p-2 px-3">{item.country}</TableCell>
                <TableCell className="p-2 px-3">{item.importPartner}</TableCell>
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
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <div>
        {/* <Pagination
          className="mt-8"
          total={100}
          page={1}
          limit={10}
          onChange={() => {}}
        /> */}
      </div>
    </div>
  )
}
