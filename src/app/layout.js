import { Bubblegum_Sans, Merriweather, Dancing_Script, Smooch_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const bubblegum = Bubblegum_Sans({
  variable: "--font-bubblegum",
  subsets: ["latin"],
  weight: ["400"]
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400","700"]
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["700"]
});

const smooch = Smooch_Sans({
  variable: "--font-smooch",
  subsets: ["latin"],
  weight: ["600"]
});

export const metadata = {
  title: "Bethel Ashram",
  description: "Charity Website for Bethel Ashram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bubblegum.variable} ${merriweather.variable} ${dancing.variable} ${smooch.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
