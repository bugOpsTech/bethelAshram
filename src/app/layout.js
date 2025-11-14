import { Oxanium, Bubblegum_Sans, Merriweather,Bodoni_Moda_SC } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

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
const bodoni = Bodoni_Moda_SC({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["900"]
});

export const metadata = {
  title: "Bethel Ashram",
  description: "Charity Website for Bethel Ashram",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.variable} ${bubblegum.variable} ${merriweather.variable} ${bodoni.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
