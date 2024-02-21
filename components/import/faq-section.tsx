"use client"

import React from "react"
import { importAccordionConfig } from "@/constants"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "h-min-[35px] relative flex flex-1 items-center rounded-full py-2 text-xs font-medium transition-all md:h-[45px] md:text-base [&>div:first-child]:-rotate-90   [&>svg]:bg-white [&[data-state=open]>div:first-child]:rotate-0 [&[data-state=open]>div:first-child]:bg-beer [&[data-state=open]>div:first-child]:shadow-deep-black [&[data-state=open]>div]:border-none  [&[data-state=open]]:bg-beer [&[data-state=open]]:text-white",
        className
      )}
      {...props}
    >
      <div className="absolute left-[-10px] top-[-5px] flex h-[40px]  w-[40px] items-center justify-center rounded-full border bg-white transition-transform duration-200 md:h-[55px] md:w-[55px]">
        <ChevronDown
          size={24}
          className="   shrink-0 rounded-full   md:relative md:top-0"
        />
      </div>
      <div className="pl-10 pr-2 text-left text-[15px] font-medium md:pl-16  md:text-lg">
        {children}
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export const CustomAccordionItem = ({
  des,
  title,
  value,
}: {
  des: string
  title: string
  value: string
}) => {
  return (
    <AccordionItem
      className="my-4 rounded-full border [&[data-state=open]]:border-none"
      value={value}
    >
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent className="mt-4 pl-10 text-sm font-medium md:pl-16 md:text-lg">
        {des}
      </AccordionContent>
    </AccordionItem>
  )
}

const Faq = ({
  faqConfig = importAccordionConfig,
}: {
  faqConfig?: typeof importAccordionConfig
}) => {
  return (
    <div id="faqs" className="flex flex-col p-11 ">
      <h3 className="mx-4 py-9 text-center text-xl font-semibold text-black shadow-custom-faq-shadow md:text-3xl">
        Frequently Asked Questions regarding ABCD Private Limited
      </h3>
      <div className="m-2 p-2 shadow-custom-faq-shadow-2 md:m-11 md:p-8">
        <Accordion type="single" collapsible className="w-full">
          {faqConfig.map(({ title, value, des }) => (
            <CustomAccordionItem
              key={title}
              title={title}
              value={value}
              des={des}
            />
          ))}
        </Accordion>
      </div>
    </div>
  )
}

export default Faq
