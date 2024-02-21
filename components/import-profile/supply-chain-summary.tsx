import { topPerformersConfig } from "@/constants"
import Link from "next/link"


const TopPerformers = ({
  heading,
  subHeading = "",
  performers,
}: {
  heading: string
  subHeading?: string
  performers: { label: string; href?: string }[]
}) => {
  return (
    <div className="w-full p-4 md:w-1/2">
      <h3 className="flex h-[52px] items-center rounded-t-[3px] bg-dim-grey px-[10px] py-[15px] text-left text-2xl font-medium text-white">
        {heading}
      </h3>
      <div className="p-4 shadow-top-performer ">
        {subHeading && (
          <h3 className="mb-4 text-left text-2xl font-medium text-dark-gunmetal">
            {subHeading}
          </h3>
        )}
        <div>
          <ol>
            {performers.map(({ label, href }, idx) => (
              <li
                key={`${label}_${href}`}
                className={`mb-5 text-left font-medium ${
                  href ? "text-azure" : "text-black"
                } hover:${href ? "text-crayola" : "text-black"}`}
              >
                <Link href={href ?? "#"}>
                  {idx + 1}. {label}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

const SupplyChainSummary = () => {
  return (
    <div className="p-4 text-center md:p-12">
      <h2 className="w-full p-5 text-3xl font-medium text-dark-gunmetal">
        12 Month Supply Chain Summary
      </h2>
      <p className="mb-5 text-dark-dim-grey">
        View a sample of Indian COMMERCIAL SA DE CV. bill of lading data and
        analyze import market and other trading activities. Fill-up our request
        a demo form to access full import data ofIndian COMMERCIAL SA DE CV.
      </p>
      <div className="md:flex md:flex-wrap">
        {topPerformersConfig.map(({ heading, performers, subHeading }) => (
          <TopPerformers
            key={`${heading}`}
            heading={heading}
            performers={performers}
            subHeading={subHeading}
          />
        ))}
      </div>
    </div>
  )
}

export default SupplyChainSummary
