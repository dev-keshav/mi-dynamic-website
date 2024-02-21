import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"


const firstColumn = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Platform",
    href: "#",
  },
  {
    title: "Data",
    href: "#",
  },
  {
    title: "Plans",
    href: "#",
  },
  {
    title: "Research and Insights",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Terms and Conditions",
    href: "#",
  },
]

const secondColumn = [
  {
    title: "Importers",
    href: "#",
  },
  {
    title: "Exporters",
    href: "#",
  },
  {
    title: "Logistics",
    href: "#",
  },
  {
    title: "Corporation",
    href: "#",
  },
  {
    title: "Financial Institutions",
    href: "#",
  },
  {
    title: "IT and Consulting",
    href: "#",
  },
  {
    title: "Law Firms",
    href: "#",
  },
]

const thirdColumn = [
  {
    title: "Insurance",
    href: "#",
  },
  {
    title: "Consulting and Research",
    href: "#",
  },
  {
    title: "Sales and Marketing",
    href: "#",
  },
  {
    title: "Asset Management Companies",
    href: "#",
  },
  {
    title: "Academic Institutions",
    href: "#",
  },
  {
    title: "Government Agencies",
    href: "#",
  },
]

export default function SiteFooter() {
  return (
    <footer style={{ backgroundColor: '#F2F2F2'}} className="py-10 dark:bg-background/90">
      <div className="container">
        <Image src={`/assets/market-logo.png`} width={175} height={64} alt="Market" unoptimized={true}/>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <section className="col-span-1">
            <h3 className="text-lg font-semibold">MARKET INSIDE</h3>
            <ul className="mt-4">
              {firstColumn.map((item) => (
                <ListItem
                  title={item.title}
                  href={item.href}
                  key={item.title}
                />
              ))}
            </ul>
          </section>
          <section className="col-span-1">
            <h3 className="text-lg font-semibold">SOLUTIONS</h3>
            <ul className="mt-4">
              {secondColumn.map((item) => (
                <ListItem
                  title={item.title}
                  href={item.href}
                  key={item.title}
                />
              ))}
            </ul>
          </section>
          <section className="col-span-1">
            <h3 className="text-lg font-semibold">SOLUTIONS</h3>
            <ul className="mt-4">
              {thirdColumn.map((item) => (
                <ListItem
                  title={item.title}
                  href={item.href}
                  key={item.title}
                />
              ))}
            </ul>
          </section>
          <section className="col-span-1">
            <Button
              className="rounded-full border-gray-700 px-10 py-6 text-[16px] font-bold uppercase hover:border-primary hover:text-primary"
              variant="outline"
            >
              SCHEDULE A DEMO
            </Button>
            <div className="mt-8 flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:text-primary "
              >
                <div className="h-5 w-[13px]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook-f"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:text-primary"
              >
                <div className="h-5 w-5">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone-alt"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:text-primary"
              >
                <div className="h-5 w-5">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    ></path>
                  </svg>{" "}
                </div>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:text-primary"
              >
                <div className="h-5 w-5">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="linkedin-in"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </div>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:text-primary"
              >
                <div className="h-5 w-6">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="youtube"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </section>
        </div>

        <p className="mt-10 text-right text-gray-500">
          Copyright Â© 2022 Market Inside. All rights reserved ___________
        </p>
      </div>
    </footer>
  )
}

const ListItem = ({ title, href }: { title: string; href: string }) => (
  <li className="mt-3">
    <Link style={{ textDecoration: 'none'}}
      href={href}
      className="font-normal hover:text-primary dark:text-gray-400"
    >
      {title}
    </Link>
  </li>
)
