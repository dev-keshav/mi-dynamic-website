import Head from 'next/head';
import CompanyOverview from "@/components/company/company-overview";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import BuyerSupplyer from "@/components/shared/buyerSupplyer";
import CompanyInfo from "@/components/shared/companyInfo";
import CompetitorsImpExp from "@/components/shared/competitorsImpExp";
import CountryImpExp from "@/components/shared/countryImpExp";
import EmployeeContacts from "@/components/shared/employeeContacts";
import FaqsCompany from "@/components/shared/faqsCompany";
import ImpExpTurnover from "@/components/shared/impExTurnover";
import ImpExpCommodities from "@/components/shared/impExpCommodities";
import ImpExpShipments from "@/components/shared/impExpShipments";
import OverView from "@/components/shared/overViewHead";
import PopupBg from "@/components/shared/popupBgPage";
import PortofLoading from "@/components/shared/portOfLoadingUldn";

import styles from "./CompanyProfile.module.css";

export const metadata = {
  title: "ABCD Private Limited Imports and Exports | Commodities Price | Competitors Analysis",
  description: "Check where ABCD Private Limited imports from and export to, what commodities imports and export, total imports/exports by month, buyers, suppliers and competitors of ABCD Private Limited in India."
}

const Page = () => {
  return (
    <div className={styles.CompanyProfilePage}>
      {/* <Head>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
      </Head> */}
      
      <Breadcrumbs />
      <CompanyInfo />
      <OverView />
      <CompanyOverview />
      <PopupBg />

      <ImpExpTurnover />
      <CountryImpExp />
      <ImpExpCommodities />
      <BuyerSupplyer />
      <PortofLoading />
      <CompetitorsImpExp />
      <ImpExpShipments />
      <EmployeeContacts />
      <FaqsCompany />
    </div>
  );
};

export default Page;
