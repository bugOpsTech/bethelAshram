"use client";

import Image from "next/image";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { useState, useRef, useEffect } from "react";
import { IoMdLogIn } from "react-icons/io";
import menuData from "@/data/menuData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // mobile drawer
  const [openMenu, setOpenMenu] = useState(null); // currently open mega menu (hover)
  const [persistentKey, setPersistentKey] = useState(null); // clicked sticky menu
  const closeTimerRef = useRef(null);
  const headerRef = useRef(null);

  /* ------------------------------------------------------------ */
  /*              HOVER OPEN — FUNCTION FORMAT                    */
  /* ------------------------------------------------------------ */
  function handleOpenMenu(key) {
    // cancel any pending close
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    // If there is a persistent (clicked) menu and user now hovers a different menu,
    // clear the persistent state so the hovered menu can take over.
    if (persistentKey && persistentKey !== key) {
      setPersistentKey(null);
    }

    setOpenMenu(key);
  }

  /* ------------------------------------------------------------ */
  /*              DELAYED CLOSE — FUNCTION FORMAT                 */
  /* ------------------------------------------------------------ */
  function handleScheduleClose(delay = 200) {
    if (persistentKey) return; // do NOT close if menu is clicked open
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);

    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, delay);
  }

  /* ------------------------------------------------------------ */
  /*                CANCEL CLOSE — FUNCTION FORMAT                */
  /* ------------------------------------------------------------ */
  function handleCancelClose() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  /* ------------------------------------------------------------ */
  /*         CLICK TO STICK/UNSTICK — FUNCTION FORMAT             */
  /* ------------------------------------------------------------ */
  function togglePersistent(key) {
    // Unstick if clicking again
    if (persistentKey === key) {
      setPersistentKey(null);
      setOpenMenu(null);
      handleCancelClose();
      return;
    }

    // Stick new key
    setPersistentKey(key);
    setOpenMenu(key);
    handleCancelClose();
  }

  /* ------------------------------------------------------------ */
  /*     CLOSE ON OUTSIDE CLICK — FUNCTION FORMAT + useEffect     */
  /* ------------------------------------------------------------ */
  useEffect(() => {
    function handleMenuClose(e) {
      if (!persistentKey) return;

      const headerEl = headerRef.current;
      if (!headerEl) return;

      if (!headerEl.contains(e.target)) {
        setPersistentKey(null);
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleMenuClose);
    return () => document.removeEventListener("mousedown", handleMenuClose);
  }, [persistentKey]);

  /* ------------------------------------------------------------ */
  /*                          RENDER HTML                         */
  /* ------------------------------------------------------------ */

  return (
    <header ref={headerRef} className="w-full fixed top-4 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="bg-[#2b1b1b]/80 backdrop-blur-md rounded-xl shadow-xl">
          <div className="flex items-center justify-between px-5 py-3">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <Image src="/assets/logo.png" width={60} height={40} alt="Bethel Ashram" />
              <span
                className="text-lg md:text-xl font-semibold text-white"
                style={{ fontFamily: "var(--font-dancing)" }}
              >
                Bethel Ashram
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-8 text-white">

              {/* -------- AUTO-GENERATED SECTIONS -------- */}
              {Object.keys(menuData).map((key) => {
                const section = menuData[key];

                return (
                  <div
                    key={key}
                    className="relative"
                    onMouseEnter={() => handleOpenMenu(key)}
                    onMouseLeave={() => handleScheduleClose(220)}
                  >
                    <button
                      onClick={() => togglePersistent(key)}
                      className={`px-3 py-1 rounded-full transition-all duration-200 
                        ${persistentKey === key ? "bg-white text-black" : "hover:bg-white hover:text-black"}`}
                    >
                      {section.title}
                    </button>

                    {(openMenu === key || persistentKey === key) && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-2xl p-6 w-[90vw] max-w-[1100px] text-black z-40"
                        onMouseEnter={handleCancelClose}
                        onMouseLeave={() => handleScheduleClose(200)}
                      >
                        <div className={`grid gap-6 ${section.columns.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                          {section.columns.map((col, i) => (
                            <div key={i}>
                              {col.heading && (
                                <h4 className="font-semibold text-lg mb-3">{col.heading}</h4>
                              )}
                              <ul className="space-y-2">
                                {col.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={item.href}
                                      className="block py-1 px-2 rounded hover:bg-gray-100"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Static pages */}
              <Link href="/news" className="px-3 py-1 rounded-full hover:bg-white hover:text-black">
                News
              </Link>

              <Link href="/contact" className="px-3 py-1 rounded-full hover:bg-white hover:text-black">
                Contact
              </Link>
            </nav>

            {/* RIGHT - Donate / Login */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/donate" className="px-4 py-2 bg-green-500 rounded-full shadow text-white">
                Donate Now
              </Link>

              <Link
                href="/auth?insideRegister=false"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full shadow"
              >
                Login <IoMdLogIn />
              </Link>
            </div>

            {/* MOBILE ICON */}
            <div className="lg:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`lg:hidden fixed top-[86px] left-0 w-full bg-[#00b8d8] rounded-b-2xl shadow-lg 
        transition-all duration-300 overflow-hidden 
        ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col items-center py-4 space-y-3 text-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>Who We Are</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Our Works</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>News & Stories</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Ways to Give</Link>
          <Link href="/" onClick={() => setIsOpen(false)}>Get Involved</Link>
          <Link href="/donate" className="font-bold text-red-600" onClick={() => setIsOpen(false)}>
            Donate Now
          </Link>
          <Link href="/auth?insideRegister=false" className="font-bold" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
