import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import SiteTopBar from "@/components/site-top-bar"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <>
      <SiteTopBar />
      <header className="sticky top-0 z-1000  w-full bg-background p-3">
        <div className="items-center justify-between px-6">
          <MainNav items={siteConfig.mainNav} />
          {/* <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <ThemeToggle />
            </nav>
          </div> */}
        </div>
      </header>
    </>
  )
}
