import AgraImportersSuppliers from "@/components/import-agra-icd-port/agra-icd-imports"
import AgraImportData from "@/components/import-agra-icd-port/agra-import-data"
import AgraImportPartners from "@/components/import-agra-icd-port/agra-import-partners"
import AgraImportStatistics from "@/components/import-agra-icd-port/agra-import-statics"
import ShipmentRecords from "@/components/import-chapter/shipment-records"
import Faq from "@/components/import/faq-section"
import { agraIcdPortFaq } from "@/constants"



const IndiaImportUnitedStates = () => {
  return (
    <section>
      <AgraImportData/>
      <AgraImportStatistics />
      <AgraImportPartners />
      <AgraImportersSuppliers />
      <ShipmentRecords />
      <Faq faqConfig={agraIcdPortFaq} />
    </section>
  )
}

export default IndiaImportUnitedStates
