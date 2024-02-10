import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/main/Footer"
import StarsCanvas from "../components/main/StarBackground"
import Navbar from "../components/main/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Fusions",
  description: "This is the website for the Tech Fusion Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <StarsCanvas/>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
