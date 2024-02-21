"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface MainNavProps {
  items?: NavItem[]
}

const Hamburger = ({
  toggleMenu,
  isOpen,
}: Readonly<{
  toggleMenu: () => void
  isOpen: boolean
}>) => {
  return (
    <div
      className={`z-40 flex items-center justify-between px-4 pt-4 md:hidden ${
        isOpen ? "pb-10" : "pb-4"
      }`}
    >
      <button onClick={toggleMenu} className="block lg:hidden">
        <div className="relative">
          <span
            className={`ease ${
              isOpen ? "mb-[-11px]" : "mb-1"
            } block h-1 w-6 bg-deep-saffron transition-transform duration-300 ${
              isOpen ? "translate-y-1 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`ease mb-1 block h-1 w-6 bg-deep-saffron transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`ease ${
              isOpen ? "mb-[-11px]" : "mb-1"
            } block h-1 w-6 bg-deep-saffron transition-transform duration-300 ${
              isOpen ? "translate-y-1  -rotate-45" : ""
            }`}
          ></span>
        </div>
      </button>
    </div>
  )
}

export function MainNav({ items }: MainNavProps) {
  const [open, setOpen] = React.useState(true)
  const drawerClasses = !open ? " translate-x-0" : "translate-x-[-100%]"

  const toggleMenu = () => {
    setOpen(!open)
    
  }

  React.useEffect(() => {
    if (!open) {
      document.body.style.height = "100%"
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.height = "auto"
      document.body.style.overflowY = "auto"
    }
  }, [open])

  return (
    <>
      <div className="flex  flex-col  justify-between gap-6 md:gap-10 xl:flex-row">
        <div className="flex  justify-between">
          <Hamburger toggleMenu={toggleMenu} isOpen={!open} />
          <div className="h-[52] w-[140px] md:h-[65] md:w-[175px]">
            <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/marketlogo.png"
              width={175}
              height={64}
              alt={siteConfig.name}
              style={{ zIndex: 1000 }}
              unoptimized={true}
              />
            </Link>
          </div>
        </div>
        {items?.length ? (
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {items?.map((item, index) => (
                <NavigationMenuItem
                  className="uppercase! text-sm font-semibold"
                  key={index}
                >
                  {item?.children ? (
                    <>
                      <NavigationMenuTrigger className="text-sm font-bold uppercase text-black ">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-1 md:grid-cols-1">
                          {item.children.map((child) => (
                            <ListItem
                              key={child.title}
                              title={child.title}
                              href={child.href}
                            ></ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          `text-sm font-bold uppercase text-black ${
                            item?.underline
                              ? "underline decoration-orange-300 decoration-4 underline-offset-8"
                              : ""
                          }`
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        ) : null}
      </div>

      <div
        className={`fixed left-0 top-[65px] h-full  w-full overflow-hidden bg-white  transition-transform duration-100 ${drawerClasses}`}
      >
        <div className="p-4">
          {items?.length ? (
            <NavigationMenu>
              <NavigationMenuList className="mt-10 w-full flex-col">
                {items?.map((item, index) => (
                  <NavigationMenuItem
                    className="uppercase! mt-10 text-sm font-semibold"
                    key={index}
                  >
                    {item?.children ? (
                      <>
                        <NavigationMenuTrigger className="text-sm font-semibold uppercase ">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="">
                            {item.children.map((child) => (
                              <ListItem
                                key={child.title}
                                title={child.title}
                                href={child.href}
                              ></ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "text-sm font-semibold uppercase"
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          ) : null}
        </div>
      </div>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="w-full border-b border-dashed border-gray-300 transition-colors  hover:bg-deep-saffron hover:text-white">
      <NavigationMenuLink className="md:max-w-max" asChild>
        <a
          ref={ref}
          className={cn(
            "block w-full select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
