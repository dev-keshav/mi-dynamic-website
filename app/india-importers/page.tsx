import ForeignImports from "@/components/india-imports/foreign-imports"
import IndiaChapterView from "@/components/india-imports/india-chapter-view"
import IndiaImportersList from "@/components/india-imports/india-importers-list"
import IndiaImportersValue from "@/components/india-imports/india-importers-value"
import Breadcrumbs from "@/components/shared/breadcrumbs"


export const metadata = {
  title: "Mexico Import Data | Trade Statistics | Mexico Imports - Sep 2019 to Aug 2020",
  description: "As per Mexico import data, the country imports value recorded USD 467.2 billion between September 2019 to August 2020, monthly averaged USD 38.1 billion during the same period, reached an all-time high in October 2018 with USD 51.2 billion. Have an overview of Mexico imports market to check top import commodities, trade partners, HS code, ports, importers in Mexico, foreign suppliers and more trade statistics."
}


const IndiaImports = () => {
  return (
    <section>
      <IndiaImportersList />
      <IndiaImportersValue />
      <IndiaChapterView />
      <ForeignImports />
      <Breadcrumbs />
    </section>
  )
}

export default IndiaImports
