"use-client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ElementType
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, Icon, ...props }, ref) => {
    return (
      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Icon className="mr-2 h-4 w-4" />
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md bg-gray-100 px-3 py-2 text-right text-lg font-bold text-secondary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
