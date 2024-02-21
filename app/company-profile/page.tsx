import OverView from "@/components/shared/overViewHead";
import styles from "./CompanyProfile.module.css";
import CompanyInfo from "@/components/shared/companyInfo";
import CompanyOverview from "@/components/company/company-overview";
import PopupBg from "@/components/shared/popupBgPage";
import ImpExpTurnover from "@/components/shared/impExTurnover";
import CountryImpExp from "@/components/shared/countryImpExp";
import ImpExpCommodities from "@/components/shared/impExpCommodities";
import BuyerSupplyer from "@/components/shared/buyerSupplyer";
import PortofLoading from "@/components/shared/portOfLoadingUldn";
import CompetitorsImpExp from "@/components/shared/competitorsImpExp";
import ImpExpShipments from "@/components/shared/impExpShipments";
import EmployeeContacts from "@/components/shared/employeeContacts";
import FaqsCompany from "@/components/shared/faqsCompany";
import Breadcrumbs from "@/components/shared/breadcrumbs";


const Page = () => {
  return (
    <div className={styles.CompanyProfilePage}>
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
