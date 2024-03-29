"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  countries,
  countries_with_flag,
  dataTypes,
  searchTypes,
} from "@/constants"
import { useData } from "@/context/store"
import { Autocomplete, Stack } from "@mui/material"
import CircularProgress from "@mui/material/CircularProgress"
import TextField from "@mui/material/TextField"
import { SearchIcon } from "lucide-react"

import axiosInstance from "@/config/axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SelectBox from "@/components/form/select-box"

import SelectBoxDropDown from "../form/select-box-droptdown"

const dataTypeValues = dataTypes.map((type) => ({
  value: type.toLocaleLowerCase(),
  label: type,
}))

// console.log("Hellllo ------> ", dataTypeValues)

const searchTypeValues = searchTypes.map((type) => ({
  value: type.value,
  label: type.value,
  lock: type.disable,
}))

const countryValues = countries_with_flag.map((type) => ({
  value: type.countrie,
  icon: `/4x3/${type.code}.svg`,
  label: type.countrie,
}))

export default function SearchBar() {
  const router = useRouter()
  const params = useSearchParams()
  const [searchtext, setsearchtext] = useState<string | undefined>(undefined)
  const { setExporter, setImporter, setTrade } = useData()
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    try {
      setLoading(true)
      setExporter(null)
      setImporter(null)
      setTrade(null)
      // setImporter( null ); setExporter(null); setTrade(null);
      if (typeof window !== "undefined") {
        const searchBaseInput = document.getElementById(
          "search-base-input"
        ) as HTMLInputElement
        const searchBaseValue = searchBaseInput.value
        // Store the search base content in sessionStorage
        sessionStorage.setItem("searchbase", searchBaseValue)

        if (!sessionStorage.getItem("Country")) {
          sessionStorage.setItem("Country", "")
        }

        let dataType = sessionStorage.getItem("Data Type")
        if (dataType === "import") {
          const country = sessionStorage.getItem("Country")
          const searchtype = sessionStorage.getItem("Search Type")
          if (searchtype === "Importer") {
            router.push(
              `/search/importer?type=${sessionStorage.getItem(
                "Data Type"
              )}&importer=${sessionStorage.getItem(
                "searchbase"
              )}&country=${country}`
            )
          } else if (searchtype === "HS Code") {
            router.push(
              `/search/trade?type=${sessionStorage.getItem(
                "Data Type"
              )}&hs_code=${sessionStorage.getItem(
                "searchbase"
              )}&country=${country}`
            )
          } else if (searchtype === "Product") {
            router.push(
              `/search/trade?type=${sessionStorage.getItem(
                "Data Type"
              )}&product=${sessionStorage.getItem(
                "searchbase"
              )}&country=${country}`
            )
          }
        } else if (dataType === "export") {
          const country = sessionStorage.getItem("Country")
          const searchtype = sessionStorage.getItem("Search Type")
          if (searchtype === "Exporter") {
            router.push(
              `/search/exporter?type=${sessionStorage.getItem(
                "Data Type"
              )}&exporter=${sessionStorage.getItem(
                "searchbase"
              )}&country=${country}`
            )
          } else if (searchtype === "HS Code") {
            router.push(
              `/search/trade?type=${sessionStorage.getItem(
                "Data Type"
              )}&hs_code=${sessionStorage.getItem(
                "searchbase"
              )}&country=${country}`
            )
          } else if (searchtype === "Product") {
            router.push(
              `/search/trade?type=${sessionStorage.getItem(
                "Data Type"
              )}&product=${sessionStorage.getItem(
                "searchbase"
              )}&country=${country}`
            )
          }
        }
        // sessionStorage.setItem('Country', '');
        setLoading(false)
      }
    } catch (error) {
      console.error("Error during search:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    // Add a console log to check if the useEffect is triggered
    console.log("loading state changed:", loading);
  }, [loading]);

  // useEffect(()=>{
  //   let search = sessionStorage.getItem('searchbase')
  // search&&setsearchtext(search)
  // },[])

  // console.log("T-=------------> ", dataTypeValues)

  return (
    <div className="dark:shadow-gray-900 grid min-h-[70px] w-full max-w-[1800px] gap-2  overflow-hidden border shadow-search-bar lg:grid-cols-[17%_17%_17%_29%_1fr] lg:rounded-full xl:grid-cols-[30%_30%_30%_39%px_1fr] xl:pl-8">
      <div className="flex items-center">
        <div className="relative hidden h-6 w-7 pl-2 lg:block">
          <SearchIcon style={{ cursor: "pointer" }} />
        </div>
        {/* <SelectBox
          placeholder="Country"
          className="h-full rounded-none border-0 focus:ring-0 "
          options={countryValues}
          isSearchable
        /> */}
        <div>
          <SelectBoxDropDown
            placeholder="Country"
            // className="h-full rounded-none border-0 focus:ring-0 "
            options={countryValues}
            isSearchable
          />
        </div>
      </div>

      <SelectBox
        placeholder="Data Type"
        className="h-full rounded-none border-0 p-0 pl-2 focus:ring-0"
        options={dataTypeValues}
      />
      <SelectBox
        placeholder="Search Type"
        className="ml-2 h-full rounded-none border-0 p-0 pl-2 focus:ring-0"
        options={searchTypeValues}
      />
      <Input
        id="search-base-input" // Added an id for easy access
        placeholder="Please enter HS Code, Importer or Exporter Name"
        className="ml-4 h-full rounded-none border-0 focus:ring-0 focus-visible:ring-0 active:ring-0"
      />
      <Button
        id="search-btn"
        onClick={handleSearch}
        className="h-full cursor-pointer rounded-none border-0 text-xl font-bold uppercase hover:text-black"
      >
        {loading && <CircularProgress />}
        {!loading && "Search"}
      </Button>
    </div>
  )
}
