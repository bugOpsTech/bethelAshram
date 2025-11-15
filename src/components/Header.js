"use client";
import Image from "next/image";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { IoMdLogIn } from "react-icons/io";
import menuData from "@/data/menuData";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [persistentKey, setPersistentKey] = useState(null)
  const closeTimerRef = useRef(null)
  const headerRef = useRef(null);

    function handleOpenMenu(key) {
      if(closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      if(persistentKey && persistentKey !== key) {
        setPersistentKey(null)
      }
      setOpenMenu(key);
    }

    function handleScheduleClose(delay = 200) {
      if(persistentKey) return;
      if(closeTimerRef.current) clearTimeout(closeTimerRef.current);
      closeTimerRef.current = setTimeout(()=> {
        setOpenMenu(null);
        closeTimerRef.current = null;
      }, delay);
    }

    function handleCancelClose() {
      if(closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    }

    function togglePersistent(key) {
      if(persistentKey === key) {
        setPersistentKey(null);
        setOpenMenu(null)
        handleCancelClose()
        return;
      }
      setPersistentKey(key);
      setOpenMenu(key)
      handleCancelClose()
    }

    useEffect(() => {
      function handleMenuClose(e) {
        if(!persistentKey) return;
        const headerElement = headerRef.current;
        if(!headerElement) return;
        if(!headerElement.contains(e.target)) {
          setPersistentKey(null);
          setOpenMenu(null);
        }
      }
      document.addEventListener("mousedown", handleMenuClose);
      return () => document.removeEventListener("mousedown", handleMenuClose)
    },[persistentKey])

  return (
    <header ref={headerRef} className="w-full fixed top-2 left-2 h-25 text-white rounded-2xl z-50">
      <div className="container mx-auto flex justify-between px-5 py-2">
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image src="/assets/logo.png" alt="Bethel Ashram" width={60} height={40} />
          <h1 className="text-[25px] sm:text-[29px] md:text-[30px] lg:text-[32px]" style={{ fontFamily: "var(--font-dancing)" }} >
            Bethel Ashram
          </h1>
        </Link>
        {/* CENTER — Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-[15px]" style={{ fontFamily: "var(--font-bodoni)" }} >
          {
            Object.keys(menuData).map((key) => {
              const section = menuData[key];
              return (
                <div key={key} className="relative" onMouseEnter={() => handleOpenMenu(key)}
                onMouseLeave={() => handleScheduleClose(220)}>
                  <button onClick={() => togglePersistent(key)} className={`px-2 py-1 rounded-full hover:shadow-lg hover:scale-120 transition-all duration-200 ${persistentKey === key ? "text-black" : "hover: text-amber-300"}`}>{section.title}</button>
                  {
                    (openMenu == key || persistentKey === key) && (
                      <div className="absolute  -translate-x-1/2 mt-3 bg-white rounded-xl shadow-2xl p-6 w-[90vw] max-w-[700px] text-black z-40" onMouseEnter={handleCancelClose} onMouseLeave={() => handleScheduleClose(200)}>
                        <div className={`grid gap-6 ${section.columns.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                          {
                            section.columns.map((item, i) => (
                              <div key={i}>
                                {
                                  item.heading && (
                                    <h4 className="font-semibold text-lg mb-3">{item.heading}</h4>
                                  )
                                }
                                <ul className="space-y-2">
                                  {
                                    item.items.map((it) => (
                                      <li key={it.href}>
                                        <Link href={it.href} className="block py-2 px-2 rounded hover:bg-gray-600">{it.label}</Link>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    )
                  }
                </div>
              )
            })
          }
          <Link href="/" className=" px-2 py-1 rounded-full hover:shadow-lg hover:scale-120 transition"> Ways to Give </Link>
          <Link href="/" className=" px-2 py-1 rounded-full hover:shadow-lg hover:scale-120 transition"> Get Involved </Link>
        </nav>
        <div className="hidden lg:flex items-center pe-10" style={{ fontFamily: "var(--font-bubblegum)" }}>
          <Link href="/auth?insideRegister=true" className="flex items-center gap- px-5 py-1 text-xl bg-white text-black rounded-full font-medium shadow-xl hover:bg-blue-600 transition hover:text-white">- Login <IoMdLogIn /> </Link>
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
