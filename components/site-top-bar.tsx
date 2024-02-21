import { siteConfig } from "@/config/site"

import { Icons } from "./icons"

export default function SiteTopBar() {
  return (
    <div
      role="banner"
      className="bg-gradient-to-t from-[#000000e3] to-[#5f5f5f] py-2 text-white"
    >
      <div className="container flex flex-col items-center justify-end gap-0 text-xs md:flex-row md:gap-4 md:font-medium">
        <div className="flex items-center">
          <Icons.phone className="mr-2 w-4" />
          <a style={{ textDecoration: 'none', color: 'white', marginRight: '2vw'}} href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
        </div>
        <div className="flex items-center">
          <Icons.mail className="mr-2 w-4" />
          <a style={{ textDecoration: 'none', color: 'white'}} href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
    </div>
  )
}
