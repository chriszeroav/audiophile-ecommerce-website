import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "Audiophile | %s",
    default: "Audiophile | Home",
  },
  description: "An e-commerce website for high-end audio products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <div className="flex flex-col gap-28">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
