import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sessionwrapper from "@/components/Sessionwrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai please",
  description: "This website is a fundin website for welfare organisations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`h-full flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sessionwrapper>
          <Navbar/>
        {children}
          <div className="min-h-screen inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] text-pink-400">
            </div>
          </div>
          <Footer/>
        </Sessionwrapper>

      </body>
    </html>
  );
}
