import { capitalizeString } from "@/lib/utils";
import SearchBar from "@/components/search/search-bar";
import SearchFilters from "@/components/search/search-filters";
import SearchTabs from "@/components/search/search-tabs";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import Crumbs from "@/constants/get_breadcrumbs";
import TitleForDynamicpage from "@/components/shared/title_trade-import-export";
import Head from "next/head";
import { NextPage } from "next";
import { Metadata } from "next";

interface SearchPageProps {
  params: { type: string };
}

const SearchPage: NextPage<SearchPageProps> = ({ params }) => {
  const type = params.type;

  // Fetch data from your API with headers
  const fetchData = async () => {
    const API_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNzk0OWNiLWZmODItNGVkOS1hNzZhLWMxOGRmOThiZDZkYyIsImlhdCI6MTcwNDU0OTU4MH0.sMR6ZZ52KNkiXG8V-Y6JxjkscCOOEDY7DPEFc5nMU88";

    // Replace the URL with your actual API endpoint
    const response = await fetch(
      `https://api-dp.ibnmarkit.com:443/api/v1/users/search-data-importers`,
      {
        headers: {
          Authorization: `Bearer ${API_AUTH_TOKEN}`,
          // Add other necessary headers here
        },
      }
    );

    const data = await response.json();
    return data;
  };

  // Generate dynamic metadata based on the fetched data
  const generateMetadata = async (): Promise<Metadata> => {
    const data = await fetchData();

    // Update metadata dynamically based on the fetched data
    const metadata: Metadata = {
      title: `${capitalizeString(data.importer)} Page Title`,
      description: `Details for ${capitalizeString(data.importer)} - ${data.product_desc}.`,
    };

    return metadata;
  };

  return (
    <>
      <Head>
        {/* Include metadata from generateMetadata function */}
        <title>{await generateMetadata().then((metadata) => metadata.title)}</title>
        <meta
          name="description"
          content={await generateMetadata().then((metadata) => metadata.description)}
        />
      </Head>
      <section className="grid items-center gap-3 py-4 md:px-8 md:pt-20">
        <TitleForDynamicpage />
        <div className="mt-8  flex  justify-center gap-4 px-16">
          <SearchBar />
        </div>

        <div className="overflow-x-hidden pl-8">
          <Crumbs type={type} />
        </div>
      </section>
      <div className="mb-14 grid lg:grid-cols-[23%_77%]">
        <div className="px-8">
          <SearchFilters type={type} />
        </div>
        <div className="px-4">
          <SearchTabs params={{ type: type as string }} />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
