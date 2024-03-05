import AgraImportersSuppliers from "@/components/import-agra-icd-port/agra-icd-imports"
import AgraImportData from "@/components/import-agra-icd-port/agra-import-data"
import AgraImportPartners from "@/components/import-agra-icd-port/agra-import-partners"
import AgraImportStatistics from "@/components/import-agra-icd-port/agra-import-statics"
import ShipmentRecords from "@/components/import-chapter/shipment-records"
import Faq from "@/components/import/faq-section"
import { agraIcdPortFaq } from "@/constants"

export const metadata = {
  title: "Total Import Value was USD 101 Million of Agra ICD Port in India during June 2019 to May 2020",
  description: "India imports through Agra ICD Port worth USD 101 Million from June 2019 to May 2020. Have an overview on which commodities arrived at Agra ICD Port of India. Agra ICD Port Import Partners are U.S (32%), Canada (20%), China (15%), Germany (10%) and Japan (5%)."
}

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
