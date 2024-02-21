"use client"

import React from "react"
import Image from "next/image"

const ImageZoom = ({
  zoom,
  setZoom,
  src,
  des = "",
}: Readonly<{
  zoom: boolean
  setZoom: (zoom: boolean) => void
  src: string
  des?: string
}>) => {
  React.useEffect(() => {
    if (zoom) {
      document.body.style.height = "100%"
      document.body.style.overflowY = "hidden"
    }
    return () => {
      document.body.style.height = "auto"
      document.body.style.overflowY = "auto"
    }
  }, [zoom])

  return (
    <div
      // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
      className={`fixed left-0 top-0 z-top ${
        zoom ? "flex" : "hidden"
      } h-screen w-screen items-center justify-center bg-black bg-opacity-[85%] p-10 transition-all duration-300`}
    >
      <div
        onClick={() => setZoom(false)}
        onKeyDown={(e) => {}}
        className="absolute right-[15px] top-[15px] cursor-pointer text-5xl font-semibold text-white opacity-100 transition-opacity hover:text-chinese-silver"
      >
        ×
      </div>
      <div className="w-max-[90%] h-max-[90%] flex flex-col items-center gap-1 overflow-hidden text-base text-chinese-silver">
        <Image src={src} alt={src} width={900} height={800} />
        {des && des}
      </div>
    </div>
  )
}

export default ImageZoom
