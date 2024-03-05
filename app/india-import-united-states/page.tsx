import ShipmentRecords from "@/components/import-chapter/shipment-records"
import Faq from "@/components/import/faq-section"
import ImportStatics from "@/components/india-import-us/import-statics"
import ImportersSuppliers from "@/components/india-import-us/importers-suppliers"
import UsaImportData from "@/components/india-import-us/usa-import-data"
import ImportMonthlyTrends from "@/components/india-import-us/usa-import-trend"
import UsaShipment from "@/components/india-import-us/usa-shipments"
import { indiaUSAImportFaq } from "@/constants"

export const metadata = {
  title: "India Imports from United States Worth USD 101 Million During June 2019 to May 2020",
  description: "India Imports from United States recorded USD 101 Million during June 2019 to May 2020. Total 55136 importers in India import goods from United States. Check what commodities and how much they imports from United States. Total 3665546 arrived from United States to India."
}

const IndiaImportUnitedStates = () => {
  return (
    <section>
      <UsaImportData />
      <ImportStatics />
      <ImportMonthlyTrends />
      <UsaShipment />
      <ImportersSuppliers />
      <ShipmentRecords />
      <Faq faqConfig={indiaUSAImportFaq} />
    </section>
  )
}

export default IndiaImportUnitedStates
