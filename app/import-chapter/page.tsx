import AnimalForeignSuppliers from "@/components/import-chapter/animal-foreign-suppliers"
import AnimalImportData from "@/components/import-chapter/animal-import-data"
import AnimalStatistics from "@/components/import-chapter/animal-statistics"
import MajorPorts from "@/components/import-chapter/major-ports"
import MonthlyTrends from "@/components/import-chapter/monthly-trends"
import PartnersLiveAnimals from "@/components/import-chapter/partners-live-animals"
import ShipmentRecords from "@/components/import-chapter/shipment-records"
import Faq from "@/components/import/faq-section"


export default function ImportChapter() {
  return (
    <section>
      <AnimalImportData />
      <AnimalStatistics />
      <MonthlyTrends />
      <PartnersLiveAnimals />
      <MajorPorts />
      <AnimalForeignSuppliers />
      <ShipmentRecords />
      <Faq />
    </section>
  )
}
  