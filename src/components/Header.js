"use client";
import Image from "next/image";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-25 bg-[#0278f7] text-white shadow-2xl shadow-cyan-300 rounded-2xl m-2">
      <div className="container mx-auto flex items-center justify-between px-5 py-2">
        <div className="flex items-center space-x-2">
          <Image src="/assets/logo.png" alt="Bethel Ashram" width={60} height={40} className=" cursor-pointer" />
          <h1 className="text-[25px] sm:text-[29px] md:text-[30px] lg:text-[32px] cursor-pointer" style={{ fontFamily: "var(--font-bubblegum)" }} >
            Bethel Ashram
          </h1>
        </div>
        {/* CENTER — Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 text-[15px]" style={{ fontFamily: "var(--font-bodoni)" }} >
          <Link href="/" className="hover:underline hover:text-black"> Who We Are </Link>
          <Link href="/" className="hover:underline hover:text-black"> Our Works </Link>
          <Link href="/" className="hover:underline hover:text-black"> News & Stories </Link>
          <Link href="/" className="hover:underline hover:text-black"> Ways to Give </Link>
          <Link href="/" className="hover:underline hover:text-black"> Get Involved </Link>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/donate" className="px-6 py-2 bg-red-500 text-white rounded-2xl font-semibold shadow-md hover:bg-red-600 transition"> Donate Now </Link>
          <Link href="/auth?insideRegister=true" className="px-6 py-2 bg-white text-[#0278f7] rounded-2xl font-semibold shadow-md hover:bg-gray-200 transition">Login</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" size={24} />
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div className={`lg:hidden fixed top-[86px] left-0 w-full bg-[#00b8d8] rounded-b-2xl shadow-lg transition-all duration-300 overflow-hidden ${  isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col items-center py-4 space-y-3 text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Who We Are
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Our Works
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            News & Stories
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Ways to Give
          </Link>
          <Link href="/" onClick={() => setIsOpen(false)}>
            Get Involved
          </Link>
          <Link href="/donate" onClick={() => setIsOpen(false)} className="font-bold text-red-600">
            Donate Now
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="font-bold">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
