"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { demoFieldsConfig, scheduleTabConfig } from "@/constants"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ScheduleDemoInput from "../ui/schedule-demo-input"

const TabLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-wrap h-[600px] w-[770px] bg-white">
      <div
        className="relative w-2/3 px-6 py-10"
        style={{ overflowY: "auto", maxHeight: "600px" }}
      >
        {children}
      </div>
      <div className="w-1/3 bg-orange-red p-10">
        <h4
          style={{ fontWeight: "400", fontSize: "2vw" }}
          className="mb-2 text-2xl font-bold text-white"
        >                   
          Industry Solutions!
        </h4>
        <p
          style={{ fontWeight: "200", marginTop: "3vh" }}
          className="text-base font-medium leading-6 text-white"
        >
          Our worldwide presence ensures the timeliness, cost efficiency and
          compliance adherence required to ensure your production timelines are
          met.
        </p>
      </div>
    </div>
  )
}

const ScheduleDemo = ({
  handleKeyPress,
  handleBackdropClick,
  onMount,
}: {
  handleKeyPress?: (e: any) => void
  handleBackdropClick?: () => void
  onMount?: () => void
}) => {
  const [formData, setFormData] = useState<{
    firstName: string
    lastName: string
    workEmailId: string
    phoneNumber: string
    message: string
  }>({
    firstName: "",
    lastName: "",
    workEmailId: "",
    phoneNumber: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name as keyof typeof formData]: e.target.value,
    }))
  }

  React.useEffect(() => {
    document.body.style.height = "100%"
    document.body.style.overflowY = "hidden"
    onMount?.()
    return () => {
      document.body.style.height = "auto"
      document.body.style.overflowY = "auto"
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ref = React.useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref?.current?.focus()
  }, [])

  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false)

  const validateEmail = (email: any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Simple email regex, consider a more robust one for production
    return regex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailInput = e.target.value
    setEmail(emailInput)
    setIsEmailValid(validateEmail(emailInput))
  }

  return (
    <div
      onClick={handleBackdropClick}
      onKeyDown={handleKeyPress}
      tabIndex={-1}
      ref={ref}
      className={`fixed left-0 top-0 z-top
       flex
       h-screen w-screen items-start justify-center  bg-black bg-opacity-[50%] p-10 transition-all duration-300`}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        className="flex flex-col gap-1 overflow-hidden text-base text-chinese-silver"
      >
        <Tabs defaultValue="demo" className="w-full p-0">
          
          
          <div style={{ display: 'flex'}}>
          <TabsList className="h-auto w-full rounded-none bg-transparent p-0">
            {scheduleTabConfig.map(({ label, value }) => (
              <TabsTrigger
                key={`${label}_${value}`}
                value={value}
                className=" h-[56px]  rounded-none bg-elixir py-2 text-base font-normal text-dark-charcoal data-[state=active]:bg-cadmium-orange data-[state=active]:text-white"
              >
                <div className="flex items-center justify-center gap-2">
                  {label}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="flex justify-end" style={{ width: "100%" }}>
            <div
              className="text-white text-lg px-2 pt-2 rounded-full font-bold cursor-pointer"
              style={{
                color: "white",
                // border: "1px solid rgb(255, 229, 93)",
                // background: "chocolate",
                width: '3vw',
                height: '5vh',
                textAlign: 'center',
                fontSize: '4vh'
              }}
              onClick={handleBackdropClick}
            >
              X
            </div>
          </div>
          </div>
          <TabsContent className="mt-1 " value="demo">
            <TabLayout>
              <div className="flex h-full flex-col justify-between  ">
                <div className="flex flex-wrap items-center justify-between">
                  {demoFieldsConfig.map(
                    ({ label, name, fullWidth = false, ...rest }) => (
                      <div
                        className={`mb-[30px] mr-[1px] ml-[1px] ${
                          fullWidth ? "w-full" : "w-[46%]"
                        }]`}
                        key={`${name}_${label}`}
                      >
                        <ScheduleDemoInput
                          value={formData[name as keyof typeof formData]}
                          name={name}
                          label={label}
                          onChange={handleChange}
                          {...rest}
                        />
                      </div>
                    )
                  )}
                </div>
                <button
                  style={{ textAlign: "center", cursor: "pointer" }}
                  onClick={() => {
                    console.log({ formData })
                  }}
                  className="h-[51px]  w-full bg-yankees-blue text-lg font-semibold text-white"
                >
                  Request A Demo
                </button>
              </div>
            </TabLayout>
          </TabsContent>
          <TabsContent className="mt-1 " value="meeting">
            <TabLayout>
              <div style={{ height: '50vh'}} className=" text-charcoal ">
                
                  {/* Add iframe here */}
                  <iframe
                  height="610"
                  style={{ width: "100%" }}
                  src="https://meetings.hubspot.com/info9419/market-inside-platform-demo?embed=true"
                  
                  allowFullScreen
                >
                  .
                </iframe>
              </div>
            </TabLayout>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default ScheduleDemo
