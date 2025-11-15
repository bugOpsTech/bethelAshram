"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Landing() {
  return (
    <>
      <section
        className="w-full h-screen relative flex items-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/assets/jesus.png')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* main content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl text-center md:text-left md:ps-10">
            <div className="text-sm uppercase tracking-widest text-white/70 mb-1">
              Bethel Ashram
            </div>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "var(--font-bubblegum)" }}
            >
              FOLLOWING <span className="text-blue-500">JESUS</span>
              <br />
              WHEREVER WE ARE
            </h1>

            <p className="mt-2 text-white/80 text-sm sm:text-base md:text-lg">
              Let not your left hand know what your right hand is doing.
            </p>

            <p className="flex justify-end text-white/80 me-30">Matthew 6:3 ~</p>
          </div>
        </div>

        {/* Explore Button at Bottom Center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20" style={{ fontFamily: "var(--font-bubblegum)" }}>
          <Link
            href="/about"
            className="flex items-center gap-2 px-6 py-2 rounded-full text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Explore <IoIosArrowDown size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
