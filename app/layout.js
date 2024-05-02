import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";


export const metadata = {
  title: "Torrent Converter App",
  description: " convert torrent files into various formats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        
        {children}
        </body>
    </html>
  );
}
