// components/BankThreeCol.jsx
"use client";

import Link from "next/link";
import bankData from "@/data/bankData";
import Image from "next/image";
import board from "@/data/boardMembers";

export default function BankDetails({
}) {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-2">
          <h1 className="text-2xl">Our Banking Details</h1>
          <p className="text-sm text-gray-600">Contribution only through</p>
          <h2 className="text-3xl font-bold text-pink-600">Trust Bank Account</h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 w-full border-b md:border-b-0 md:border-r border-gray-100 p-6 flex items-center justify-center">
              <div className="max-w-[300px] w-full">
                <Image src={"/assets/qr.jpg"} alt="qr" width={300} height={200}></Image>
              </div>
            </div>

            {/* RIGHT: two stacked cards */}
            <div className="md:w-2/3 w-full p-4">
              <div className="flex flex-col gap-4">
                {bankData.map((b, i) => (
                  <article
                    key={b.id}
                    className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden"
                  >
                    {/* top pill */}
                    <div className="px-4 py-2 bg-pink-50">
                      <div className="text-lg md:text-xl lg:text-2xl text-pink-700 font-semibold text-center">{b.topLabel}</div>
                    </div>

                    {/* content */}
                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-4 text-lg md:text-xl lg:text-2xl">
                      <div className="md:w-1/3 flex items-start md:items-center justify-center">
                        <Image src={`${b.img}`} alt="bank image" width={100} height={100} ></Image>
                      </div>

                      <div className="flex-1">
                        <h3 className=" font-semibold text-gray-800">{b.bankName}</h3>
                        <h3 className=" font-semibold text-gray-800">{b.title}</h3>

                        <dl className="mt-3 text-sm text-gray-700 space-y-2">
                          <div className="flex gap-3 text-sm md:text-lg lg:text-xl">
                            <dt className="w-20 text-gray-500">{b.accountLabel}:</dt>
                            <dd className="font-medium break-all">{b.account}</dd>
                          </div>

                          {b.ifsc && (
                            <div className="flex gap-3 text-sm md:text-lg lg:text-xl">
                              <dt className="w-20 text-gray-500">IFSC:</dt>
                              <dd className="break-all">{b.ifsc}</dd>
                            </div>
                          )}

                          {b.swift && (
                            <div className="flex gap-3 text-sm md:text-lg lg:text-xl">
                              <dt className="w-20 text-gray-500">SWIFT:</dt>
                              <dd className="break-all">{b.swift}</dd>
                            </div>
                          )}

                          <div className="flex gap-3 text-sm md:text-lg lg:text-xl">
                            <dt className="w-20 text-gray-500">Address:</dt>
                            <dd className="text-gray-600">{b.address}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm lg:text-lg">
                      <span className=" text-gray-500 italic">Verified trust account</span>
                      <Link href="/contact" className="text-sm text-pink-600 underline">Contact</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-500 mt-4">
          Contribution made to the trust covers income tax protection (where applicable). Please request a receipt after donating.
        </p>
      </div>
      <div className="mt-10 w-full flex flex-col items-center justify-center">
        <h1 className=" relative text-xl lg:text-3xl bg-pink-600 text-center mt-2 -my-3 px-5 py-1 rounded-3xl text-white border-4 border-white">Governing Board Members</h1>
        <div className="w-full max-w-7xl bg-pink-800 text-white">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {
                    board.map((item, index) =>(
                        <div key={index} className="w-full flex-col md:flex-row">
                            <div className="flex flex-col items-center p-6">
                                <Image src={`${item.img}`} alt="profile pic" width={200} height={200} className="border-4 border-white" />
                                <h1 className="mt-2 text-lg lg:text-xl">{item.name}</h1>
                                <h2 className="">{item.role}</h2>
                            </div> 
                        </div>
                    ))
                } 
            </div>
           
        </div>
      </div>
    </section>
  );
}
