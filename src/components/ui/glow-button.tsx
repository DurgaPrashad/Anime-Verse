
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glowButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(var(--primary),0.5)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[0_0_15px_rgba(var(--secondary),0.5)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "relative bg-gradient-anime text-white before:absolute before:inset-0 before:blur-md before:bg-gradient-anime before:-z-10 hover:scale-[1.03] active:scale-[0.97]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-12 rounded-md px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glowButtonVariants> {}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(glowButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton, glowButtonVariants };
