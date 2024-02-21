import SearchBar from "@/components/search/search-bar";
import SearchFilters from "@/components/search/search-filters";
import SearchTabs from "@/components/search/search-tabs";
import Breadcrumbs from "@/components/shared/breadcrumbs";


const breadcrumbItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Search",
    href: "/search",
  },
  {
    title: "Oil Import Data of Indonesia",
    href: "/search/data",
    current: true,
  },
]

export default function SearchPage() {
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:pt-36">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Search Global Importers, Exporters, Shipments Data
          </h1>
        </div>
        <div className="mb-4 mt-8 flex justify-center gap-4">
          <SearchBar />
        </div>
        <Breadcrumbs items={breadcrumbItems} />

      </section>
      <div className="mb-14 grid md:grid-cols-[300px_1fr]">
        <div className="px-8" >
          <SearchFilters />
        </div>
        <div >
          <SearchTabs />
        </div>
      </div>
    </>
  )
}
