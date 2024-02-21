import Image from "next/image"

import RecordRenderer from "../shared/record-renderer"

const partnersTableConfig = {
  columns: ["Country", "Value (%)", "Value (USD million)"],
  rows: [
    {
      country: "India",
      valPercentage: "2",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "China",
      valPercentage: "6",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Indonesia",
      valPercentage: "9",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Australia",
      valPercentage: "2",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "India",
      valPercentage: "2",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "UK",
      valPercentage: "1",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "United States",
      valPercentage: "1",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },

    {
      country: "Japan",
      valPercentage: "1",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "India",
      valPercentage: "1",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "China",
      valPercentage: "6",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Indonesia",
      valPercentage: "9",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Australia",
      valPercentage: "2",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "India",
      valPercentage: "2",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "UK",
      valPercentage: "1",
      valUsd: "1",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "United States",
      valPercentage: "1",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },

    {
      country: "Japan",
      valPercentage: "1",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
  ],
}

const PartnersLiveAnimals = () => {
  return (
    <div
      id="import-partners"
      className="flex flex-col items-center py-5 md:py-11"
    >
      <div className="flex w-3/4 flex-col gap-2 p-0 md:p-10">
        <div className="w-full text-center text-3xl text-raisin-black">
          {"India Import Partners of Live Animals"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "Top India's import partners of Live Animals are China (45%), Japan (12%), Russia (10%) and Italy (5%). These stats are based on period from June 2019 to May 2020."
          }
        </div>
      </div>
      <div className="flex w-full flex-row-reverse gap-5 px-11 pb-0 md:pb-11">
        <div className="w-full md:w-2/5 overflow-y-scroll">
          <RecordRenderer
            columns={partnersTableConfig.columns}
            rows={partnersTableConfig.rows}
            pagination={false}
          />
        </div>
        <div className="invisible relative flex w-[0px] items-center justify-center p-0 md:visible md:w-2/3 md:p-2">
          <Image src="/world.svg" alt="world" height={310} width={800} />
        </div>
      </div>
    </div>
  )
}

export default PartnersLiveAnimals
