import React from "react"

const ImportProfileBanner = () => {
  return (
    <div className="flex w-full flex-col gap-11 bg-[url('/import-profile-bg.jpg')] bg-cover bg-center bg-no-repeat p-10 text-white">
      <h1 className="ml-5 mt-6 text-4xl font-medium">
        IMPORTER : INDIA IMPORTER AND SUPPLIERS
      </h1>
      <button className="ml-5 h-12 w-fit rounded-full border-2 border-white px-6 py-2 text-lg">
        Schedule A Demo
      </button>
      <p className="mb-14 ml-5 text-sm font-medium">Indian EMBASSY</p>
    </div>
  )
}

export default ImportProfileBanner
