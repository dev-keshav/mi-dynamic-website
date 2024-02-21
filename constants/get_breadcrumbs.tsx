'use client'
import { useSearchParams } from "next/navigation"
import { capitalizeString } from "@/lib/utils"
import Breadcrumbs from "@/components/shared/breadcrumbs"

export default function Crumbs( type:any){

    const searchParams  = useSearchParams()
     type = type.type
  
    const paramsData: { [key: string]: string } = {}
    
    // console.log(type.type )
    for (const [key, value] of searchParams.entries()) {
      paramsData[key] = capitalizeString(value)
      
    }
    
    let category: any;
    let url: any;

    if ('hs_code' in paramsData){
       category = paramsData.hs_code;
       url = `/search/${type}?hs_code=${category}&country=${paramsData.country}`
    }

    if ('importer' in paramsData){
      category = paramsData.importer;
      url =`/search/${type}?importer=${category}&country=${paramsData.country}`
   }

   if ('product' in paramsData){
    category = paramsData.product;
    url =`/search/${type}?product=${category}&country=${paramsData.country}`
 }
   
    const breadcrumbItems = [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Search",
        href: "/search/search-data",
      },
      {
        title: `${category} Import Data of ${paramsData.country}`,
        href: `${url}`,
        current: true,
      },
    ]

    return (<Breadcrumbs items={breadcrumbItems} />);
}