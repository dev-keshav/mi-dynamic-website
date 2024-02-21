import React from "react"

import AnimalImportIndia from "@/components/india-import-ports/animal-imports-india"
import UsaIndiaImports from "@/components/india-import-ports/usa-india-imports"
import UsaIndiaMajorPorts from "@/components/india-import-ports/usa-india-major-ports"
import UsaIndiaSuppliers from "@/components/india-import-ports/usa-india-suppliers"



const IndiaImportPorts = () => {
  return (
    <section>
      <AnimalImportIndia />
      <UsaIndiaImports />
      <UsaIndiaMajorPorts />
      <UsaIndiaSuppliers />
    </section>
  )
}

export default IndiaImportPorts
