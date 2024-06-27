import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "gs-awds-utils";
import { ComponentSize, ComponentVariant } from "./types";

const buttonVariants = cva(
  "button inline-flex items-center justify-center space-x-1 outline-none transition-all whitespace-nowrap shrink-0 hover:opacity-70 focus:ring-2 focus:ring-brand-primary focus:ring-offset-1 group-has-[.button]/button:ring-offset-0 focus:z-20 disabled:text-content-disabled disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid: "text-content-secondary bg-background-secondary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "text-content-secondary border border-border-secondary focus:border-transparent active:border-transparent",
        ghost: "text-content-secondary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      primary: {
        true: "",
      },
      badge: {
        true: "text-brand-sunsetPink",
      },
      circle: {
        true: "rounded-full",
        false:
          "rounded-md group-has-[.button]/button:rounded-none group-has-[.button]/button:first-of-type:rounded-l-md group-has-[.button]/button:last-of-type:rounded-r-md focus:!rounded-md active:!rounded-md",
      },
      link: {
        true: "underline underline-offset-2",
      },
      size: {
        mini: "px-2 py-0.5 text-label4 min-h-[18px] leading-5",
        small: "px-3 py-1.5 text-label3",
        medium: "px-[14px] py-2 text-label2",
        default: "px-4 py-2.5 text-label2",
        large: "px-4 py-3 text-label1",
        icon: "p-1",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        primary: true,
        className: "text-content-basic bg-brand-primary",
      },
      {
        variant: "outline",
        primary: true,
        className:
          "text-brand-primary border border-brand-primary focus:border-transparent active:border-transparent",
      },
      {
        variant: "ghost",
        primary: true,
        className: "text-brand-primary",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  size?: ComponentSize;
  asChild?: boolean;
  primary?: boolean;
  variant?: ComponentVariant;
  badge?: boolean;
  circle?: boolean;
  link?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      badge = false,
      circle = false,
      primary = false,
      link = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
            badge,
            circle,
            primary,
            link,
          })
        )}
        ref={ref}
        {...props}
      >
        <Slottable>{children}</Slottable>
        {badge && (
          <span className="bg-brand-sunsetPink absolute right-0.5 top-0.5 h-1 w-1 rounded-full" />
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

const ButtonGroup = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => {
  const classnames = cn(
    "inline-flex items-stretch -space-x-px group/button px-px",
    className
  );
  return <div className={classnames}>{children}</div>;
};
ButtonGroup.displayName = "ButtonGroup";

export { Button, buttonVariants, ButtonGroup };
