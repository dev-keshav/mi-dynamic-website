import TreeMap from "./commodity-tree-map"

const CommoditiesSection = () => {
  return (
    <div className="flex w-full gap-5 bg-dark-charcoal p-10">
      <div className="flex w-full flex-col gap-5 text-chinese-silver sm:w-full md:w-full lg:w-2/5">
        <div className="text-4xl font-medium text-white">
          {"India's Major Import Commodities"}
        </div>
        <div>
          India stand at rank 11 in global import. India Imported goods worth of
          USD 367 Billion from February 2020 to January 2021, monthly averaged
          USD 31 billion, reaching an all-time high in Dec 2020 of 43 USD
          billion and a record low of USD 19 billion in Apr 2020 during the same
          period.
        </div>
        <div>
          {
            "India's top import products are Mineral Fuels & Oils (US$ 101348 Million), Electrical Machinery and Electronics (US$ 43160 Million), Machinery, Mechanical Appliances, etc. (US$ 34982 Million), Pearls and Precious Stones (US$ 30207 Million) and Organic Chemicals (US$ 20101 Million) between February 2020 to January 2021."
          }
        </div>
      </div>
      <div className="hidden w-3/5 sm:hidden md:hidden lg:block">
        <TreeMap />
      </div>
    </div>
  )
}

export default CommoditiesSection
