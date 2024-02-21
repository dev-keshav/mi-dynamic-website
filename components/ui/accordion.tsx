import * as React from "react"
import Image from "next/image"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

type Icon = {
  icon?: boolean | string
  placement?: "left" | "right"
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("mb-4", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & Icon
>(
  (
    { className, children, icon = true, placement = "right", ...props },
    ref
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          `
        ${
          placement === "left"
            ? "flex-row-reverse  gap-2 pl-2"
            : "flex-row pl-8"
        } flex flex-1 items-center ${
            placement === "left" ? "justify-end" : "justify-between"
          } [&[data-state=open]>svg]: py-4 pr-2 font-medium transition-all${
            icon === "locked" ? "rotate-90" : "rotate-180"
          }`,
          className
        )}
        {...props}
      >
        {children}
        {icon &&
          (icon === "locked" ? (
            <Image src="/lockicon.png" alt="lock" height={16} width={16} unoptimized={true}/>
          ) : (
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
          ))}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
)
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-x-scroll text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
