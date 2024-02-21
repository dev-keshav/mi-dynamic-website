"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{46943:function(e,r,a){a.r(r),a.d(r,{default:function(){return commodity_tab}});var i=a(57437),t=a(2265),o=a(71612),l=a(39190),commodity_tree_map=()=>{let[e,r]=(0,t.useState)({data:o.zh,background:{visible:!1},series:[{gradient:!1,type:"treemap",labelKey:"name",sizeKey:"size",colorKey:"color",tooltip:{renderer:e=>{let{sizeKey:r}=e,a=e.datum[r],i=e.datum.year,t=e.datum.import;return{content:'\n                <div style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">\n                <div><b>Year:</b> '.concat(i,"</div>\n                <div><b>Import:</b> ").concat(t,"</div>\n                <div><b>Value:</b> ").concat(a,"%</div>\n                </div>\n              ")}}},formatter:e=>({stroke:e.depth<2?"transparent":"black"}),labels:{value:{formatter:e=>"".concat(e.datum.size,"%")}}}]});return(0,i.jsx)(l.AgChartsReact,{options:e})},commodity_tab=()=>(0,i.jsxs)("div",{className:"flex w-full gap-5 bg-dark-charcoal p-10",children:[(0,i.jsxs)("div",{className:"flex w-full flex-col gap-5 text-chinese-silver sm:w-full md:w-full lg:w-2/5",children:[(0,i.jsx)("div",{className:"text-4xl font-medium text-white",children:"India's Major Import Commodities"}),(0,i.jsx)("div",{children:"India stand at rank 11 in global import. India Imported goods worth of USD 367 Billion from February 2020 to January 2021, monthly averaged USD 31 billion, reaching an all-time high in Dec 2020 of 43 USD billion and a record low of USD 19 billion in Apr 2020 during the same period."}),(0,i.jsx)("div",{children:"India's top import products are Mineral Fuels & Oils (US$ 101348 Million), Electrical Machinery and Electronics (US$ 43160 Million), Machinery, Mechanical Appliances, etc. (US$ 34982 Million), Pearls and Precious Stones (US$ 30207 Million) and Organic Chemicals (US$ 20101 Million) between February 2020 to January 2021."})]}),(0,i.jsx)("div",{className:"hidden w-3/5 sm:hidden md:hidden lg:block",children:(0,i.jsx)(commodity_tree_map,{})})]})},71612:function(e,r,a){a.d(r,{IY:function(){return o},b1:function(){return l},p2:function(){return t},zh:function(){return i}});let i={name:"Root",children:[{name:"Vehicles",size:25,color:"#4381A4",year:2021,import:2023},{name:"Machinery",year:2020,import:2021,size:15,color:"#7A3A32"},{name:"Mineral",size:10,year:2019,import:2022,color:"#32665F"},{name:"Optical",size:9,color:"#4D643F",year:2021,import:2023},{name:"Electrical",size:18,color:"#926F32",year:2020,import:2021},{name:"Furniture",size:8,year:2019,import:2022,color:"#7F733E"},{name:"Plastics",size:6,color:"#47425F",year:2021,import:2023},{name:"Articles",size:3,color:"#64432C",year:2019,import:2022},{name:"Edible",size:4,color:"#765B63",year:2020,import:2021},{name:"Beverage",size:2,color:"#5E5E64",year:2019,import:2022}],color:.5},t=[{city:"Ankaleshwar",share:10.91},{city:"CFS Nasik",share:14.55},{city:"Chakeri Kanpur",share:10.91},{city:"Banglor",share:14.55},{city:"Agra",share:3.64},{city:"Amhedabad",share:9.09},{city:"Bhusawal",share:14.55},{city:"Calicut",share:12.73},{city:"Amritsar",share:5.45}],o=[{chapter:"Chapter 01",share:26},{chapter:"Chapter 02",share:20},{chapter:"Chapter 03",share:25},{chapter:"Chapter 04",share:13},{chapter:"Chapter 05",share:12},{chapter:"Chapter 06",share:17},{chapter:"Chapter 07",share:20},{chapter:"Chapter 08",share:18},{chapter:"Chapter 09",share:27},{chapter:"Chapter 10",share:32}],l=[{city:"Ahemdabad ICD (77.14%)",share:77,color:"#F32F79"},{city:"Amritsar ACC (47.50%)",share:47,color:"#FF9625"},{city:"Amritsar ACC (62.71%)",share:62,color:"#54D75F"},{city:"Agra ICD (100%)",share:100,color:"#43A19F"},{city:"Ahemdabad Air(86.57%)",share:86,color:"#7B43A0"}]}}]);