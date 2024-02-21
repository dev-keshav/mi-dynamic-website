"use client"

import { useState, MouseEvent, useEffect } from "react"
import { Country, State, City } from "country-state-city";
import { Calendar } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useParams, usePathname, useSearchParams, useRouter } from "next/navigation";
import ListItem from "../ui/list-item"
import ScheduleDemo from "./schedule-demo"
import SliderInput from "../ui/slider";
import { countries } from "@/constants";
import { useData } from "@/context/store";






const stateConfig = ["Russia", "China", "Chile", "Australia", "Austria"]
const cityConfig = ["Russia", "China", "Chile", "Australia", "Austria"]

export default function SearchFilters(type:any) {
  const [open, setOpen] = useState<boolean>(false)
  const {trade, setOrigin_country,origin_country, setIsFilterActive, sethscode_filter, hscode_filter,setImporter, setExporter} = useData();
  interface Product {
    date: string;
    importer: string;
    unit: string;
    quantity: string;
    product_description: string;
    net_weight_kg: number;
    total_value_usd: number;
    hs_code: string;
    origin_country: string;
  }
  interface IStateDetail {
    name: string;
    isoCode: string;
    countryCode: string;
    latitude: string;
    longitude: string;
  }
  const [selectedcountry, setselectedcountry]= useState('')
  
  const [cities, setCities] = useState<string[]>([]);
  const [states, setstates]=useState<IStateDetail[]>([]);
  const searchParams = useSearchParams()
 const pathname = usePathname()
 const router = useRouter();
  const country = searchParams.get('country')
  
  // const getCountryCodeByName = (countryName:any) => {
  //   const countries = Country.getAllCountries(); // Fetch all countries
  //   const foundCountry = countries.find(country => country.name === countryName);
  //   foundCountry && setselectedcountry(foundCountry.isoCode)
  //   return foundCountry ? foundCountry.isoCode : null;
  // };

  useEffect(() => {
    if (country) {
      const countryInfo = Country.getAllCountries().find(c => c.name === country);
      if (countryInfo) {
        setselectedcountry(countryInfo.isoCode);
      }
    }
  }, [country]);
  
  
  // const countrycode = getCountryCodeByName(country)
  // const states = countrycode && State.getStatesOfCountry(countrycode);
  useEffect(() => {
    if (selectedcountry) {
      const currstates: IStateDetail[] = State.getStatesOfCountry(selectedcountry).map(state => ({
        name: state.name,
        isoCode: state.isoCode,
        countryCode: state.countryCode,
        latitude: state.latitude ?? "", // Use an empty string (or some other default value) if latitude is null/undefined
        longitude: state.longitude ?? "", // Use an empty string (or some other default value) if longitude is null/undefined
      }));
      setstates(currstates)
      // Handle states data, e.g., storing in a state
    
    }
  }, [selectedcountry]);


  const [countryCounts, setCountryCounts] = useState<{ [key: string]: number }>({});
  const [hscode,sethscode] = useState<string[]>(['All'])
  const [hsCodeCounts, setHsCodeCounts] = useState<{ [key: string]: number }>({});
  // Update configurations once trade data is available
  useEffect(() => {
    if (trade && trade.products) {
      const countryFrequency: { [key: string]: any } = {All: ''};
      trade.products.forEach((product: Product) => {
        countryFrequency[product.origin_country] = (countryFrequency[product.origin_country] || 0) + 1;
      });
      setCountryCounts(countryFrequency);
      
    }
  }, [trade]);

  useEffect(()=>{
    if (trade && trade.products) {
      const hsCodeFrequency: { [key: string]: any } = {All: ''};
      
      
      
      if(origin_country != 'All'){
        trade.products.filter((item: Product) => item.origin_country === origin_country).forEach((product: Product) => {
          hsCodeFrequency[product.hs_code] = (hsCodeFrequency[product.hs_code] || 0) + 1;
        });
        setHsCodeCounts(hsCodeFrequency);
        console.log('filtering..')
        const uniquehscode: any = ['All',...new Set(trade.products.filter((item: Product) => item.origin_country === origin_country).map((item: Product)=> item.hs_code))]
        sethscode(uniquehscode)
      
      }
      else{
        trade.products.forEach((product: Product) => {
          hsCodeFrequency[product.hs_code] = (hsCodeFrequency[product.hs_code] || 0) + 1;
        });
        setHsCodeCounts(hsCodeFrequency);
      const uniquehscode: any =['All', ...new Set(trade.products.map((item: Product) => item.hs_code))]
      sethscode(uniquehscode);
     
    }
    }
  },[origin_country, trade])


  const handleCountryfilter = (country: string  ) => {
      setOrigin_country(country),
      
      setIsFilterActive(true)

      country === 'All' ? setIsFilterActive(false) : null;

  }

  const handlehsCountfilter = (hscode: string )=>{
        sethscode_filter(hscode),
        setIsFilterActive(true)
        hscode === 'All' ? setIsFilterActive(false) : null;
        if(typeof window !== "undefined"){
          const searchParams = new URLSearchParams(window.location.search);
          if (searchParams.has('hs_code_filter')) {
            searchParams.set('hs_code_filter', hscode);
          }
          if(hscode === 'All' ){
            searchParams.delete('hs_code_filter')
          } 
          else {
            searchParams.append('hs_code_filter', hscode);
          }
          
          const updatedUrl = `${window.location.pathname}?${searchParams.toString()}`;
          router.push(updatedUrl);
        }
  }

  
  const [selectedState, setSelectedState] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');

  const handlestateclick = (state: string, name:string) => {
    setSelectedState(state);
    // Assuming country is defined and selectedState is updated correctly
    const citiesArray = country ? City.getCitiesOfState(selectedcountry, state).map(city => city.name) : [];
     setCities(citiesArray); // Use setCities here
      if(typeof window !== "undefined"){
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('state')) {
          searchParams.set('state', name);
        } else {
          searchParams.append('state', name);
        }
        const updatedUrl = `${window.location.pathname}?${searchParams.toString()}`;
        router.push(updatedUrl);
      }
};

const handleCityClick = (city: string) => {
  // Clone the current URL's search parameters
  if(typeof window !== "undefined"){
  const searchParams = new URLSearchParams(window.location.search);
  
  // Check if 'city' parameter already exists
  if (searchParams.has('city')) {
    // Update the 'city' parameter
    searchParams.set('city', city);
  } else {
    // Add the 'city' parameter
    searchParams.append('city', city);
  }
  
  // Construct the new URL with updated or added 'city' parameter
  const updatedUrl = `${window.location.pathname}?${searchParams.toString()}`;
  
  // Use Next.js router to navigate to the updated URL
  router.push(updatedUrl);}
};

  return (
    <>
      {open && (
        <ScheduleDemo
          handleKeyPress={(e) => {
            if (e.key === "Escape") {
              setOpen(false)
            }
          }}
          handleBackdropClick={() => {
            setOpen(false)
          }}
        />
      )}
      <h3 className="mb-6 ml-3 text-[28px] font-semibold text-dark-sliver">
        Filter Data By
      </h3>
      
      <Accordion type="single" collapsible className="mt-4 w-full">
      <AccordionItem value="Date" >
      <AccordionTrigger
            icon={false}
            className="h-[44px] overflow-x-hidden  py-0 pl-2 text-sm uppercase shadow-accordion-item"
            onClick={() => setOpen(true)}>
        <Calendar size={20} color="#f78020"/>

        <input type="text" className=" ml-2 mr-auto " placeholder="01/30/2019-05/01/2023" />
        
      </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="port" >  
          </AccordionItem>
          {type.type === 'trade'  ? <>
        <AccordionItem value="country">
          <AccordionTrigger
            icon={false}
            className="h-[44px] py-0 text-sm uppercase shadow-accordion-item "
          >
           Origin Country
          </AccordionTrigger>
          <AccordionContent className="overflow-x-hidden">
            <ul className="max-h-[150px] px-2 py-4 ">
            {Object.entries(countryCounts).map(( [country, count] ) => (
                <ListItem
                  key={`${country}`}
                  className="my-[2px] ml-6 px-0 hover:bg-transparent"
                >
                  <div className="flex justify-between text-[12px] uppercase text-dark-jungle-green" onClick = {()=> handleCountryfilter(country )}>
                    <div>{country}</div>
                    <div>({count})</div>
                  </div>
                </ListItem>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        </>: null
        }
        {type.type === 'importer' || type.type === 'exporter' ? <>
      
        <AccordionItem value="state" >
          <AccordionTrigger
            placement="left"
            icon={false}
            
            className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
          >
            State 
          </AccordionTrigger>
          <AccordionContent style={{overflow: 'auto'}}>
            <ul className="max-h-[150px] px-2 py-4 ">
              {states && states.map(( state: {name:string, isoCode:string }) => (
                <ListItem
                  key={`${state.name}`}
                
                  className="my-[2px] ml-6 px-0 hover:bg-transparent"
                >
                  <div className="flex justify-between text-[12px] uppercase text-dark-jungle-green" onClick={() => handlestateclick( state.isoCode, state.name)}>
                    <div>{state.name}</div>
                    
                  </div>
                </ListItem>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="city" >
          <AccordionTrigger
           placement="left"
            icon={false}
            className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
          >
            City
          </AccordionTrigger>
          <AccordionContent className="overflow-x-hidden">
            <ul className="max-h-[150px] px-2 py-4 ">
            {cities.map(( city) => (
                <ListItem
                  key={`${city}`}
                
                  className="my-[2px] px-0 hover:bg-transparent"
                >
                  <div className="flex justify-between text-[12px] uppercase text-dark-jungle-green" onClick={() => handleCityClick( city)}>
                    <div>{city}</div>
                    
                  </div>
                </ListItem>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        

        </>:
         null}
        
        <AccordionItem value="hs-code" >
          <AccordionTrigger
            placement="left"
            icon={false}
            className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
          >
            Hs Code
          </AccordionTrigger>

          <AccordionContent className="overflow-x-hidden">
          <ul className="ml-6 max-h-[150px] px-2 py-4 ">
            {Object.entries(hsCodeCounts).map(( [hscount, count] ) => (
                <ListItem
                  key={`${hscount}`}
                  className="my-[2px] px-0 hover:bg-transparent"
                >
                  <div className="flex justify-between text-[12px] uppercase text-dark-jungle-green" onClick = {()=> handlehsCountfilter(hscount)}>
                    <div>{hscount}</div>
                    <div>({count})</div>
                  </div>
                </ListItem>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="port" onClick={() => setOpen(true)}>
          <AccordionTrigger
            placement="left"
            icon="locked"
            className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
          >
            Port
          </AccordionTrigger>
        </AccordionItem>
        { type.type === 'trade' ? <>
        <AccordionItem value="Mode of transport" onClick={() => setOpen(true)}>
        <AccordionTrigger
          placement="left"
          icon="locked"
          className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
        >
          Mode of transport
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="port of loading" onClick={() => setOpen(true)}>
        <AccordionTrigger
          placement="left"
          icon="locked"
          className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
        >
          port of loading
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="Port of discharge" onClick={() => setOpen(true)}>
        <AccordionTrigger
          placement="left"
          icon="locked"
          className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
        >
          Port of discharge
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="Supplier" onClick={() => setOpen(true)}>
        <AccordionTrigger
          placement="left"
          icon="locked"
          className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
        >
          Supplier
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="port" onClick={() => setOpen(true)}>
        <AccordionTrigger
          placement="left"
          icon="locked"
          className="h-[44px] py-0 pl-[33px] text-sm uppercase shadow-accordion-item"
        >
          Importer
        </AccordionTrigger>
      </AccordionItem>
      <AccordionItem value="Range" >
        <AccordionTrigger
          placement="left"
          icon={false}
          className="h-[44px] py-2 pl-[33px] text-sm uppercase shadow-accordion-item"
        >
          Range
        </AccordionTrigger>

        <AccordionContent>
          <div className=" p-2" style={{height:'200px'}}>
          <div className="mb-8"> 
        <SliderInput title="Net Weight Kg" sub=""/></div>
        <div className="mb-8">
        <SliderInput title="Total Value USD" sub='(In Thousand)'/></div>
  </div>
        </AccordionContent>
      </AccordionItem> 
        </>: null}
        
        
      </Accordion>
    </>
  )
}
