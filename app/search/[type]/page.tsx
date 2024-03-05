import { capitalizeString } from "@/lib/utils";
import SearchBar from "@/components/search/search-bar";
import SearchFilters from "@/components/search/search-filters";
import SearchTabs from "@/components/search/search-tabs";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import Crumbs from '@/constants/get_breadcrumbs';
import TitleForDynamicpage from "@/components/shared/title_trade-import-export";
import Head from "next/head";
import type { ResolvingMetadata } from 'next';

type Props = {
  params: { type: string };
  searchParams: { type: string; hs_code?: string; country?: string; product?: string };
};

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  
  let title = "";
  let description = "";

  const capitalizedType = capitalizeString(params.type);
  const hasCountry = "country" in searchParams;
  const hasHSCode = "hs_code" in searchParams;
  const hasProduct = "product" in searchParams;

  if(searchParams.type === "import"){
    if(hasCountry && hasProduct){
      title = `${searchParams.country} ${searchParams.product} ${searchParams.type} Data | ${searchParams.product} Importers in ${searchParams.country}`
      description = `Find ${searchParams.country} ${searchParams.product} ${searchParams.type} data and statistics with ${searchParams.product} importers in ${searchParams.country}. Our ${searchParams.country} ${searchParams.type} data of ${searchParams.product} contains value, quantity, unit and more trade customs details.`
    }
    else if(hasCountry && hasHSCode){
      title = `${searchParams.country} ${searchParams.type} Data of HS Code ${searchParams.hs_code} | ${searchParams.country} Trade Statistics`
      description = `Search ${searchParams.country} ${searchParams.type} data of HS Code ${searchParams.hs_code} covers import value, unit, quantity, ${searchParams.country} importers, trading partners and more HS Code ${searchParams.hs_code} import shipment details`
    }

    else if(hasCountry && searchParams.country === "global" && hasProduct){
      title = `Global Import Data of ${searchParams.product} | ${searchParams.product} Importers Globally`
      description = `Find global import data of ${searchParams.product} imports data and statistics with ${searchParams.product} importers globally. Our global import data of ${searchParams.product} contains value, quantity, unit and more trade customs details.`
    }
    else if(hasCountry && searchParams.country === "global" && hasHSCode){
      title = `International Import Data of HS Code ${searchParams.hs_code} | Global Trade Data`
      description = `Search international import data of HS Code ${searchParams.hs_code} covers import value, unit, quantity, global importers, trading partners and more HS Code ${searchParams.hs_code} import shipment details`
    }
  }
  else if(searchParams.type === "export"){
    if(hasCountry && hasProduct){
      title = `${searchParams.country} ${searchParams.product} ${searchParams.country} Data | ${searchParams.country} ${searchParams.type} Statistics`
      description = `Get ${searchParams.country} ${searchParams.product} ${searchParams.country} data covers quantity, unit, price, value, name of exporters in ${searchParams.country} and more shipment details. Tarket your potential market through ${searchParams.country} ${searchParams.country} statistics of ${searchParams.product}.`
    }
    else if(hasCountry && hasHSCode){
      title = `${searchParams.country} Customs Data of HS Code ${searchParams.hs_code} Exports | ${searchParams.country} ${searchParams.type}`
      description = `Access ${searchParams.country} customs data of HS Code ${searchParams.hs_code} exports based on shipping bills, invoices and other document sources. Our ${searchParams.country} customs statistics of HS Code ${searchParams.hs_code} covers exporter name and more details.`
    }
    else if(hasCountry && searchParams.country === "global" && hasProduct){
      title = `Global Export Data of ${searchParams.product} | ${searchParams.product} Exporters Globally`
      description = `Find global export data of ${searchParams.product} exports data and statistics with ${searchParams.product} exporters globally. Our global export data of ${searchParams.product} contains value, quantity, unit and more trade customs details.`
    }
  }

  
  // if(params.type === "import"){
    
  // }
  // title = `${params.type}`


  // Generate dynamic metadata based on the provided data
  const metadata: Metadata = {
    title: title,
  };

  return metadata;

}

export default function SearchPage({ params, searchParams }: Props) {
  // Call the generateMetadata function directly without the 'await' keyword
  const metadata = generateMetadata({ params, searchParams });

  return (
    <>
      <Head>
        {/* Use next/head component to include metadata */}
        <title>{metadata.title}</title>
        {/* Include other metadata tags as needed */}
      </Head>
      <section className="grid items-center gap-3 py-4 md:px-8 md:pt-20">
        <TitleForDynamicpage />
        <div className="mt-8 flex justify-center gap-4 px-16">
          <SearchBar />
        </div>

        <div className="overflow-x-hidden pl-8">
          <Crumbs type={params.type} country={searchParams.country} />
        </div>
      </section>
      <div className="mb-14 grid lg:grid-cols-[23%_77%]">
        <div className="px-8">
          <SearchFilters type={params.type} />
        </div>
        <div className="px-4">
          <SearchTabs params={{ type: params.type }} />
        </div>
      </div>
    </>
  );
}
