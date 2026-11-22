import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Rizki Akbar Pradana | portofolio",
    template: "%s | Rizki Akbar Pradana",
  },
  description: "portofolio Rizki Akbar Pradana, siswa SMK calon Junior Web Developer di kelas Industri UBIG",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>

    </html>


  );
}
