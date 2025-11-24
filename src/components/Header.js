"use client";
import Image from "next/image";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

import menuData from "@/data/menuData";
import { popupVariants, backdropVariants, panelVariants } from "./lib/motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Desktop mega menu states
  const [openMenu, setOpenMenu] = useState(null);
  const [persistentKey, setPersistentKey] = useState(null);
  const closeTimerRef = useRef(null);
  const headerRef = useRef(null);

  // Mobile accordion
  const [openMobileKey, setOpenMobileKey] = useState(null);

  // ---------- DESKTOP MENU FUNCTIONS ----------
  function handleOpenMenu(key) {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);

    if (persistentKey && persistentKey !== key) setPersistentKey(null);

    setOpenMenu(key);
  }

  function handleScheduleClose(delay = 200) {
    if (persistentKey) return;
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);

    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, delay);
  }

  function handleCancelClose() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function togglePersistent(key) {
    if (persistentKey === key) {
      setPersistentKey(null);
      setOpenMenu(null);
      return;
    }
    setPersistentKey(key);
    setOpenMenu(key);
  }

  useEffect(() => {
    function closeOnOutside(e) {
      if (!persistentKey) return;
      if (!headerRef.current.contains(e.target)) {
        setPersistentKey(null);
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, [persistentKey]);

  // ---------- MOBILE FUNCTIONS ----------
  function toggleMobileSection(key) {
    setOpenMobileKey(prev => (prev === key ? null : key));
  }

  const closeMobile = () => {
    setIsOpen(false);
    setOpenMobileKey(null);
  };

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeMobile();
    }
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header ref={headerRef} className="w-full absolute top-0 left-0 h-25 text-white rounded-2xl z-50">
      <div className="container mx-auto flex justify-between px-5 py-2">

        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image src="/assets/logo.png" alt="Bethel Ashram" width={60} height={40} />
          <h1
            className="text-[26px] sm:text-[30px] lg:text-[32px]"
            style={{ fontFamily: "var(--font-dancing)" }}
          >
            Bethel Ashram
          </h1>
        </Link>

        {/* ---------- DESKTOP NAVBAR ---------- */}
        <nav className="hidden lg:flex items-center space-x-8 text-[15px]" style={{fontFamily:"var(--font-bubblegum)"}}>
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
                  className={`px-2 py-1 rounded-full transition-all duration-200 
                    ${persistentKey === key ? "text-blue-600" : "hover:text-blue-600 hover:shadow-lg hover:scale-105"}`}
                >
                  {section.title}
                </button>

                {/* DESKTOP POPUP */}
                <AnimatePresence>
                  {(openMenu === key || persistentKey === key) && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={popupVariants}
                      className="absolute -translate-x-1/2 mt-3 bg-white/90 text-[13px] text-gray-900 rounded-xl shadow-2xl p-6 w-[90vw] max-w-[700px] z-40"
                      onMouseEnter={handleCancelClose}
                      onMouseLeave={() => handleScheduleClose(200)}
                      style={{ left: "50%" }}
                    >
                      <div
                        className={`grid gap-6 ${
                          section.columns.length === 3 ? "grid-cols-3" : "grid-cols-2"
                        }`}
                      >
                        {section.columns.map((col, i) => (
                          <div key={i}>
                            {col.heading && (
                              <h4 className="font-semibold text-lg mb-3 text-blue-600">
                                {col.heading}
                              </h4>
                            )}
                            <ul className="space-y-2">
                              {col.items.map((it) => (
                                <li key={it.href}>
                                  <Link href={it.href} className="block py-2 px-2 rounded hover:bg-gray-100">
                                    {it.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <Link href="/" className="px-2 py-1 rounded-full hover:text-blue-600 transition">
            Ways to Give
          </Link>
          <Link href="/" className="px-2 py-1 rounded-full hover:text-blue-600 transition">
            Get Involved
          </Link>
        </nav>

        {/* LOGIN BUTTON */}
        <div className="hidden lg:flex items-center pe-10" style={{ fontFamily: "var(--font-bubblegum)" }}>
          <Link
            href="/auth?insideRegister=true"
            className="flex items-center gap-1 px-5 py-1 text-xl bg-white text-black rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition"
          >
            - Donate Now <IoMdLogIn />
          </Link>
        </div>

        {/* ---------- MOBILE HAMBURGER ---------- */}
        <div className="lg:hidden flex items-center">
          <button aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" size={24} />
          </button>
        </div>
      </div>

      {/* ---------- MOBILE SLIDE-OVER MENU ---------- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              onClick={closeMobile}
            />

            {/* PANEL */}
            <motion.aside
              className="fixed top-0 right-0 bottom-0 bg-black w-[85vw] max-w-[360px] z-50 shadow-2xl p-6 overflow-y-auto"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* TOP LOGO */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image src="/assets/logo.png" alt="logo" width={45} height={45} />
                  <span className="font-semibold text-lg">Bethel Ashram</span>
                </div>
                <button onClick={closeMobile} className="text-2xl">×</button>
              </div>

              {/* MOBILE MENU ACCORDION */}
              <nav className="flex flex-col space-y-3">
                {Object.keys(menuData).map((key) => {
                  const section = menuData[key];
                  const isOpenSection = openMobileKey === key;

                  return (
                    <div key={key} className="border-b pb-3">
                      <button
                        className="w-full flex justify-between items-center text-lg font-medium py-2"
                        onClick={() => toggleMobileSection(key)}
                      >
                        {section.title}
                        <span className="text-xl">{isOpenSection ? "−" : "+"}</span>
                      </button>

                      <AnimatePresence>
                        {isOpenSection && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-3 mt-2 space-y-3"
                          >
                            {section.columns.map((col, i) => (
                              <div key={i}>
                                {col.heading && (
                                  <div className="text-sm font-semibold text-gray-600 mb-1">
                                    {col.heading}
                                  </div>
                                )}

                                <div className="flex flex-col">
                                  {col.items.map((it) => (
                                    <Link
                                      key={it.href}
                                      href={it.href}
                                      onClick={closeMobile}
                                      className="py-2 px-2 rounded hover:bg-gray-200"
                                    >
                                      {it.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Buttons */}
                <Link
                  href="/donate"
                  onClick={closeMobile}
                  className="mt-4 block px-4 py-2 bg-green-600 text-white text-center rounded-full"
                >
                  Donate Now
                </Link>

                <Link
                  href="/auth?insideRegister=false"
                  onClick={closeMobile}
                  className="mt-2 block px-4 py-2 border text-center rounded-full"
                >
                  Login
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
