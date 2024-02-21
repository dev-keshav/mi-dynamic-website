import Banner from "@/components/import/banner"
import Commodities from "@/components/import/commodity-section"
import Dashboard from "@/components/import/dashboard-section"
import Faq from "@/components/import/faq-section"
import ForeignSupplier from "@/components/import/foreign-supplier-section"
import ImportPorts from "@/components/import/import-ports-section"
import Partners from "@/components/import/partner-section"
import Qualities from "@/components/import/qualities"
import ImportSectionBreadcrumbs from "@/components/import/section-breadcrumbs"
import TradeData from "@/components/import/trade-data"



export default function ImportData() {
  return (
    <section>
      <ImportSectionBreadcrumbs />
      <Banner />
      <Qualities />
      <TradeData />
      <Commodities />
      <Partners />
      <ImportPorts />
      <ForeignSupplier />
      <Dashboard />
      <Faq />
    </section>
  )
}
