import ImportCompany from "@/components/import-profile/import-company"
import ImportProfileBanner from "@/components/import-profile/import-profile-banner"
import SupplyChainSummary from "@/components/import-profile/supply-chain-summary"



const ImportProfile = () => {
  return (
    <section>
      <ImportProfileBanner />
      <SupplyChainSummary />
      <ImportCompany />
    </section>
  )
}

export default ImportProfile
