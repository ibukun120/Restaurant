import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Notification from "@/components/Notifications";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Massimo",
  description: "Experience the epitome of Italian luxury and sophistication with Massimo. Discover our curated collection of high-end fashion, exquisite design, and refined lifestyle experiences. From bespoke clothing to elegant accessories, our brand embodies the essence of Italian style and craftsmanship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Notification/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
