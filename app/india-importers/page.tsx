import ForeignImports from "@/components/india-imports/foreign-imports"
import IndiaChapterView from "@/components/india-imports/india-chapter-view"
import IndiaImportersList from "@/components/india-imports/india-importers-list"
import IndiaImportersValue from "@/components/india-imports/india-importers-value"
import Breadcrumbs from "@/components/shared/breadcrumbs"



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
