import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-black text-black hover:bg-black/90 shadow-elegant transition-all duration-300",
        destructive:
          "bg-destructive text-black hover:bg-destructive/90",
        outline:
          "border border-primary/20 bg-white text-black hover:bg-primary hover:text-black transition-all duration-300",
        secondary:
          "bg-secondary text-black hover:bg-secondary/80",
        ghost: "hover:bg-accent text-black hover:text-black",
        link: "text-black underline-offset-4 hover:underline",
        hero: "bg-gradient-hero text-black hover:shadow-aurora transform hover:scale-105 transition-all duration-300 font-semibold",
        cta: "bg-gradient-aurora text-black hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-semibold border border-primary/20",
        aurora: "bg-gradient-primary text-black hover:bg-gradient-aurora hover:shadow-glow transition-all duration-300",
        white: "bg-white text-black border border-primary/20 hover:bg-primary/5 transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
