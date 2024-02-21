import ShipmentRecords from "@/components/import-chapter/shipment-records"
import Faq from "@/components/import/faq-section"
import ImportStatics from "@/components/india-import-us/import-statics"
import ImportersSuppliers from "@/components/india-import-us/importers-suppliers"
import UsaImportData from "@/components/india-import-us/usa-import-data"
import ImportMonthlyTrends from "@/components/india-import-us/usa-import-trend"
import UsaShipment from "@/components/india-import-us/usa-shipments"
import { indiaUSAImportFaq } from "@/constants"



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
