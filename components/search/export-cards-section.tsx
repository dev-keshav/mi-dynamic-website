import { importCardsConfig } from "@/constants"
import Image from "next/image"
import Pagination from "../shared/pagination"
import { useState } from "react"
import ScheduleDemo from "./schedule-demo"
import { useData } from "@/context/store"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const ImportCard = ({
  company,
  location,
  type,
  des,
  quantity,
  href,
}: Readonly<{
  company: string
  location: string
  type: string
  des: string
  quantity: string
  href: string
}>) => {
  

  return (
    <div className="mx-[2px] mb-10 flex flex-col  border-2 border-deep-saffron px-6 py-2">

      <div className="mb-2 cursor-pointer text-2xl font-semibold transition duration-300 ease-in-out hover:text-deep-saffron">
        {company}
      </div>
      <div className="flex items-center gap-5 py-1 text-lg font-medium text-davy-grey">
        <div className="relative flex h-[15px] w-[13px] items-center justify-center">
          <Image
            src="/location-icon.png"
            alt="location"
            layout={"fill"}
            objectFit="cover"
            unoptimized={true}
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="text-deep-saffron">{location}</div>
          <div className="text-sm">|</div>
          <div>{type}</div>
        </div>
      </div>
      <div className="py-1 text-sm font-medium text-pine-tree">{quantity}</div>
      <div className="flex items-center gap-4 py-1 text-sm font-medium text-davy-grey">
        <div className="relative flex h-[15px] w-[20px] items-center justify-center">
          <Image
            src="/cntr-descr.png"
            alt="location"
            layout={"fill"}
            objectFit="cover"
            unoptimized={true}
          />
        </div>
        <div>{des}</div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <a
          href={href}
          className="cursor-pointer text-right text-sm font-semibold italic text-deep-saffron hover:underline"
        >
          View Shipments
        </a>
        <div className="relative flex h-[14px] w-[16px] items-center justify-center">
          <Image
            src="/viewshpmtn.png"
            alt="location"
            layout={"fill"}
            objectFit="cover"
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  )
}
interface ExportCardSectionProps {
    product?: any;
  }

const ExportCardSection:  React.FC<ExportCardSectionProps> = ({ product })  => {
  const [showDemo, setShowDemo] = useState(false)
  const {exporter} = useData();
  const match = product.filter((item:any)=> !item.hasOwnProperty('country'))

  interface ExporterData {
    exporter: string;
    product_desc: string;
    count: string;
    href?: string;
    country: string;
    company_code: string;
  }
  
  interface ImporterStore {
    total_exporters: number;
    importers: ExporterData[];
    // Add other properties of importer store if needed
  }

  const exportersData: ExporterData[] = exporter?.exporters || [];

  function processMatchArray(match: any[]): string {
    return match
      .map((x: any) => 
        Object.values(x).map(value => value).join(', ')
      )
      .join(', '); // Adjust joining logic as needed
  }

  return (
    <>
      {exporter ? (
        <>
        {exportersData.map(
        ({ exporter, product_desc, count, href, country, company_code }, index) => (
          <>
          <ImportCard
            key={`${exporter}_${count}_${company_code}`}
            company={exporter}
            des={product_desc}
            quantity={`${count}` + ' Shipment match' + ` ${processMatchArray(match)}`}
            href={href || ''}
            type='Exporter'
            location={country}
          />
          {(((index + 1 ) % 5 === 0 && index !== 9)&&(
            <div className="mt-14">
            <h3 className="text-m my-6 flex items-center justify-between py-9 pr-[12%] text-center font-semibold shadow-custom-faq-shadow" style={{ background: '#f89a2f' }}>
            <div className="flex flex-col pl-6 text-[#ffff] " style={{fontFamily:'Roboto, sans-serif',fontWeight:'400',fontSize:'26px'}}> Request for All Importers
            <div style={{fontSize:'20px'}}>(with their shipment details)</div>
            </div>
              <button
                className="h-12 rounded-full border-2 border-solid border-[#ffff] bg-[#f89a2f] px-5 text-[16px] font-semibold text-white transition duration-1000 hover:bg-white hover:text-[#f89a2f]" style={{fontWeight:'500', cursor:'pointer'}}
              >
                Request A Demo
              </button>
            </h3>
          </div>
          ))}
          </>
          
        )
      )}
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
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="inherit" />
        </Box>
      )}
      
      <Pagination
        className="mx-0 mt-8"
        total={70}
        page={1}
        limit={10}
        onChange={() => {setShowDemo(true)}}
      />
    </>
  )
}

export default ExportCardSection
