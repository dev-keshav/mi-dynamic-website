import { cn } from '@/lib/utils'
import React from 'react'

const ListItem = React.forwardRef<
    React.ElementRef<"li">,
    React.ComponentPropsWithoutRef<"li">
>(({ className, children, ...props }) => {
    return (
        <li
            className={cn(
                "block cursor-pointer select-none space-y-1 rounded-md p-2 px-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
            )}
            {...props}
        >
            <div className="text-sm font-medium leading-none">{children}</div>
        </li>

    )
})
ListItem.displayName = "ListItem"

export default ListItem
