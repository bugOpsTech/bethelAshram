"use client";

import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  return (
    <>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-3 py-2 rounded-md bg-white/70 border border-black "
              autoComplete="name"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full px-3 py-2 rounded-md bg-white/70 border border-black "
              autoComplete="tel"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-3 py-2 rounded-md bg-white/70 border border-black "
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Password*"
              className="w-full px-3 py-2 rounded-md bg-white/70 border border-black "
              autoComplete="new-password"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-30 py-2 rounded-4xl bg-cyan-700 text-white font-semibold hover:bg-cyan-600 transition"
          >Register
          </button>
        </div>
      </form>
    </>
  );
}
