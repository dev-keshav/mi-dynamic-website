"use client"

import React, { useEffect, useState } from "react"
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation"
import { countries, countries_with_flag, searchTabConfig } from "@/constants"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import { Grid, Pointer } from "lucide-react"
import tippy from "tippy.js"

import axiosInstance from "@/config/axios"
import { capitalizeString, handelLocation } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SelectBox from "@/components/form/select-box"

import { iconMap } from "../shared/record-renderer"
import MyDialog from "../tab-selection-dialog"
import ImportCardSection from "./import-cards-section"
import ScheduleDemo from "./schedule-demo"
import ShipmentRecordsTable from "./shipment-records-table"
import "tippy.js/dist/tippy.css"
import { useData } from "@/context/store"
import CircularProgress from "@mui/material/CircularProgress"
import Select, { ActionMeta, SingleValue, components } from "react-select"

import { Button } from "../ui/button"
import ExportCardSection from "./export-cards-section"
import SelectBoxDropDown from "../form/select-box-droptdown"

export default function SearchTabs({
  params,
}: Readonly<{
  params: { [key: string]: string }
}>) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const paramsData: { [key: string]: string } = {}
  const [loading, setLoading] = useState(true)

  const [tabItem, setTabItem] = useState<string[]>([])

  const countryValues = countries_with_flag.map((type) => ({
    value: type.countrie,
    icon: `/4x3/${type.code}.svg`,
    label: type.countrie,
  }))

  useEffect(() => {
    tippy("#tooltip", {
      content: "Records shown are based on Jan 2022 - Mar 2023",
    })
  }, [])
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [isScheduleDemoOpen, setScheduleDemoOpen] = useState(false)

  const handleDialogOpen = () => setDialogOpen(true)
  const handleDialogClose = () => setDialogOpen(false)

  const [title1, settitle1] = useState("")
  const [title2, settitle2] = useState("")
  const { setImporter, setExporter, setTrade, importer, trade, exporter } =
    useData()
  const type = params?.type
  useEffect(() => {
    // Update tooltip content based on params.type
    if (params?.type === "importer") {
      interface importDataState {
        total_importers: number
        foreign_suppliers?: number
      }

      const data: importDataState = importer || {
        total_importers: 0,
        importers: [],
      }
      settitle1(
        `Total Importers in ${paramsData.country} - ${data.total_importers}`
      )
      settitle2(``)
      /////Total Foreign Suppliers -
      //  ${'foreign_suppliers' in importer ? importer.foreign_suppliers : 0}`);
    } else if (params?.type === "exporter") {
      interface exportDataState {
        total_exporters: number
        foreign_buyers?: number
      }

      const data: exportDataState = exporter || {
        total_exporters: 0,
        exporters: [],
      }

      settitle1(`Exporters in ${paramsData.country} - ${data.total_exporters}`),
        settitle2(``)
      ////Foreign Buyers -
    } else if (params?.type === "trade") {
      interface DataState {
        total_shipments: number
        total_value_usd: number
      }
      const data: DataState = trade || {
        total_shipments: 0,
        total_value_usd: 0,
        products: [],
      }
      settitle1(`Total Shipments - ${data.total_shipments}`),
        settitle2(`Total Value USD - ${data.total_value_usd}`)
    }
  }, [type, trade])

  for (const [key, value] of searchParams.entries()) {
    paramsData[key] = capitalizeString(value)
  }

  useEffect(() => {
    const fetchData = async () => {
      type RequestBodyType = {
        country?: string
        data_type: string
        importer?: string
        hs_code?: string
        product?: string
        state?: string
        city?: string
      }

      let tradeRequestbody: RequestBodyType = { data_type: "detailed_imports" }

      if (typeof window !== "undefined") {
        // Assign to tradeRequestbody based on the condition
        if (sessionStorage.getItem("Data Type") === "export") {
          tradeRequestbody = {
            data_type: "detailed_exports",
            // other properties can be added here
          }
        } else {
          tradeRequestbody = {
            data_type: "detailed_imports",
            // other properties can be added here
          }
        }
      }

      const importerRequestbody: RequestBodyType = {
        data_type: "detailed_imports",
      }

      const exporterRequestbody: RequestBodyType = {
        data_type: "detailed_exports",
      }


      const country = paramsData.country
      if (country) tradeRequestbody.country = country
      let tempTabItems: string[] = []

      if ("hs_code" in paramsData) {
        const hscode: any = { hscode: paramsData.hs_code }
        tradeRequestbody.hs_code = paramsData.hs_code
        importerRequestbody.hs_code = paramsData.hs_code
        exporterRequestbody.hs_code = paramsData.hs_code
        tempTabItems = [hscode, ...tempTabItems]
      }

      // Check if paramsData contains the key 'importer'
      if ("importer" in paramsData) {
        const textinput = paramsData.importer
        const isNumber = /^\d+$/.test(textinput)
        if (!isNumber) {
          const importer: any = { product: paramsData.importer }
          tradeRequestbody.product = paramsData.importer
          importerRequestbody.product = paramsData.importer
          exporterRequestbody.product = paramsData.importer
          tempTabItems = [importer, ...tempTabItems]
        } else {
          const importer: any = { hscode: paramsData.importer }
          tradeRequestbody.hs_code = paramsData.importer
          importerRequestbody.hs_code = paramsData.importer
          exporterRequestbody.hs_code = paramsData.importer
          tempTabItems = [importer, ...tempTabItems]
        }
      }

      if ("exporter" in paramsData) {
        const textinput = paramsData.exporter
        const isNumber = /^\d+$/.test(textinput)
        if (!isNumber) {
          const exporter: any = { product: paramsData.exporter }
          tradeRequestbody.product = paramsData.exporter
          importerRequestbody.product = paramsData.exporter
          exporterRequestbody.product = paramsData.exporter
          tempTabItems = [exporter, ...tempTabItems]
        } else {
          const exporter: any = { hscode: paramsData.exporter }
          tradeRequestbody.hs_code = paramsData.exporter
          importerRequestbody.hs_code = paramsData.exporter
          exporterRequestbody.hs_code = paramsData.exporter
          tempTabItems = [exporter, ...tempTabItems]
        }
      }

      if ("product" in paramsData) {
        const product: any = { product: paramsData.product }
        tradeRequestbody.product = paramsData.product
        importerRequestbody.product = paramsData.product
        exporterRequestbody.product = paramsData.product
        tempTabItems = [product, ...tempTabItems]
      }
      if ("country" in paramsData) {
        const con: any = { country: paramsData.country }
        tempTabItems = [con, ...tempTabItems]
        tradeRequestbody.country = paramsData.country
        importerRequestbody.country = paramsData.country
        exporterRequestbody.country = paramsData.country
      }
      if ("state" in paramsData) {
        const state: any = { state: paramsData.state }
        tempTabItems = [state, ...tempTabItems]
        importerRequestbody.state = paramsData.state
        exporterRequestbody.state = paramsData.state
      }
      if ("city" in paramsData) {
        const city: any = { city: paramsData.city }
        tempTabItems = [city, ...tempTabItems]
        importerRequestbody.city = paramsData.city
        exporterRequestbody.city = paramsData.city
      }

      if ("hs_code_filter" in paramsData) {
        const hs_code_filter: any = {
          hs_code_filter: paramsData.hs_code_filter,
        }
        tempTabItems = [hs_code_filter, ...tempTabItems]
        importerRequestbody.hs_code = paramsData.hs_code_filter
        exporterRequestbody.hs_code = paramsData.hs_code_filter
      }
      setTabItem(tempTabItems)

      try {
        const response = await axiosInstance.post(
          "/search-data-importers",
          importerRequestbody,
          {
            withCredentials: true,
          }
        )
        setImporter(response.data)
      } catch (error) {
        console.error(error)
        setImporter(error)
      }

      try {
        const response = await axiosInstance.post(
          "/search-data-exporters",
          exporterRequestbody,
          {
            withCredentials: true,
          }
        )

        // console.log(exporterRequestbody)
        setExporter(response.data)
      } catch (error) {
        console.error(error)
        setExporter(error)
      }

      try {
        const response = await axiosInstance.post(
          "/search-data-product",
          tradeRequestbody,
          {
            withCredentials: true,
          }
        )

        setTrade(response.data)
      } catch (error) {
        console.error(error)
        setTrade(error)
      }
      setLoading(false)
    }

    fetchData()
  }, [searchParams])

  const handletabclick =
    (x: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      if (typeof window !== "undefined") {
        let currentUrl = window.location.href

        // Remove the base URL
        let modifiedUrl = currentUrl.replace("http://localhost:3000", "")

        // Assuming x is a query parameter key you want to remove
        // This regex looks for the pattern `x=something` or `&x=something` and removes it
        const regex = new RegExp(`[?&]${x}=[^&]*`, "g")
        modifiedUrl = modifiedUrl.replace(regex, "")

        
        // Clean up any leftover '?' or '&' and replace multiple '&' with a single '&'
        modifiedUrl = modifiedUrl
        .replace(/^&/, "")
        .replace(/&&+/g, "&")
        .replace(/&$/, "")
        
        
        // Re-add the '?' at the beginning if there are remaining query parameters
        if (modifiedUrl.includes("=")) {
          modifiedUrl = "" + modifiedUrl
        }

        console.log(modifiedUrl) // Log the modified URL
        router.push(modifiedUrl)
        // Perform navigation if needed
        // window.location.href = modifiedUrl; // Uncomment this line to actually change the URL
      }
    }
  ///////////////////////////////////////////////////////////////
  const customStyles = {
    singleValue: (provided: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      width: '10vw',
    }),
  }
  interface CountryOption {
    value: string
    label: string
    icon: string
  }

  const [selectedOption, setSelectedOption] = useState<CountryOption | null>(
    null
  )

  const customSingleValue = (props: any) => (
    <components.SingleValue {...props}>
      {/* <img src={props.data.icon} alt="" style={{ width: '25px', marginRight: '10px' }} /> */}
      {props.children}
    </components.SingleValue>
  )

  const formatOptionLabel = (option: CountryOption) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={option.icon}
        style={{ width: "25px", marginRight: "10px" }}
        alt={option.label}
      />
      <span>{option.label}</span>
    </div>
  )

  const handleChange = (
    option: SingleValue<CountryOption>,
    actionMeta: ActionMeta<CountryOption>
  ) => {
    setSelectedOption(option)
    const current = new URLSearchParams(Array.from(searchParams.entries())) // -> has to use this form
    // update as necessary
    if (option?.value) {
      current.set("country", option.value)
    } else {
      current.delete("country")
    }

    // cast to string
    const search = current.toString()
    // or const query = `${'?'.repeat(search.length && 1)}${search}`;
    const query = search ? `?${search}` : ""

    router.push(`${pathname}${query}`)
    console.log(query)
    // setSearchParams(newSearchParams.toString(), { replace: true });
  }

  return (
    <Tabs defaultValue={params?.type} className="w-full p-0  ">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {tabItem.map((x, index) => (
            <div
              key={index}
              style={{
                display: "-webkit-inline-box",
                marginRight: "10px",
              }}
            >
              {Object.entries(x).map(([key, value]) => (
                <>
                  <Chip
                    key={key}
                    label={` ${value}`}
                    onDelete={handletabclick(key)}
                  />
                </>
              ))}
            </div>
          ))}
        </div>
        <span className={`flag-icon flag-icon-${"IN".toLowerCase()}`}></span>
        <div>
          <span
            className="spreUsdVle mr-3"
            id="tooltip"
            style={{ fontSize: "14px", fontWeight: 400 }}
          >
            {title1.split(" - ")[0]} {" - "}
            {loading ? (
              <CircularProgress size="1rem" color="inherit" />
            ) : (
              <>
                <strong className="font-bold" style={{ fontSize: "14px" }}>
                  {title1 ? title1.split(" - ")[1] : ""}
                </strong>
              </>
            )}
          </span>
          <span
            className="spreUsdVle mr-3"
            id="tooltip"
            style={{ fontSize: "14px", fontWeight: 400 }}
          >
            {title2.split(" - ")[0]} {" -"}
            {loading ? (
              <CircularProgress size="1rem" color="inherit" />
            ) : (
              <>
                <strong className="font-bold" style={{ fontSize: "14px" }}>
                  {title2 ? title2.split(" - ")[1] : ""}
                </strong>
              </>
            )}
          </span>
        </div>
        <div style={{ display: "-webkit-inline-box" }}>
          <div
            className="mr-4"
            style={{ display: "-webkit-inline-box", fontSize: "14px" }}
          >
            Edit Column
            <MyDialog />
          </div>
          <Select<CountryOption>
            options={countryValues}
            value={selectedOption}
            onChange={handleChange}
            getOptionLabel={(option: CountryOption) => option.label}
            formatOptionLabel={formatOptionLabel}
            components={{ SingleValue: customSingleValue }}
            styles={customStyles}
            className="nowrap mb-2 ml-2"
            placeholder="Reporting Country"
          />

          {/* <div>
            <SelectBoxDropDown placeholder="Country"
            // className="h-full rounded-none border-0 focus:ring-0 "
            options={countryValues}
            isSearchable
          />
          </div> */}
        </div>
      </div>
      <TabsList className="h-auto w-full rounded-none border-none bg-transparent p-0">
        {searchTabConfig.map(({ label, value, icon }) => (
          <TabsTrigger
            key={`${label}_${value}`}
            value={value}
            className="border-b-solid mx-[3px] mb-3 h-[42px] w-1/4  rounded-none border-[1px] border-solid bg-white py-0 text-base font-bold text-dark-liver data-[state=active]:border-0 data-[state=active]:bg-dark-liver data-[state=active]:text-white"
            onClick={() => {
              debugger
              router.replace(handelLocation(value, pathname, searchParams), {
                scroll: false,
              })
            }}
          >
            <div className="flex items-center justify-center gap-2">
              {icon && iconMap[icon as keyof typeof iconMap]}
              {label}
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="importer">
        <ImportCardSection product={tabItem} />
      </TabsContent>
      <TabsContent value="exporter">
        <ExportCardSection product={tabItem} />
      </TabsContent>
      <TabsContent value="trade">
        <ShipmentRecordsTable showBtn />
      </TabsContent>
      <TabsContent value="visualize">
        <ScheduleDemo
          handleKeyPress={(e) => {
            if (e.key === "Escape") {
              router.replace(
                handelLocation("importer", pathname, searchParams),
                {
                  scroll: false,
                }
              )
            }
          }}
          handleBackdropClick={() => {
            router.replace(handelLocation("importer", pathname, searchParams), {
              scroll: false,
            })
          }}
          onMount={() => {
            router.replace(
              handelLocation("visualize", pathname, searchParams),
              {
                scroll: false,
              }
            )
          }}
        />
      </TabsContent>
      {/* <div onClick={() => setScheduleDemoOpen(true)} className="mt-14">
        <h3 className="mx-4 py-9 mt-6 flex items-center justify-around text-center text-m font-semibold text-black shadow-custom-faq-shadow md:text-xl" style={{ cursor: 'Pointer' }}>
          Stay ahead of the competition with Market Inside{' '}
          <button
            className="h-[43px] rounded-full bg-arsenic px-5 text-lg font-semibold text-white"
          >
            Schedule A Demo
          </button>
        </h3>
      </div> */}
      {isScheduleDemoOpen && (
        <ScheduleDemo
          handleKeyPress={(e) => {
            if (e.key === "Escape") {
              setScheduleDemoOpen(false)
            }
          }}
          handleBackdropClick={() => {
            setScheduleDemoOpen(false)
          }}
        />
      )}
    </Tabs>
  )
}
