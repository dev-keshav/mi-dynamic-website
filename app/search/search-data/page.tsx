"use client"
import SearchBar from "@/components/search/search-bar";
import Trend from "@/components/search/Trend";
import './searchstyle.css';
import { useEffect } from 'react';
import Image from "next/image";



const imageArray =['client.png','client1.png','client2.png','client3.png','client4.png','client5.png','client6.png','client7.jpg','client8.png','client9.png','client10.png','wipag.jpg','client.png','client1.png','client2.png','client3.png','client4.png','client5.png','client6.png','client7.jpg','client8.png','client9.png','client10.png','wipag.jpg']
export default function SearchPage() {

  // ******************
  

  // card data
  const dataArray = [
    { number: 195, symbol: '+', text: 'Countries Trade Data' },
    { number: 54, symbol: '+', text: 'Detailed Countries' },
    { number: 2, symbol: 'B+', text: 'Total Shipment Records' },
    { number: 3, symbol: 'M+', text: 'Import Companies' },
    { number: 3, symbol: 'M+', text: 'Export Companies' },
    // ... (four more objects)
  ];


  //****************************************** */
  //data for trend/popular //
  const trendData = [
    {
      title: 'Recent Trending Searches',
      children: [
        'Highest Data', 'Global Data', 'Historical Data', 'Detailed Data', 'Statistical Data',
        'Import Data', 'Export Data', 'Mirror Data', 'SC Data', 'Transit Data', 'Cargo Data',
        'Highest Data', 'Global Data', 'Historical Data', 'Detailed Data', 'Statistical Data',
        'Import Data', 'Export Data', 'Mirror Data', 'SC Data', 'Transit Data', 'Cargo Data',
      ],
    },
    {
      title: 'Top Search Importer',
      children: [
        'Arcor SAIC', 'K K G APPORT VENTURES', 'TOYOTA OTOMOTIV SANAYI TÜRKIYE A.S.',
        'PPNO-BX-0523499KAZI RIAZ KHAN', 'STAR RAFINERI A.S.', 'VAKIF KATILIM BANKASI A.S',
        'BOTAS BORU HATLARI ILE PETROL TASIM', 'TÜRKIYE PETROL RAFINERILERI ANONIM SIRKETI',
        'TÜRK HAVA YOLLARI ANONIM ORTAKLIGI', 'FORD OTOMOTIV SANAYI ANONIM SIRKETI',
        'DOGUS OTOMOTIV SERVIS VE TIC.A.S.',
      ],
    },
    {
      title: 'Top Search Product',
      children: [
        'Aluminium and its Articles', 'Cereals', 'Copper and its Articles',
        'Iron & Steel Articles', 'Rubber Cotton Paper and Paperboard',
        'Oil Seeds and Oleaginous Fruits', 'Miscellaneous Chemical Products',
        'Man-made Filaments', 'Tanning or Dyeing Extracts', 'Food Industry Waste',
        'Chemical Industry Products', '"Ores, Slag & Ash"', 'Fertilisers',
        'Essential Oils & Resinoids', '"Furniture, Bedding, etc."', 'Glass and Glassware',
      ],
    },
  ];

  useEffect(() => {
    // Function to animate the number
    function animateNumber(id: string, endNbr: number, speed: number) {
      const elt = document.getElementById(id);

      function incNbrRec(i:any) {
        if (elt && i <= endNbr) {
          elt.innerHTML = i;
          setTimeout(() => {
            incNbrRec(i + 1);
          }, speed);
        }
      }

      incNbrRec(0);
    }

    // Apply the animation to the number elements
    dataArray.forEach((data, index) => {
      const id = `number${index}`;
      animateNumber(id, data.number, 5);
    });
  }, []); // Run the effect only once

  return (
    <section className=" grid items-center gap-6 pb-8 pt-6 ml-12 mr-12  ">
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Search Global Trade Data Online
        </h1>
        <p className=" text-lg text-muted-foreground">
          Discover Online 195+ Countries Trade Data by HS Code, Importers, Exporter and more
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4 px-16">
        <SearchBar />
      </div>
      {/*cards*/}
      <div className="flex w-full flex-wrap justify-center">
      <div className="flex flex-wrap justify-around mt-10 2xl:min-w-[1400px] 2xl:max-w-[2800px]" >
        {dataArray.map((data, index) => (
          <div key={index} className={`litdtaSrch`} style={{
            margin: '9px',
            textAlign: 'center',
            padding: '34px 22px',
            border: '2px dotted #f78020',
            borderRadius: 0,  
            transition: 'color 1s',
            maxWidth: '238px',
          }}>
            <h3 id={`number${index}`}>{data.number}</h3>
            <h3 >{data.symbol}</h3>
            <p >{data.text}</p>
          </div>
        ))}
      </div>
      </div>
      {/* Trend components */}
       {trendData.map((trend, index) => (
        <Trend key={index} head_line={trend.title} list_items={trend.children} />
      ))}
    <div className="flex items-center justify-center flex-col mt-4 pt-16">
      <h2 className=" flex font-roboto font-semibold text-3xl leading-6 mb-5">JOIN 25,000+ BUSINESSES HITTING THEIR NUMBER</h2>
      </div>
      <div className="image-carousel" onMouseEnter={() => document.getElementById('scrollContainer')?.classList.add('paused')} onMouseLeave={() => document.getElementById('scrollContainer')?.classList.remove('paused')}>
      <div id="scrollContainer" className="scroll-container">
        {imageArray.map((imageName, index) => (
          <img
            key={index}
            sizes={'30px'}
            src={`/assets/clientimage/${imageName}`}
            alt={`Client ${index + 1}`}
            className="client-image"
          />
        ))}
      </div>
    </div> 
    </section>
  )
}
