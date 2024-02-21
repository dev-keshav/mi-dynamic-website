import Image from "next/image"
import { cn } from "@/lib/utils"
import CountingNumbers from "@/components/shared/counting-numbers"

const cardConfig = [
  {
    src: "/ship_records.png",
    val: 2,
    symbol: 'M',
    des: "Shipment Records",
    alt: "ship",
  },
  {
    src: "/company_informatins.png",
    val: 3,
    symbol: 'L',
    des: "Importers in India",
    alt: "import",
  },
  {
    src: "/data_transfer.png",
    val: 10,
    symbol: 'L',
    des: "Company Contacts",
    alt: "contacts",
  },
]

const Card = ({
  src,
  alt,
  val,
  symbol,
  des,
}: {
  src: string
  symbol: string
  alt: string
  val: number
  des: string
}) => {
  return (
    <div className="flex w-3/4 flex-col items-center p-3">
      <div>
        <Image src={src} alt={alt} width={50} height={50} unoptimized={true}/>
      </div>
      <div className="mx-[50px] my-[20px]">
        <CountingNumbers
          value={val}
          duration={2500}
          className="font-display text-center text-2xl font-bold text-custom-orange"
          additionalStr={symbol + '+'}
        />
        <div className="text-center text-xl font-bold">{des}</div>
      </div>
    </div>
  )
}

const Qualities = () => {
  return (
    <div className="mx-14 flex flex-wrap  justify-center py-10 sm:flex-wrap sm:justify-center md:flex-wrap md:justify-center lg:flex-nowrap lg:justify-between xl:justify-between">
      {cardConfig.map(({ src, alt, des, val,symbol }) => (
        <Card key={src} src={src} alt={alt} des={des} val={val} symbol={symbol} />
      ))}
    </div>
  )
}

export default Qualities
