import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  NavLinkItem,
} from "@/components/ui";
import { MenuIcon, ShoppingCartIcon, XIcon } from "lucide-react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header id="header" className="px-4 fixed top-0 w-full z-20">
      <div
        className={cn(
          "max-w-custom mx-auto h-24",
          "flex items-center justify-between gap-5",
          "border-b border-custom-white/20"
        )}
      >
        <Drawer direction="left">
          <DrawerTrigger className="lg:hidden cursor-pointer">
            <MenuIcon className="text-custom-white" />
          </DrawerTrigger>
          <DrawerContent className="bg-custom-black-alt w-3/4 ">
            <DrawerHeader className="sr-only">
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>Menu options</DrawerDescription>
            </DrawerHeader>

            <DrawerClose className="absolute top-6 right-6 cursor-pointer">
              <XIcon className="text-custom-white" />
            </DrawerClose>

            <div className="min-h-dvh flex flex-col justify-center gap-8 text-center">
              <NavLinkItem href="/">HOME</NavLinkItem>
              <NavLinkItem href="/headphones">HEADPHONES</NavLinkItem>
              <NavLinkItem href="/speakers">SPEAKERS</NavLinkItem>
              <NavLinkItem href="/earphones">EARPHONES</NavLinkItem>
            </div>
          </DrawerContent>
        </Drawer>
        <Link href="/" className="md:flex-1 lg:flex-none">
          <img src="/shared/desktop/logo.svg" alt="Audiophile" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <NavLinkItem href="/">HOME</NavLinkItem>
          <NavLinkItem href="/headphones">HEADPHONES</NavLinkItem>
          <NavLinkItem href="/speakers">SPEAKERS</NavLinkItem>
          <NavLinkItem href="/earphones">EARPHONES</NavLinkItem>
        </nav>

        <Dialog>
          <DialogTrigger className="cursor-pointer">
            <ShoppingCartIcon className="text-custom-white" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};
