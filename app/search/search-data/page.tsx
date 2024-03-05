import React from 'react'
import SearchPageDiv from './SearchPageDiv'


export const metadata = {
  title: "Search Global Trade Data and Import-Export Companies",
  description: "Search global trade database, buyers, suppliers, import and export companies by HS Code or Product. Find worldwide importers and exporters with their trade details."
}





export default function page() {
  return (
    <div>
      <SearchPageDiv />
    </div>
  )
}
