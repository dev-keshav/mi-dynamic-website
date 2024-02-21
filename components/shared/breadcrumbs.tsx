import Link from "next/link"
import { Icons } from "../icons"
import { cn } from "@/lib/utils"

interface IBreadcrumbItem {
    title: string
    href: string
    current?: boolean
}
interface IBreadcrumbsProps {
    items?: IBreadcrumbItem[]
}
export default function Breadcrumbs({ items }: IBreadcrumbsProps) {
    return (
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
            {items?.map((item, index) => (
                <BreadcrumbItem key={index} item={item} isLast={index + 1 === items.length} />
            ))}

        </div>
    )
}

const BreadcrumbItem = ({ item, isLast }: { item: IBreadcrumbItem, isLast?: boolean }) => {
    return (
        <>
            <Link href={item.href} className={cn("font-medium text-foreground hover:text-primary", { "text-primary": item.current })}>
                {item.title}
            </Link>
            {!isLast && (
                <Icons.chevronRight className="h-4 w-4 text-foreground" />
            )}
        </>
    )
}

