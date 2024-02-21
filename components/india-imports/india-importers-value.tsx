import RecordRenderer from "../shared/record-renderer"

const commonStyles = {
  customStyles: {
    importers: "text-center",
    valUsd: "text-center",
    value: "text-center",
  },
}

const indiaImportTableConfig = {
  columns: [
    "Chapter Wise Importers",
    "No. of Importers",
    "Total Value in Year 2019 ( US$ )",
    "Total Value in Year 2019 ( US$% )",
  ],
  rows: [
    {
      chapter: "Importers of Chapter 01 - Live Animals",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
    {
      chapter: "Importers of Chapter 02 - Meat",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
    {
      chapter: "Importers of Chapter 03 - Fish and Crustceans",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
    {
      chapter: "Importers of Chapter 04 - Dairy Products",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
    {
      chapter: "Importers of Chapter 05 - Animal Origin Products",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
    {
      chapter: "Importers of Chapter 06 - Live Trees and Other Plants",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },

    {
      chapter: "Importers of Chapter 07 - Edible Vegetables and Certain Roots",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
    {
      chapter: "Importers of Chapter 08 - Edible Fruits and Nuts",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
    {
      chapter: "Importers of Chapter 09 - Coffee, Tea, Mate & Spices",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
    {
      chapter: "Importers of Chapter 10 - Cereals",
      importers: "35,000",
      valUsd: "55,000",
      value: "100%",
      ...commonStyles,
    },
  ],
}

const IndiaImportersValue = () => {
  return (
    <div className="flex flex-col items-center py-11">
      <div className="flex w-3/4 flex-col gap-2 p-10">
        <div className="w-full text-center text-3xl font-semibold text-raisin-black">
          {"Import Value of Importers in India"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "Here is a list of chapter-wise importers in India with total value of goods imported by them from June 2019 to May 2020."
          }
        </div>
      </div>
      <div className="flex w-full flex-row-reverse gap-0 px-11 pb-11 md:gap-5">
        <div className="w-full">
          <RecordRenderer
            columns={indiaImportTableConfig.columns}
            rows={indiaImportTableConfig.rows}
            pagination={false}
            classNameHeader="h-12  text-[14px] font-medium bg-dark-gunmetal"
            classNameRow="h-11"
          />
        </div>
      </div>
    </div>
  )
}

export default IndiaImportersValue
