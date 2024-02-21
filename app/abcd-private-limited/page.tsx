//E:/lab/market-inside-web-1/app/abcd-private-limited/page.tsx



import { companyFaq } from "@/constants"
import React from 'react';
import CompanyBanner from "@/components/company/company-banner"
import CompanyCommodityImports from "@/components/company/company-commodity-imports"
import CompanyCompetitors from "@/components/company/company-competitors"
import CompanyEmployeeRecord from "@/components/company/company-employee-record"
import CompanyImportPorts from "@/components/company/company-import-ports"
import CompanyImportsByMonth from "@/components/company/company-imports-by-month"
import CompanyImportsFrom from "@/components/company/company-imports-from"
import CompanyOverview from "@/components/company/company-overview"
import CompanyShipmentRecord from "@/components/company/company-shipment-record"
import CompanyExporter from "@/components/company/company-top-supplier"
import Faq from "@/components/import/faq-section"


const Company = () => {

  

  return (
    <section>
      <CompanyBanner />
      <CompanyOverview />
      <CompanyImportsByMonth />
      <CompanyImportsFrom />
      <CompanyCommodityImports />
      <CompanyExporter />
      <CompanyImportPorts />
      <CompanyCompetitors />
      <CompanyShipmentRecord />
      <CompanyEmployeeRecord />
      <Faq faqConfig={companyFaq} />
    </section>
  )
}

export default Company

