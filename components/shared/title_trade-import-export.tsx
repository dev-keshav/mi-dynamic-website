'use client'
import React, { useEffect, useMemo, useState } from "react";
import { useData } from "@/context/store";
import { usePathname, useSearchParams } from "next/navigation";
import { capitalizeString } from "@/lib/utils";
// Assuming these types are defined elsewhere in your project.


interface IParamsData {
  [key: string]: string;
}



const TitleForDynamicPage: React.FC = () => {
  const { origin_country, hscode_filter } = useData();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramsData: IParamsData = useMemo(() => {
    const data: IParamsData = {};
    for (const [key, value] of searchParams.entries()) {
      data[key] = capitalizeString(value);
    }
    return data;
  }, [searchParams]);

  const { title, subtitle } = useMemo(() => {
    let title = 'Search Global Importers, Exporters, Shipments Data';
    let subtitle = 'Search Importers, Exporters and Shipment Data by Product, HS Code or Combination of both.';

 
/////////////////trade
if( pathname.includes('trade')){
//////////// trade + import
  if(paramsData.type === 'Import'){

    /////// global + product
  if('product' in paramsData){
    title =`Global Import Data of ${paramsData.product} | ${paramsData.product} Importers Globally`
    subtitle =`Find global import data of ${paramsData.product} imports data and statistics with ${paramsData.product} importers globally. Our global import data of ${paramsData.product} contains value, quantity, unit and more trade customs details.`
  }
  /////global + product + origin country
if('product' in paramsData && origin_country){
  title =`Global Import Statistics of ${paramsData.product} Imports from ${origin_country}`
  subtitle =`Get global import statistics of ${paramsData.product} imports from ${origin_country}. Find ${paramsData.product} customs statistics of global imports from ${origin_country} based on import bills, shipping bills and invoices.`
}
/// global + hscode
if('hs_code' in paramsData){
title =`International Import Data of HS Code ${paramsData.hs_code} | Global Trade Data`
subtitle =`Search international import data of HS Code ${paramsData.hs_code} covers import value, unit, quantity, global importers, trading partners and more HS Code ${paramsData.hs_code} import shipment details`
}

// global + product + hscode filter
if('product' in paramsData && hscode_filter){
title =`Global Trade Data of ${paramsData.product} under HS Code ${hscode_filter} Imports`
subtitle =`Lookup global trade data of ${paramsData.product} under HS code ${hscode_filter} imports. Target your potential market through global customs data of ${paramsData.product} under HS code ${hscode_filter} imports.`
}

////global + product + hscode filter + origin country filter
if('product' in paramsData && hscode_filter && origin_country){
title =`${paramsData.product} under HS code ${hscode_filter} Statistics of Global Imports from ${origin_country}`
subtitle =`Get latest ${paramsData.product} under HS code ${hscode_filter} statistics of global imports from ${origin_country} bases on shipment details compiled by global customs.`
}

/// global + hscode + origin country filter
if('hs_code' in paramsData && origin_country){
title =`Global Customs Statistics of HS code ${paramsData.hs_code} Imports by Globa Country from ${origin_country}`
  subtitle =`Search global customs statistics of HS code ${paramsData.hs_code} imports by global countries from ${origin_country} through all mode of transports covers land, air and sea ports.`
} 


// product + country
if('product' in paramsData  && 'country' in paramsData ){
  title =`${paramsData.country} ${paramsData.product} Import Data | ${paramsData.product} Importers in ${paramsData.country}`
  subtitle =`Find ${paramsData.country} ${paramsData.product} import data and statistics with ${paramsData.product} importers in ${paramsData.country}. Our ${paramsData.country} import data of ${paramsData.product} contains value, quantity, unit and more trade customs details.`

}
////// product + country + origin country
if('product' in paramsData && 'country' in paramsData && origin_country){
  title =`${paramsData.country} Import Statistics of ${paramsData.product} Imports from ${origin_country}`
  subtitle =`Get ${paramsData.country} import statistics of ${paramsData.product} imports from ${origin_country}. Find ${paramsData.product} customs statistics of ${paramsData.country} imports from ${origin_country} based on import bills, shipping bills and invoices.`
}

//// country + hs_code
if('country' in paramsData && 'hs_code' in paramsData){
  title =`${paramsData.country} Import Data of HS Code ${paramsData.hs_code} | ${paramsData.country} Trade Statistics`
  subtitle =`Search ${paramsData.country} import data of HS Code ${paramsData.hs_code} covers import value, unit, quantity, ${paramsData.country} importers, trading partners and more HS Code ${paramsData.hs_code} import shipment details`
}
///// country + product + hs_code filter
if('country' in paramsData && 'product' in paramsData && hscode_filter){
  title =`${paramsData.country} Trade Data of ${paramsData.product} under HS Code ${hscode_filter} Imports`
  subtitle =`Lookup ${paramsData.country} trade data of ${paramsData.product} under HS code ${hscode_filter} imports. Target your potential market through ${paramsData.country} customs data of ${paramsData.product} under HS code ${hscode_filter} imports.`
}
/// country + product + hscode filter + origin country filter
if('country' in paramsData && 'product' in paramsData && hscode_filter && origin_country){
title =`${paramsData.product} under HS code ${hscode_filter} Statistics of ${paramsData.country} Imports from ${origin_country}`
subtitle =`Get latest ${paramsData.product} under HS code ${hscode_filter} statistics of ${paramsData.country} imports from ${origin_country} bases on shipment details compiled by ${paramsData.country} customs.`
}
/// country + hscode + origin country
if('country' in paramsData && 'hs_code' in paramsData && origin_country){
title =`${paramsData.country} Customs Statistics of HS code ${paramsData.hs_code} Imports by ${paramsData.country} from ${origin_country}`
  subtitle =`Search ${paramsData.country} customs statistics of HS code ${paramsData.hs_code} imports by ${paramsData.country} from ${origin_country} through all mode of transports covers land, air and sea ports.`
}

if('importer' in paramsData || 'exporter' in paramsData){
  const regex = /^-?\d+(\.\d+)?$/;
  const res = regex.test(paramsData.importer || paramsData.exporter);
  /////trade +import + product
    if(!res){
     /////// global + product
      if('importer' in paramsData || 'exporter' in paramsData){
        title =`Global Import Data of ${paramsData.importer || paramsData.exporter} | ${paramsData.importer || paramsData.exporter} Importers Globally`
        subtitle =`Find global import data of ${paramsData.importer || paramsData.exporter} imports data and statistics with ${paramsData.importer || paramsData.exporter} importers globally. Our global import data of ${paramsData.importer || paramsData.exporter} contains value, quantity, unit and more trade customs details.`
      }
 // global + product + hscode filter
      if(('importer' in paramsData || 'exporter' in paramsData) && hscode_filter){
        title =`Global Trade Data of ${paramsData.importer || paramsData.exporter} under HS Code ${hscode_filter} Imports`
        subtitle =`Lookup global trade data of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} imports. Target your potential market through global customs data of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} imports.`
        }
      /////global + product + origin country
    if(('importer' in paramsData || 'exporter' in paramsData) && origin_country){
      title =`Global Import Statistics of ${paramsData.importer || paramsData.exporter} Imports from ${origin_country}`
      subtitle =`Get global import statistics of ${paramsData.importer || paramsData.exporter} imports from ${origin_country}. Find ${paramsData.importer || paramsData.exporter} customs statistics of global imports from ${origin_country} based on import bills, shipping bills and invoices.`
    }
  ////global + product + hscode filter + origin country filter
  if(('importer' in paramsData || 'exporter' in paramsData) && hscode_filter && origin_country){
  title =`${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} Statistics of Global Imports from ${origin_country}`
  subtitle =`Get latest ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} statistics of global imports from ${origin_country} bases on shipment details compiled by global customs.`
  }

      // product + country
if(('importer' in paramsData || 'exporter' in paramsData)  && 'country' in paramsData ){
  title =`${paramsData.country} ${paramsData.importer || paramsData.exporter} Import Data | ${paramsData.importer || paramsData.exporter} Importers in ${paramsData.country}`
  subtitle =`Find ${paramsData.country} ${paramsData.importer || paramsData.exporter} import data and statistics with ${paramsData.importer || paramsData.exporter} importers in ${paramsData.country}. Our ${paramsData.country} import data of ${paramsData.importer || paramsData.exporter} contains value, quantity, unit and more trade customs details.`

}
////// product + country + origin country
if(('importer' in paramsData || 'exporter' in paramsData) && 'country' in paramsData && origin_country){
  title =`${paramsData.country} Import Statistics of ${paramsData.importer || paramsData.exporter} Imports from ${origin_country}`
  subtitle =`Get ${paramsData.country} import statistics of ${paramsData.importer || paramsData.exporter} imports from ${origin_country}. Find ${paramsData.importer || paramsData.exporter} customs statistics of ${paramsData.country} imports from ${origin_country} based on import bills, shipping bills and invoices.`
}
///// country + product + hs_code filter
if('country' in paramsData && ('importer' in paramsData || 'exporter' in paramsData) && hscode_filter){
  title =`${paramsData.country} Trade Data of ${paramsData.importer || paramsData.exporter} under HS Code ${hscode_filter} Imports`
  subtitle =`Lookup ${paramsData.country} trade data of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} imports. Target your potential market through ${paramsData.country} customs data of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} imports.`
}

/// country + product + hscode filter + origin country filter
if('country' in paramsData && ('importer' in paramsData || 'exporter' in paramsData) && hscode_filter && origin_country){
  title =`${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} Statistics of ${paramsData.country} Imports from ${origin_country}`
  subtitle =`Get latest ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} statistics of ${paramsData.country} imports from ${origin_country} bases on shipment details compiled by ${paramsData.country} customs.`
  }


    }
    else{
      /// global + hscode
if('importer' in paramsData || 'exporter' in paramsData){
  title =`International Import Data of HS Code ${paramsData.importer || paramsData.exporter} | Global Trade Data`
  subtitle =`Search international import data of HS Code ${paramsData.importer || paramsData.exporter} covers import value, unit, quantity, global importers, trading partners and more HS Code ${paramsData.importer || paramsData.exporter} import shipment details`
  }
  /// global + hscode + origin country filter
  if(('importer' in paramsData || 'exporter' in paramsData) && origin_country){
  title =`Global Customs Statistics of HS code ${paramsData.importer || paramsData.exporter} Imports by Globa Country from ${origin_country}`
    subtitle =`Search global customs statistics of HS code ${paramsData.importer || paramsData.exporter} imports by global countries from ${origin_country} through all mode of transports covers land, air and sea ports.`
  } 
  //// country + hs_code
  if('country' in paramsData && ('importer' in paramsData || 'exporter' in paramsData)){
    title =`${paramsData.country} Import Data of HS Code ${paramsData.importer || paramsData.exporter} | ${paramsData.country} Trade Statistics`
    subtitle =`Search ${paramsData.country} import data of HS Code ${paramsData.importer || paramsData.exporter} covers import value, unit, quantity, ${paramsData.country} importers, trading partners and more HS Code ${paramsData.importer || paramsData.exporter} import shipment details`
  }
  /// country + hscode + origin country
  if('country' in paramsData && ('importer' in paramsData || 'exporter' in paramsData) && origin_country){
  title =`${paramsData.country} Customs Statistics of HS code ${paramsData.importer || paramsData.exporter} Imports by ${paramsData.country} from ${origin_country}`
    subtitle =`Search ${paramsData.country} customs statistics of HS code ${paramsData.importer || paramsData.exporter} imports by ${paramsData.country} from ${origin_country} through all mode of transports covers land, air and sea ports.`
  }
    }
}
}


  ////// trade + export//////////////////////////////////////////////////////////////////////////////////////////////////
  if(paramsData.type === 'Export'){

    /////// global + product
  if('product' in paramsData){
    title =`Global Export Data of ${paramsData.product} | ${paramsData.product} Importers Globally`
    subtitle =`Find global export data of ${paramsData.product} imports data and statistics with ${paramsData.product} importers globally. Our global export data of ${paramsData.product} contains value, quantity, unit and more trade customs details.`
  }
  /////global + product + origin country
  if('product' in paramsData && origin_country){
  title =`Global Export Statistics of ${paramsData.product} Imports from ${origin_country}`
  subtitle =`Get global export statistics of ${paramsData.product} imports from ${origin_country}. Find ${paramsData.product} customs statistics of global imports from ${origin_country} based on export bills, shipping bills and invoices.`
  }
  /// global + hscode
  if('hs_code' in paramsData){
  title =`International Export Data of HS Code ${paramsData.hs_code} | Global Trade Data`
  subtitle =`Search international export data of HS Code ${paramsData.hs_code} covers export value, unit, quantity, global importers, trading partners and more HS Code ${paramsData.hs_code} export shipment details`
  }
  
  // global + product + hscode filter
  if('product' in paramsData && hscode_filter){
  title =`Global Trade Data of ${paramsData.product} under HS Code ${hscode_filter} Imports`
  subtitle =`Lookup global trade data of ${paramsData.product} under HS code ${hscode_filter} imports. Target your potential market through global customs data of ${paramsData.product} under HS code ${hscode_filter} imports.`
  }
  
  ////global + product + hscode filter + origin country filter
  if('product' in paramsData && hscode_filter && origin_country){
  title =`${paramsData.product} under HS code ${hscode_filter} Statistics of Global Imports from ${origin_country}`
  subtitle =`Get latest ${paramsData.product} under HS code ${hscode_filter} statistics of global imports from ${origin_country} bases on shipment details compiled by global customs.`
  }
  
  /// global + hscode + origin country filter
  if('hs_code' in paramsData && origin_country){
  title =`Global Customs Statistics of HS code ${paramsData.hs_code} Imports by Globa Country from ${origin_country}`
  subtitle =`Search global customs statistics of HS code ${paramsData.hs_code} imports by global countries from ${origin_country} through all mode of transports covers land, air and sea ports.`
  } 
  
  
  // product + country
  if('product' in paramsData  && 'country' in paramsData ){
  title =`${paramsData.country} ${paramsData.product} Export Data | ${paramsData.product} Importers in ${paramsData.country}`
  subtitle =`Find ${paramsData.country} ${paramsData.product} export data and statistics with ${paramsData.product} importers in ${paramsData.country}. Our ${paramsData.country} export data of ${paramsData.product} contains value, quantity, unit and more trade customs details.`
  
  }
  ////// product + country + origin country
  if('product' in paramsData && 'country' in paramsData && origin_country){
  title =`${paramsData.country} Export Statistics of ${paramsData.product} Imports from ${origin_country}`
  subtitle =`Get ${paramsData.country} export statistics of ${paramsData.product} imports from ${origin_country}. Find ${paramsData.product} customs statistics of ${paramsData.country} imports from ${origin_country} based on export bills, shipping bills and invoices.`
  }
  
  //// country + hs_code
  if('country' in paramsData && 'hs_code' in paramsData){
  title =`${paramsData.country} Export Data of HS Code ${paramsData.hs_code} | ${paramsData.country} Trade Statistics`
  subtitle =`Search ${paramsData.country} export data of HS Code ${paramsData.hs_code} covers export value, unit, quantity, ${paramsData.country} importers, trading partners and more HS Code ${paramsData.hs_code} export shipment details`
  }
  ///// country + product + hs_code filter
  if('country' in paramsData && 'product' in paramsData && hscode_filter){
  title =`${paramsData.country} Trade Data of ${paramsData.product} under HS Code ${hscode_filter} Imports`
  subtitle =`Lookup ${paramsData.country} trade data of ${paramsData.product} under HS code ${hscode_filter} imports. Target your potential market through ${paramsData.country} customs data of ${paramsData.product} under HS code ${hscode_filter} imports.`
  }
  /// country + product + hscode filter + origin country filter
  if('country' in paramsData && 'product' in paramsData && hscode_filter && origin_country){
  title =`${paramsData.product} under HS code ${hscode_filter} Statistics of ${paramsData.country} Imports from ${origin_country}`
  subtitle =`Get latest ${paramsData.product} under HS code ${hscode_filter} statistics of ${paramsData.country} imports from ${origin_country} bases on shipment details compiled by ${paramsData.country} customs.`
  }
  /// country + hscode + origin country
  if('country' in paramsData && 'hs_code' in paramsData && origin_country){
  title =`${paramsData.country} Customs Statistics of HS code ${paramsData.hs_code} Imports by ${paramsData.country} from ${origin_country}`
  subtitle =`Search ${paramsData.country} customs statistics of HS code ${paramsData.hs_code} imports by ${paramsData.country} from ${origin_country} through all mode of transports covers land, air and sea ports.`
  }
  
  if('importer' in paramsData || 'exporter' in paramsData){
  const regex = /^-?\d+(\.\d+)?$/;
  const res = regex.test(paramsData.importer || paramsData.exporter);
  /////trade +export + product
    if(!res){
     /////// global + product
      if('importer' in paramsData || 'exporter' in paramsData){
        title =`Global Export Data of ${paramsData.importer || paramsData.exporter} | ${paramsData.importer || paramsData.exporter} Importers Globally`
        subtitle =`Find global export data of ${paramsData.importer || paramsData.exporter} imports data and statistics with ${paramsData.importer || paramsData.exporter} importers globally. Our global export data of ${paramsData.importer || paramsData.exporter} contains value, quantity, unit and more trade customs details.`
      }
  // global + product + hscode filter
      if(('importer' in paramsData || 'exporter' in paramsData) && hscode_filter){
        title =`Global Trade Data of ${paramsData.importer || paramsData.exporter} under HS Code ${hscode_filter} Imports`
        subtitle =`Lookup global trade data of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} imports. Target your potential market through global customs data of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} imports.`
        }
      /////global + product + origin country
    if(('importer' in paramsData || 'exporter' in paramsData) && origin_country){
      title =`Global Export Statistics of ${paramsData.importer || paramsData.exporter} Imports from ${origin_country}`
      subtitle =`Get global export statistics of ${paramsData.importer || paramsData.exporter} imports from ${origin_country}. Find ${paramsData.importer || paramsData.exporter} customs statistics of global imports from ${origin_country} based on export bills, shipping bills and invoices.`
    }
  ////global + product + hscode filter + origin country filter
  if(('importer' in paramsData || 'exporter' in paramsData) && hscode_filter && origin_country){
  title =`${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} Statistics of Global Imports from ${origin_country}`
  subtitle =`Get latest ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} statistics of global imports from ${origin_country} bases on shipment details compiled by global customs.`
  }
  
      // product + country
  if(('importer' in paramsData || 'exporter' in paramsData)  && 'country' in paramsData ){
  title =`${paramsData.country} ${paramsData.importer || paramsData.exporter} Export Data | ${paramsData.importer || paramsData.exporter} Importers in ${paramsData.country}`
  subtitle =`Find ${paramsData.country} ${paramsData.importer || paramsData.exporter} export data and statistics with ${paramsData.importer || paramsData.exporter} importers in ${paramsData.country}. Our ${paramsData.country} export data of ${paramsData.importer || paramsData.exporter} contains value, quantity, unit and more trade customs details.`
  
  }
  ////// product + country + origin country
  if(('importer' in paramsData || 'exporter' in paramsData) && 'country' in paramsData && origin_country){
  title =`${paramsData.country} Export Statistics of ${paramsData.importer || paramsData.exporter} Imports from ${origin_country}`
  subtitle =`Get ${paramsData.country} export statistics of ${paramsData.importer || paramsData.exporter} imports from ${origin_country}. Find ${paramsData.importer || paramsData.exporter} customs statistics of ${paramsData.country} imports from ${origin_country} based on export bills, shipping bills and invoices.`
  }
  ///// country + product + hs_code filter
  if('country' in paramsData && ('importer' in paramsData || 'exporter' in paramsData) && hscode_filter){
  title =`${paramsData.country} Trade Data of ${paramsData.importer || paramsData.exporter} under HS Code ${hscode_filter} Imports`
  subtitle =`Lookup ${paramsData.country} trade data of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} imports. Target your potential market through ${paramsData.country} customs data of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} imports.`
  }
  
  /// country + product + hscode filter + origin country filter
  if('country' in paramsData && ('importer' in paramsData || 'exporter' in paramsData) && hscode_filter && origin_country){
  title =`${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} Statistics of ${paramsData.country} Imports from ${origin_country}`
  subtitle =`Get latest ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} statistics of ${paramsData.country} imports from ${origin_country} bases on shipment details compiled by ${paramsData.country} customs.`
  }
  
  
    }
    else{
      /// global + hscode
  if('importer' in paramsData || 'exporter' in paramsData){
  title =`International Export Data of HS Code ${paramsData.importer || paramsData.exporter} | Global Trade Data`
  subtitle =`Search international export data of HS Code ${paramsData.importer || paramsData.exporter} covers export value, unit, quantity, global importers, trading partners and more HS Code ${paramsData.importer || paramsData.exporter} export shipment details`
  }
  /// global + hscode + origin country filter
  if(('importer' in paramsData || 'exporter' in paramsData) && origin_country){
  title =`Global Customs Statistics of HS code ${paramsData.importer || paramsData.exporter} Imports by Globa Country from ${origin_country}`
    subtitle =`Search global customs statistics of HS code ${paramsData.importer || paramsData.exporter} imports by global countries from ${origin_country} through all mode of transports covers land, air and sea ports.`
  } 
  //// country + hs_code
  if('country' in paramsData && ('importer' in paramsData || 'exporter' in paramsData)){
    title =`${paramsData.country} Export Data of HS Code ${paramsData.importer || paramsData.exporter} | ${paramsData.country} Trade Statistics`
    subtitle =`Search ${paramsData.country} export data of HS Code ${paramsData.importer || paramsData.exporter} covers export value, unit, quantity, ${paramsData.country} importers, trading partners and more HS Code ${paramsData.importer || paramsData.exporter} export shipment details`
  }
  /// country + hscode + origin country
  if('country' in paramsData && ('importer' in paramsData || 'exporter' in paramsData) && origin_country){
  title =`${paramsData.country} Customs Statistics of HS code ${paramsData.importer || paramsData.exporter} Imports by ${paramsData.country} from ${origin_country}`
    subtitle =`Search ${paramsData.country} customs statistics of HS code ${paramsData.importer || paramsData.exporter} imports by ${paramsData.country} from ${origin_country} through all mode of transports covers land, air and sea ports.`
  }
    }
  }
  }

}
  
/////////////// import + importer
       if (pathname.includes('importer')){
        /// global condition
        if( 'importer' in paramsData || 'exporter' in paramsData || 'product' in paramsData || 'hs_code' in paramsData){
          const regex = /^-?\d+(\.\d+)?$/;
              const res = regex.test(paramsData.importer || paramsData.exporter);
              if(!res || 'product' in paramsData){
          title = `List of ${paramsData.importer || paramsData.exporter||paramsData.product} Importers | ${paramsData.importer || paramsData.exporter||paramsData.product} Buyers Data and Foreign Importers Directory`
          subtitle =`List of $${paramsData.importer || paramsData.exporter||paramsData.product} importers and import companies with their shipment details. Search ${paramsData.importer || paramsData.exporter||paramsData.product} buyers data and importers directory. Get global importers of ${paramsData.importer || paramsData.exporter||paramsData.product}.`
        }
        if((!res||'product' in paramsData) && hscode_filter){
            title = `List of ${paramsData.importer || paramsData.exporter||paramsData.product} under HS Code ${hscode_filter} Importers | HS Code - ${hscode_filter} Buyers Directory`
            subtitle = `Get worldwide importers database of HS Code ${hscode_filter} with their shipment details. Search ${hscode_filter} buyers and importers directory. `
        }
        if(res || 'hs_code' in paramsData){
          title = `List of HS Code ${paramsData.importer || paramsData.exporter || paramsData.hs_code} Importers | ${paramsData.importer || paramsData.exporter|| paramsData.hs_code} Buyers Data`
          subtitle = `Find HS Code ${paramsData.importer || paramsData.exporter|| paramsData.hs_code} importers and import companies with their shipment details. Search HS Code ${paramsData.importer || paramsData.exporter|| paramsData.hs_code} buyers data and importers directory.`
        }
        }
        /// country reporting 
        if ( ('importer' in paramsData || 'exporter' in paramsData || 'product' in paramsData || 'hs_code' in paramsData) && 'country' in paramsData){
          const regex = /^-?\d+(\.\d+)?$/;
              const res = regex.test(paramsData.importer || paramsData.exporter);
              if(!res || 'product' in paramsData){
          title = `${paramsData.importer || paramsData.exporter || paramsData.product} Importers in ${paramsData.country} | ${paramsData.country} Importers Directory of ${paramsData.importer || paramsData.exporter|| paramsData.product}`
          subtitle =`Search for list of ${paramsData.importer || paramsData.exporter||paramsData.product} importers in ${paramsData.country}. Our import data covers ${paramsData.country} importers and buyers name and address, ${paramsData.importer || paramsData.exporter||paramsData.product} import quantity and value, foreign country and other shipment details.`
        }
        if((!res||'product' in paramsData) && hscode_filter){
            title = `${paramsData.country} Importers List of ${paramsData.importer || paramsData.exporter||paramsData.product} under HS Code ${hscode_filter}`
            subtitle = `Lookup ${paramsData.country} importers list of ${paramsData.importer || paramsData.exporter||paramsData.product} under HS code ${hscode_filter} along with trade data of import companies in ${paramsData.country}`
        }
        if(res || 'hs_code' in paramsData){
          title = `List of ${paramsData.country} Importers of Products under HS Code ${paramsData.importer || paramsData.exporter|| paramsData.hs_code}`
          subtitle = `Find list of ${paramsData.country} importers of products under HS code ${paramsData.importer || paramsData.exporter|| paramsData.hs_code} with shipment details of import companies.`
        }
        }
  
       }

       /////////emporter +export
   if (pathname.includes('exporter')){
        /// global condition
        if( 'importer' in paramsData || 'exporter' in paramsData || 'product' in paramsData || 'hs_code' in paramsData){
          const regex = /^-?\d+(\.\d+)?$/;
              const res = regex.test(paramsData.importer || paramsData.exporter);
              if(!res || 'product' in paramsData ){
          title = `List of ${paramsData.importer || paramsData.exporter || paramsData.product} Exporters | ${paramsData.importer || paramsData.exporter|| paramsData.product} Buyers Data and Foreign Exporters Directory`
          subtitle =`List of $${paramsData.importer || paramsData.exporter|| paramsData.product} exporters and export companies with their shipment details. Search ${paramsData.importer || paramsData.exporter|| paramsData.product} buyers data and Exporters directory. Get global EXporters of ${paramsData.importer || paramsData.exporter}.`
        }
        if((!res|| 'product' in paramsData) && hscode_filter  ){
            title = `List of ${paramsData.importer || paramsData.exporter || paramsData.product} under HS Code ${hscode_filter} Importers | HS Code - ${hscode_filter} Buyers Directory`
            subtitle = `Get worldwide exporters database of HS Code ${hscode_filter} with their shipment details. Search ${hscode_filter} buyers and exporters directory. `
        }
        if(res || 'hs_code' in paramsData){
          title = `List of HS Code ${paramsData.importer || paramsData.exporter ||paramsData.hs_code} Exporters | ${paramsData.importer || paramsData.exporter||paramsData.hs_code} Buyers Data`
          subtitle = `Find HS Code ${paramsData.importer || paramsData.exporter ||paramsData.hs_code} exporters and export companies with their shipment details. Search HS Code ${paramsData.importer || paramsData.exporter ||paramsData.hs_code} buyers data and exporters directory.`
        }
        }
        /// country reporting 
        if ( ('importer' in paramsData || 'exporter' in paramsData) && 'country' in paramsData || 'product' in paramsData || 'hs_code' in paramsData){
          const regex = /^-?\d+(\.\d+)?$/;
              const res = regex.test(paramsData.importer || paramsData.exporter);
              if(!res || 'product' in paramsData){
          title = `${paramsData.importer || paramsData.exporter || paramsData.product} Exporters in ${paramsData.country} | ${paramsData.country} Exporters Directory of ${paramsData.importer || paramsData.exporter|| paramsData.product}`
          subtitle =`Search for list of ${paramsData.importer || paramsData.exporter|| paramsData.product} exporters in ${paramsData.country}. Our export data covers ${paramsData.country} exporters and buyers name and address, ${paramsData.importer || paramsData.exporter|| paramsData.product} export quantity and value, foreign country and other shipment details.`
        }
        if((!res || 'product' in paramsData) && hscode_filter ){
            title = `${paramsData.country} Exporters List of ${paramsData.importer || paramsData.exporter|| paramsData.product} under HS Code ${hscode_filter}`
            subtitle = `Lookup ${paramsData.country} exporters list of ${paramsData.importer || paramsData.exporter} under HS code ${hscode_filter} along with trade data of export companies in ${paramsData.country}`
        }
        if(res || 'hs_code' in paramsData){
          title = `List of ${paramsData.country} Exporters of Products under HS Code ${paramsData.importer || paramsData.exporter||paramsData.hs_code}`
          subtitle = `Find list of ${paramsData.country} exporters of products under HS code ${paramsData.importer || paramsData.exporter||paramsData.hs_code} with shipment details of export companies.`
        }
        }
      }

    return { title, subtitle };
  }, [pathname, paramsData, origin_country, hscode_filter]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-5 text-2xl font-semibold text-arsenic md:text-3xl">
        {title}
      </h1>
      <h2 className="text-sm font-medium text-nickel">
        {subtitle}
      </h2>
    </div>
  );
};

export default TitleForDynamicPage;



// 'use client'
// import { useData } from "@/context/store";
// import { capitalizeString } from "@/lib/utils";
// import { useParams, usePathname, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function TitleForDynamicpage(){
//   const {origin_country, hscode_filter}= useData()
//     const [title, settitle]=useState(' Search Global Importers, Exporters, Shipments Data')
//     const [subheading, setsubheading] = useState('Search Importers, Exporters and Shipment Data by Product, HS Code or Combination of both.')
//     const pathname = usePathname();
//     const searchparams= useSearchParams();
//     const paramsData: { [key: string]: string } = {}

//     for(const[key, value] of searchparams.entries()){
//       paramsData[key] = capitalizeString(value)
//     }

    
//     console.log(origin_country)
//     useEffect(()=>{
//       if(pathname.includes('trade')){
//        if( paramsData.type === 'Import' ){
//         ////country + product
//          if('product' in paramsData && 'country' in paramsData ){
//           const heading = `${paramsData.country} ${paramsData.product} Imports Data | ${paramsData.product} Imports in ${paramsData.country}`
//           const heading2 = `Find ${paramsData.country} ${paramsData.product} imports data and statistics with ${paramsData.product} importers in ${paramsData.country}. Our ${paramsData.country} import data of ${paramsData.product} contains value, quantity, unit and more trade customs details.`
//           settitle(heading)
//           setsubheading(heading2)
//          }
//          ////country+ product + origin country
//          if('product' in paramsData && 'country' in paramsData &&  (origin_country && origin_country !== 'All') ){
//           const heading = `${paramsData.country} Import Statistics of ${paramsData.product} Imports from ${origin_country}`
//           const heading2 = `Get ${paramsData.country} import statistics of ${paramsData.product} imports from ${origin_country}. Find ${paramsData.product} customs statistics of ${paramsData.country} imports from ${origin_country} based on import bills, shipping bills and invoices.`
//           settitle(heading)
//           setsubheading(heading2)
//          }
//         /// product + hs_code filter
//          if('product' in paramsData && 'country' in paramsData && (hscode_filter && hscode_filter !== 'All')){
//           const heading = `${paramsData.country} Trade Data of ${paramsData.product} under HS Code ${hscode_filter} Imports`
//           const heading2= `Lookup ${paramsData.country} trade data of ${paramsData.product} under HS code ${hscode_filter} imports. Target your potential market through ${paramsData.country} customs data of ${paramsData.product} under HS code ${hscode_filter} imports.`
//           settitle(heading)
//           setsubheading(heading2)
//         }
//         ///product+hscode (filter)+ country

//         if('product' in paramsData && 'country' in paramsData  && (hscode_filter && hscode_filter !== 'All')&& (origin_country && origin_country !== 'All')){
//           const heading= `${paramsData.product} under HS code ${hscode_filter} Statistics of ${origin_country} Imports from ${paramsData.country}`
//           const heading2=`Get latest ${paramsData.product} under HS code ${hscode_filter} statistics of ${origin_country} imports from ${paramsData.country} bases on shipment details compiled by ${paramsData.country} customs`
//           settitle(heading)
//           setsubheading(heading2)
//         }

//          /**hscode */
//          if('hs_code' in paramsData && 'country' in paramsData){
//           const heading =`${paramsData.country} Import Data of HS Code ${paramsData.hs_code} | ${paramsData.country} Trade Statistics`
//           const heading2 = `Search ${paramsData.country} import data of HS Code ${paramsData.hs_code} covers import value, unit, quantity, ${paramsData.country} importers, trading partners and more HS Code ${paramsData.hs_code} import shipment details`
//           settitle(heading)
//           setsubheading(heading2)
//         }

//         ////hscode + country(origin)
//         if('hs_code' in paramsData && 'country' in paramsData && (origin_country && origin_country !== 'All')){
//           const heading =`${paramsData.country} Customs Statistics of HS code ${paramsData.hs_code} Imports by ${origin_country} from ${paramsData.country}`
//             const heading2 = `Search ${paramsData.country} customs statistics of HS code ${paramsData.hs_code} imports by ${origin_country} from ${paramsData.country} through all mode of transports covers land, air and sea ports`
//             settitle(heading)
//             setsubheading(heading2)
//         }

//         }
        
//         else if( paramsData.type === 'Export' ){
//           ////country + product
//            if('product' in paramsData && 'country' in paramsData){
//             const heading = `${paramsData.country} ${paramsData.product} Exports Data | ${paramsData.country} Export Statistics`
//             const heading2 = `Get ${paramsData.country} ${paramsData.product} exports data covers quantity, unit, price, value, name of exporters in ${paramsData.country} and more shipment details. Tarket your potential market through ${paramsData.country} export statistics of ${paramsData.product}.`
//             settitle(heading)
//             setsubheading(heading2)
//            }
//            ////country+ product + origin country
//            if('product' in paramsData && 'country' in paramsData && (origin_country && origin_country !== 'All') ){
//             const heading = `${paramsData.country} Shipment Data of ${paramsData.product} Exports to ${origin_country}`
//             const heading2 = `Find ${origin_country} shipment data of ${paramsData.product} exports to ${paramsData.country}. Our ${origin_country} customs data of ${paramsData.product} based on export shipments goes through air, land or sea ports to ${paramsData.country}`
//             settitle(heading)
//             setsubheading(heading2)
//            }
//           /// hs_code
//            if('hs_code' in paramsData && 'country' in paramsData ){
//             const heading = `${paramsData.coutry} Customs Data of HS Code ${paramsData.hs_code} Exports | ${paramsData.country} Exports`
//             const heading2= `Access ${paramsData.country} customs data of HS Code ${paramsData.hs_code} exports based on shipping bills, invoices and other document sources. Our ${paramsData.country} customs statistics of HS Code ${paramsData.hs_code} covers exporter name and more details.`
//             settitle(heading)
//             setsubheading(heading2)
//           }
//           ///product+hscode (filter)
  
//           if('product' in paramsData && 'country' in paramsData  && (hscode_filter && hscode_filter !== 'All')){
//             const heading= `${paramsData.country} Trade Data of ${paramsData.product} Exports under HS Code ${paramsData.hs_code}`
//             const heading2= `Search ${paramsData.country} trade data of ${paramsData.product} exports under HS Code ${paramsData.hs_code} to analyze your business competition and monitor companies market share.`
//             settitle(heading)
//             setsubheading(heading2)
//           }
  
//           // product+hscode (filter)+ country
//            if('hs_code' in paramsData && 'country' in paramsData && (hscode_filter && hscode_filter !== 'All')&& (origin_country && origin_country !== 'All')){
//             const heading =`${paramsData.product} under HS code ${hscode_filter} Statistics of ${origin_country} Exports to ${paramsData.country}`
//             const heading2 = `Lookup ${paramsData.product} under HS code ${hscode_filter} statistics of ${origin_country} exports to ${paramsData.country} covers trade value, unit quantity and more export details`
//             settitle(heading)
//             setsubheading(heading2)
//           }
  
//           ////hscode + country
//           if('hs_code' in paramsData && 'country' in paramsData && (origin_country && origin_country !== 'All')){
//             const heading = `${paramsData.country} Export Statistics of HS code ${hscode_filter} Exports by ${origin_country} to ${paramsData.country}`
//               const heading2 = `Find ${paramsData.country} export statistics of HS code ${hscode_filter} exports by ${origin_country} to ${paramsData.country} based on export shipment details by ${paramsData.country} customs and other sources`
//               settitle(heading)
//               setsubheading(heading2)
//           }
//   ////////// importer
//           }
//         }
//           else if(pathname.includes('importer')){
//             // Importer + Product + import
//               if('product' in paramsData && 'country' in paramsData) { 
//                 const heading = `${paramsData.product} Importers in ${paramsData.country} | ${paramsData.country} Importers Directory of ${paramsData.product}`
//                 const heading2 = `Search for list of ${paramsData.product} importers in ${paramsData.country}. Our import data covers ${paramsData.country} importers and buyers name and address, ${paramsData.product} import quantity and value, foreign country and other shipment details.`
//                 settitle(heading)
//                 setsubheading(heading2)
//               }
              

//             // Importer + HS Code + import
//               if(('hs_code' in paramsData || (hscode_filter && hscode_filter !== 'All')) && 'country' in paramsData){
//                 const heading = `List of ${paramsData.counttry} Importers of Products under HS Code ${paramsData.hs_code || hscode_filter}`
//                 const heading2 = `Find list of ${paramsData.country} importers of products under HS code ${paramsData.hs_code || hscode_filter} with shipment details of import companies.`
//                 settitle(heading)
//                 setsubheading(heading2)
//               }

//             // Importer + Product + HS Code(filter) + import
//               if('product' in paramsData && 'country' in paramsData && (hscode_filter && hscode_filter !== 'All')){
//                 const heading = `${paramsData.country} Importers List of ${paramsData.product} under HS Code ${hscode_filter}`
//                 const heading2 = `Lookup ${paramsData.country} importers list of ${paramsData.product} under HS code ${hscode_filter} along with trade data of import companies in ${paramsData.country}`
//                 settitle(heading)
//                 setsubheading(heading2)
//               }

//           }

// //////////exporter
//           else if(pathname.includes('exporter')){
//             // exporter + Product + import
//             if('product' in paramsData && 'country' in paramsData) { 
//               const heading = `${paramsData.product} Exporters in ${paramsData.country} | ${paramsData.country} Exporters Directory of ${paramsData.product}`
//               const heading2 = `Search for list of ${paramsData.product} exporters in ${paramsData.country}. Our export data covers ${paramsData.country} exporters and buyers name and address, ${paramsData.product} import quantity and value, foreign country and other shipment details.`
//               settitle(heading)
//               setsubheading(heading2)
//             }
            

//           // exporter + HS Code + import
//             if(('hs_code' in paramsData || (hscode_filter && hscode_filter !== 'All')) && 'country' in paramsData){
//               const heading = `List of ${paramsData.counttry} Exporters of Products under HS Code ${paramsData.hs_code || hscode_filter}`
//               const heading2 = `Find list of ${paramsData.country} exporters of products under HS code ${paramsData.hs_code || hscode_filter} with shipment details of export companies.`
//               settitle(heading)
//               setsubheading(heading2)
//             }

//           // exporter + Product + HS Code(filter) + import
//             if('product' in paramsData && 'country' in paramsData && (hscode_filter && hscode_filter !== 'All')){
//               const heading = `${paramsData.country} EXporters List of ${paramsData.product} under HS Code ${hscode_filter}`
//               const heading2 = `Lookup ${paramsData.country} exporters list of ${paramsData.product} under HS code ${hscode_filter} along with trade data of export companies in ${paramsData.country}`
//               settitle(heading)
//               setsubheading(heading2)
//             }
          
//         } 
      
      
//     },[pathname, searchparams, origin_country, hscode_filter])


//     return(
//         <div className="flex flex-col items-center">
//           <h1 className="mb-5 text-2xl font-semibold text-arsenic md:text-3xl">
//            {title}
//           </h1>
//           <h2 className="text-sm font-medium text-nickel">
//             {subheading}
//           </h2>
//         </div>
//     );
// }

