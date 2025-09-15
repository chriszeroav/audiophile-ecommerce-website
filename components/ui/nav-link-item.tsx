import React, { FC, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavLinkItemProps extends PropsWithChildren {
  href: string;
  className?: string;
}

export const NavLinkItem: FC<NavLinkItemProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      className={cn(
        "text-custom-white hover:text-custom-primary",
        "text-h6 md:text-subtitle transition-colors duration-300",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
