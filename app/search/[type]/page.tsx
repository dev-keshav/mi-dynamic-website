// 'use client'
import { notFound, useParams, useSearchParams } from "next/navigation"

import { capitalizeString } from "@/lib/utils"
import SearchBar from "@/components/search/search-bar"
import SearchFilters from "@/components/search/search-filters"
import SearchTabs from "@/components/search/search-tabs"
import Breadcrumbs from "@/components/shared/breadcrumbs"
import Crumbs from '@/constants/get_breadcrumbs';
import TitleForDynamicpage from "@/components/shared/title_trade-import-export"


export async function generateStaticParams() {
  return [{ type: 'trade' }, { type: 'importer' }, { type: 'exporter' }]
}



export default function SearchPage({ params } :{params:{type: string}}) {
  
  const type = params.type
  

  return (
    <>
      <section className="grid items-center gap-3 pb-4 pt-4 md:px-8 md:pt-20">
        <TitleForDynamicpage/>
        <div className="mt-8  flex  justify-center gap-4 px-16">
        <SearchBar />
      </div>
        
        <div className="pl-8 overflow-x-hidden">
          {/* <Breadcrumbs items={breadcrumbItems} /> */}
          <Crumbs type = {type} />
        </div>
      </section>
      <div className="mb-14 grid lg:grid-cols-[23%_77%]">
        <div className="px-8" >
          <SearchFilters type= {type}/>
        </div>
        <div className="px-4">
          <SearchTabs params={{ type: type as string }} />
        </div>
      </div>
    </>
  )
}


