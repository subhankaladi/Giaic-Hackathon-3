"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const InputUnderline = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "w-full border-0 border-b border-gray-200 bg-transparent pb-2 pt-4 text-base placeholder:text-transparent focus:border-gray-900 focus:outline-none focus:ring-0",
            className
          )}
          placeholder={label}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false)
            setHasValue(e.target.value !== "")
          }}
          onChange={(e) => setHasValue(e.target.value !== "")}
          ref={ref}
          {...props}
        />
        <span
          className={cn(
            "pointer-events-none absolute left-0 top-4 text-gray-500 transition-all duration-200",
            (isFocused || hasValue) && "-translate-y-3 text-sm text-gray-600"
          )}
        >
          {label}
        </span>
      </div>
    )
  }
)
InputUnderline.displayName = "InputUnderline"

export { InputUnderline }

