import Image from "next/image"

import RecordRenderer from "../shared/record-renderer"

const commonStyles = {
  customStyles: {
    importers: "text-center",
    valUsd: "text-center",
    value: "text-center",
  },
}

const indiaImportTableConfig = {
  columns: ["Country", "No. of Importers", "Value (%)", "Value (USD million)"],
  rows: [
    {
      country: "Mexico",
      importers: "2",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },
    {
      country: "China",
      importers: "6",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },
    {
      country: "Indonesia",
      importers: "9",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },
    {
      country: "Australia",
      importers: "2",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },
    {
      country: "UK",
      importers: "1",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },
    {
      country: "United States",
      importers: "5",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },

    {
      country: "Japan",
      importers: "1",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },
    {
      country: "Ukraine",
      importers: "2",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },
    {
      country: "China",
      importers: "6",
      valUsd: "2",
      value: 2,
      ...commonStyles,
    },
  ],
}

const ForeignImports = () => {
  return (
    <div className="flex flex-col items-center py-11">
      <div className="flex w-3/4 flex-col gap-2 p-10">
        <div className="w-full text-center text-3xl font-semibold text-raisin-black">
          {"Importers by Foreign Country"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "Top import partners of Live Animals are China (45%), Japan (12%), Russia (10%) and Italy (5%). These stats are based on period from June 2019 to May 2020."
          }
        </div>
      </div>
      <div className="flex w-full flex-row-reverse gap-0 px-11 pb-11 md:gap-5">
        <div className="w-full md:max-w-[560px]">
          <RecordRenderer
            columns={indiaImportTableConfig.columns}
            rows={indiaImportTableConfig.rows}
            pagination={false}
            classNameHeader="h-12  text-[14px] font-medium bg-dark-gunmetal"
            classNameRow="h-11"
          />
        </div>
        <div className="invisible relative flex w-[0px] cursor-pointer items-center justify-center p-0 md:visible md:w-full md:p-2">
          <Image src="/world.svg" alt="world" height={310} width={750} />
        </div>
      </div>
    </div>
  )
}

export default ForeignImports
