import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Icons } from "../icons"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select"

import { Input } from "../ui/input"
import { useRouter,usePathname, useSearchParams } from "next/navigation"

interface Option {
  value: string
  label: string
  icon?: string | boolean
  lock?: boolean
}

interface SelectBoxProps {
  className?: string
  placeholder?: string
  value?: string
  defaultValue?: string | number
  options: Option[]
  isSearchable?: boolean
  isReportingCountry?: boolean
}
export default function SelectBox({
  className,
  placeholder,
  value,
  options,
  defaultValue = "",
  isSearchable = false,
}: SelectBoxProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const [searchedOptions, setSearchedOptions] = useState<Option[]>(options)
  
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = options
 
    setSearchedOptions((prev) =>
      prev.length === 0
        ? options
        : newOptions.filter(({ value }) => value.includes(e.target.value))
    )
  }
  
  const onSelectItem = (val: string) => {
    setSelectedValue(val)
    // Store the selected value in sessionStorage
    sessionStorage.setItem(placeholder!, val);
    console.log(val);
  };

 

  useEffect(() => {
    // Set the default value from sessionStorage when component mounts
    const storedValue = sessionStorage.getItem(placeholder!);
    if (storedValue) {
      onSelectItem(storedValue);
      setSelectedValue(storedValue);
    }
  }, [placeholder]);

  return (
    <Select onValueChange={onSelectItem} defaultValue={defaultValue as string} value={selectedValue} >
      <SelectTrigger className={className}>
        <SelectValue  placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent style={{ position: 'fixed'}} className="z-1000">
        {isSearchable && (
          <div className="w-full p-2">
            <Input style={{ width: '10vw'}}
              onChange={(e) => handleOptionChange(e)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
                e.stopPropagation()
              }
              placeholder="Search"
            />
          </div>
        )}
        {searchedOptions.map((option) => (<>

          {!option.lock ? 
          
          <SelectItem onSelect={val => console.log(val)} key={option.value} value={option.value}>
          <div style={{ cursor: 'pointer'}} className="flex items-center gap-4">
            {/* {option?.icon && (
              // country flag
              <Image
                src={option?.icon as string}
                alt="option-icon"
                height={25}
                width={25}
                unoptimized={true}
              />
            )} */}
            {option.label}
          </div>
        </SelectItem>
          : 
          <SelectItem onSelect={val => console.log(val)} key={option.value} value={option.value} disabled>
          <div className="flex items-center gap-4">
            {option?.icon && (
              <Image
                src={option?.icon as string}
                alt="option-icon"
                height={32}
                width={32}
                unoptimized={true}
              />
            )}
            <Icons.lockColored className="inline h-6 w-8" />
            {option.label}
          </div>
        </SelectItem>
          }
          
          </>
        ))}
      </SelectContent>
    </Select>
  )
}
