"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <section
        className="w-full h-screen relative flex items-center bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/assets/homeBg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl text-center md:text-left md:ps-10">
            <div className="text-sm md:text-lg uppercase tracking-widest text-blue-600 mb-1">
              Bethel Ashram
            </div>

            <h1
              className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight"
              style={{ fontFamily: "var(--font-bubblegum)" }}
            >
              FOLLOWING <span className="text-white">JESUS</span>
              <br />
              WHEREVER WE ARE
            </h1>

            <p className="mt-2 text-blue-600 text-lg sm:text-base md:text-xl">
              Let not your left hand know what your right hand is doing.
            </p>

            <p className="flex justify-end text-blue-600 me-30 text-lg md:text-xl">
              Matthew 6:3 ~
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
          style={{ fontFamily: "var(--font-bubblegum)" }}
        >
          <Link
            href="/about"
            className="flex items-center gap-2 px-6 py-2 rounded-full text-blue-600 font-medium shadow-lg hover:scale-105 transition bg-white/10 backdrop-blur-sm"
          >
            Explore <IoIosArrowDown size={20} />
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="w-full py-10 bg-stone-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div className="flex flex-col items-center space-y-8">
              <div className="text-center lg:text-left max-w-xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2" style={{ fontFamily: "var(--font-dancing)" }}>
                  Welcome To Bethel Ashram
                </h2>
                <p className="text-black leading-relaxed text-[18px] lg:text-xl">
                  The most luxurious, affordable, and ready-to-move-in rehab
                  centre in South Africa. Congratulations. You have taken the
                  first step by exploring this website. Making that phone call
                  to get help will be your loved one's awesome addiction
                  and, more importantly, the start of your own new life in
                  addiction's absence.
                </p>
              </div>
              <div className="w-full flex justify-center">
                <div className="relative max-w-md w-full group cursor-pointer overflow-hidden rounded-xl shadow-xl shadow-blue-300">
                  <Image
                    src="/assets/help1.jpg"
                    alt="People finding peace and healing"
                    width={600}
                    height={700}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Text shown on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-2xl font-semibold tracking-wide">
                      Bethel Ashram Aluva
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-center lg:items-start space-y-8 lg:mt-0">
              <div className="w-full flex justify-center">
                <div className="relative max-w-md w-full group cursor-pointer overflow-hidden rounded-xl shadow-xl shadow-blue-300">
                  <Image
                    src="/assets/help2.jpg"
                    alt="Bethel Ashram facility"
                    width={600}
                    height={500}
                    className="transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Text shown on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-2xl font-semibold tracking-wide text-center">
                      Bethel Ashram Ottupara
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left max-w-xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2" style={{ fontFamily: "var(--font-dancing)" }}>
                  Mission Bethel Garden
                </h2>
                <p className="text-black leading-relaxed text-[18px] lg:text-xl">
                  Instead of asking “Why the addiction?”, we ask a deeper
                  question: “What pain are you trying to escape?” Healing begins
                  when we address the root — not just the symptom. This
                  Christ-centered, compassionate approach restores lives from
                  the inside out.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href={"/bethelashram"}
            className="bg-blue-600 px-5 py-1 text-lg md:text-2xl rounded-2xl hover:bg-black hover:text-blue-600 transition"
          >
            More About Us
          </Link>
        </div>
      </section>

      {/* mission */}
      <section
        className="w-full py-12 sm:py-16 bg-center"
        style={{ backgroundImage: "url('/assets/missionBg.jpg')" }}
      >
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* LEFT: blue box (responsive) */}
              <div className="lg:col-span-1 lg:ps-15 flex items-center justify-center bg-gray-50">
                <Image
                  src="/assets/bethelgarden.jpg"
                  alt="Bethel Ashram facility"
                  width={350}
                  height={250}
                  className="mt-5 lg:mt-0"
                  priority
                />
              </div>

              {/* RIGHT: content */}
              <div className="lg:col-span-2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm text-gray-500 uppercase tracking-wide">
                    Bethel Garden
                  </h3>

                  <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                    Our Mission
                  </h2>

                  <p className="mt-4 text-gray-700 leading-relaxed text-base sm:text-lg md:text-lg">
                    Instead of asking “Why the addiction?”, we ask a deeper
                    question: “What pain are you trying to escape?” Healing
                    begins when we address the root — not just the symptom. Our
                    compassionate, person-centered approach helps restore lives
                    from the inside out through care, training, and steady
                    support.
                  </p>
                </div>

                {/* bottom area: small visual + CTA + features */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  {/* visual + CTA (col 1) */}
                  <div className="flex flex-col items-center md:items-start gap-4">
                    {/* blue box visual (replaces image) */}
                    <div className="w-40 h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-lg overflow-hidden flex items-center justify-center bg-blue-900 shadow-md">
                      <div className="text-center px-2">
                        <span className="block text-white font-extrabold text-lg sm:text-2xl md:text-2xl leading-tight">
                          We Provide
                        </span>
                        <small className="block text-white/90 mt-1 text-xs sm:text-sm">
                          Compassion · Care · Support
                        </small>
                      </div>
                    </div>

                    <Link
                      href="/bethelashram"
                      className="mt-2 inline-block px-5 py-2 bg-blue-900 text-white rounded-full shadow hover:bg-blue-700 transition text-sm sm:text-base"
                    >
                      Read More
                    </Link>
                  </div>

                  {/* features grid (col 2-3) */}
                  <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Home for the Homeless",
                        desc: "Safe shelter and daily care.",
                      },
                      {
                        title: "Rehabilitation",
                        desc: "Counseling and recovery programs.",
                      },
                      {
                        title: "Educational Help",
                        desc: "Empowerment through learning.",
                      },
                      {
                        title: "Community Support",
                        desc: "Family and community reintegration.",
                      },
                    ].map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="shrink-0 bg-blue-900 rounded-full p-3 flex items-center justify-center">
                          <Image
                            src="/assets/apple.svg"
                            alt="icon"
                            width={28}
                            height={28}
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                            {f.title}
                          </h4>
                          <p className="text-sm text-gray-600">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end right two cols */}
            </div>
          </div>
        </div>
      </section>

      {/* impact stories */}
      <section className="w-full bg-stone-300 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Impact stories
          </h2>

          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            {/* Image column */}
            <div className="lg:w-1/3 flex items-center justify-center">
              <div className="w-full max-w-md">
                <Image
                  src="/assets/wedding.jpg"
                  alt="Impact story visual"
                  width={1200}
                  height={800}
                  className="w-full h-[280px] sm:h-80 md:h-[360px] lg:h-auto object-cover rounded-lg shadow-md"
                  priority
                />
              </div>
            </div>

            {/* Text column */}
            <div className="lg:w-2/3 flex flex-col justify-center p-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-4 text-center lg:text-left">
                When Families Couldn't… We Did — 28 Times.
              </h3>

              <p className="text-base sm:text-lg text-gray-800 mb-6 text-center lg:text-left leading-relaxed">
                Bethel Ashram has supported couples abandoned by circumstances, giving them the gift of a dignified union.Because everyone deserves a chance at love, respect, and a new beginning....
              </p>

              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/stories"
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* campaign */}
      <section className="w-full bg-stone-300 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Campaigns
          </h2>

          {/* Campaign Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
              <Image
                src="/assets/loginBg.jpg"
                alt="Campaign"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Mission: Feed the Hungry
                </h3>

                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-green-600">
                      ₹45,000
                    </span>{" "}
                    raised
                  </p>
                  <p className="text-sm text-gray-600">
                    Target: <span className="font-semibold">₹1,00,000</span>
                  </p>
                </div>

                <Link
                  href="/donate"
                  className="mt-4 inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Donate Now
                </Link>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
              <Image
                src="/assets/help1.jpg"
                alt="Campaign"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Mission: Shelter for Homeless
                </h3>

                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-green-600">
                      ₹72,500
                    </span>{" "}
                    raised
                  </p>
                  <p className="text-sm text-gray-600">
                    Target: <span className="font-semibold">₹1,50,000</span>
                  </p>
                </div>

                <Link
                  href="/donate"
                  className="mt-4 inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Donate Now
                </Link>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
              <Image
                src="/assets/help2.jpg"
                alt="Campaign"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Mission: Education Support
                </h3>

                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-green-600">
                      ₹30,200
                    </span>{" "}
                    raised
                  </p>
                  <p className="text-sm text-gray-600">
                    Target: <span className="font-semibold">₹80,000</span>
                  </p>
                </div>

                <Link
                  href="/donate"
                  className="mt-4 inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* founders */}
      <section
        className="w-full min-h-[90vh] flex flex-col items-center py-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/founderBg.jpg')" }}
      >
        <h1 className="text-3xl text-center text-white">Our Founders</h1>
        <div className="flex w-full flex-col lg:flex-row mb-5">
          <div className="w-full min-h-[80vh] flex justify-center items-center flex-col">
            <Image
              src={"/assets/founder1.jpg"}
              alt="Sr. Saramma"
              width={200}
              height={200}
              className="rounded-full border-6 border-white"
            ></Image>
            <h1 className="text-xl text-white mt-2 text-center">
              Sr. Saramma (1901 - 1998)
            </h1>
            <p className="px-25 py-2 text-[18px] text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
              rem cum quas doloremque laborum exercitationem minus
              necessitatibus, repellat tempore neque eum nisi alias eius
              eligendi? Similique eum minus reprehenderit.{" "}
            </p>
            <span className="px-10 py-0.5 bg-blue-600 rounded-2xl text-lg cursor-pointer hover:bg-black hover:text-white hover:border hover:border-white">
              Read More
            </span>
          </div>
          <div className="w-full min-h-[90vh] flex justify-center items-center flex-col">
            <Image
              src={"/assets/founder2.jpg"}
              alt="Sr. Saramma"
              width={200}
              height={200}
              className="rounded-full border-6 border-white"
            ></Image>
            <h1 className="text-xl text-white mt-2 text-center">Ms. East (1901 - 1998)</h1>
            <p className="px-25 py-2 text-[18px] text-white text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ut
              rem cum quas doloremque laborum exercitationem minus
              necessitatibus, repellat tempore neque eum nisi alias eius
              eligendi? Similique eum minus reprehenderit.{" "}
            </p>
            <span className="px-10 py-0.5 bg-blue-600 rounded-2xl text-lg cursor-pointer hover:bg-black hover:text-white hover:border hover:border-white">
              Read More
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
