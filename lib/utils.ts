import { clsx, type ClassValue } from "clsx"
import { ReadonlyURLSearchParams } from "next/dist/client/components/navigation"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeString(input: string): string {
  if (input.length === 0) {
    return input
  }

  const firstLetter = input[0].toUpperCase()
  const restOfTheString = input.slice(1)

  return firstLetter + restOfTheString
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`

  return `${pathname}${queryString}`
}

export const changePathParam = (pathname: string, param: string) =>
  pathname.split("/").slice(0, -1).join("/") + `/${param}`

export const handelLocation = (
  param: string,
  pathname: string,
  searchParams: ReadonlyURLSearchParams
) => {
  const optionSearchParams = new URLSearchParams(searchParams.toString())
  return createUrl(changePathParam(pathname, param), optionSearchParams)
}
