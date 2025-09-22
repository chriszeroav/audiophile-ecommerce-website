"use client";

import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Button,
  buttonVariants,
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
import {
  MenuIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  XIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const pathname = usePathname();

  return (
    <header
      id="header"
      className={cn(
        "px-4 fixed top-0 w-full z-50",
        pathname !== "/" && "bg-custom-black"
      )}
    >
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
              <DrawerClose asChild>
                <NavLinkItem href="/">HOME</NavLinkItem>
              </DrawerClose>
              <DrawerClose asChild>
                <NavLinkItem href="/categories/headphones">
                  HEADPHONES
                </NavLinkItem>
              </DrawerClose>
              <DrawerClose asChild>
                <NavLinkItem href="/categories/speakers">SPEAKERS</NavLinkItem>
              </DrawerClose>
              <DrawerClose asChild>
                <NavLinkItem href="/categories/earphones">
                  EARPHONES
                </NavLinkItem>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>
        <Link href="/" className="md:flex-1 lg:flex-none">
          <img src="/shared/desktop/logo.svg" alt="Audiophile" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 relative z-50">
          <NavLinkItem href="/">HOME</NavLinkItem>
          <NavLinkItem href="/categories/headphones">HEADPHONES</NavLinkItem>
          <NavLinkItem href="/categories/speakers">SPEAKERS</NavLinkItem>
          <NavLinkItem href="/categories/earphones">EARPHONES</NavLinkItem>
        </nav>

        <Dialog>
          <DialogTrigger className="cursor-pointer">
            <ShoppingCartIcon className="text-custom-white" />
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            center={false}
            className="right-[max(1rem,calc((100%-1110px)/2))] top-28 w-full md:w-[400px] border-none"
          >
            <DialogHeader className="sr-only">
              <DialogTitle>Cart Products</DialogTitle>
              <DialogDescription>
                All products added to your cart will appear here.
              </DialogDescription>
            </DialogHeader>
            <CartContent />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

interface CartContentProps {}

const CartContent: FC<CartContentProps> = () => {
  const { state, clearCart, updateQuantity } = useCart();
  const { totalQuantity, items, totalAmount } = state;

  if (items.length === 0) {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <p className="text-h6 uppercase">Cart ({totalQuantity})</p>
        </div>
        <p className="text-body">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <p className="text-h6 uppercase">Cart ({totalQuantity})</p>
        <Button
          variant="ghost"
          size="none"
          className="underline cursor-pointer text-body"
          onClick={clearCart}
        >
          Remove all
        </Button>
      </div>
      <ul className="flex flex-col gap-6">
        {items.map((item) => (
          <li
            key={item.slug}
            className="flex items-center justify-between gap-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 rounded-lg"
            />
            <div className="flex flex-col truncate flex-1">
              <p className="text-body font-bold text-custom-black truncate">
                {item.name}
              </p>
              <p className="text-body text-[14px] font-bold text-custom-black/50 truncate">
                ${item.price}
              </p>
            </div>
            <div className="flex bg-custom-gray h-8">
              <Button
                onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                className="aspect-square"
                type="button"
                variant="none"
                size="none"
              >
                <MinusIcon className="text-custom-black/25" />
              </Button>
              <input
                readOnly
                value={item.quantity}
                className={cn(
                  "w-[40px] outline-none text-center text-subtitle text-custom-black",
                  "[&::-webkit-outer-spin-button]:appearance-none",
                  "[&::-webkit-inner-spin-button]:appearance-none",
                  "[-moz-appearance:textfield]"
                )}
                type="number"
              />
              <Button
                onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                className="aspect-square"
                type="button"
                variant="none"
                size="none"
              >
                <PlusIcon className="text-custom-black/25" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <p className="text-body uppercase text-custom-black/50">Total</p>
        <p className="text-h6 text-custom-black">${totalAmount}</p>
      </div>

      <DialogPrimitive.Close asChild>
        <Link
          className={buttonVariants({
            className: "text-subtitle uppercase w-full",
          })}
          href="/checkout"
        >
          Checkout
        </Link>
      </DialogPrimitive.Close>
    </div>
  );
};
