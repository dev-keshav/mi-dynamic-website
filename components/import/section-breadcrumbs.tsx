"use client"

import { usePathname } from "next/navigation"
import { capitalizeString } from "@/lib/utils"
import Breadcrumbs from "@/components/shared/breadcrumbs"

const ImportSectionBreadcrumbs = () => {
  const pathName = usePathname()
  const countryName = capitalizeString(
    pathName.split("/").slice(-1)[0].split("-")[0]
  )

  const breadcrumbItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Data",
      href: "/data",
    },
    {
      title: `${countryName} Import Data`,
      href: pathName,
      current: true,
    },
  ]
  return (
    <div className="py-2 pl-12">
      <Breadcrumbs items={breadcrumbItems} />
    </div>
  )
}

export default ImportSectionBreadcrumbs
