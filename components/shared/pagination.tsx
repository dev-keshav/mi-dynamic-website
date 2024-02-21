import React from "react"

import { cn } from "@/lib/utils"

interface IPaginationProps {
  type?: "alphabet" | "number"
  className?: string
  total: number
  page: number
  limit: number
  onChange: (page: number) => void
}
export default function Pagination({
  className,
  total,
  page,
  limit,
  onChange,
  type = "number",
}: IPaginationProps) {
  const [pages, setPages] = React.useState(0)
  const [activePage, setActivePage] = React.useState(page)

  React.useEffect(() => {
    setPages(Math.ceil(total / limit))
  }, [total, limit])

  const handleOnChange = (page: number) => {
    setActivePage(page)
    onChange(page)
  }

  return (
    <div className={cn("m-auto flex w-fit flex-wrap", className)}>
      {/* Prev */}
      <div
        className={cn(
          "flex h-10 w-fit cursor-pointer items-center justify-center rounded-l-sm border  px-2",
          { "bg-granite-gray text-white": page > 1 }
        )}
        onClick={() => handleOnChange(activePage - 1)}
      >
        Previous
      </div>
      {Array.from(Array(pages).keys()).map((index) => (
        <div
          key={index}
          className={cn(
            "flex h-10 w-10 cursor-pointer flex-wrap items-center justify-center border-y border-r text-lg last:border-0 hover:bg-granite-gray hover:text-white",
            { "bg-granite-gray text-white": index + 1 === activePage }
          )}
          onClick={() => handleOnChange(index + 1)}
        >
          {type === "number"
            ? index + 1
            : String.fromCharCode(65 + index).toUpperCase()}
        </div>
      ))}
      {/* Next */}
      <div
        className={cn(
          "flex h-10 w-16 cursor-pointer items-center justify-center rounded-r-sm border"
        )}
        onClick={() => handleOnChange(activePage + 1)}
      >
        Next
      </div>
    </div>
  )
}
