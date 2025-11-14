
"use client";

import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();


  return (
    <>
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Email*"
            className="w-full px-3 py-2 rounded-xl bg-white/70 border border-black"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Password*"
            className="w-full px-3 py-2 rounded-xl bg-white/70 border border-black"
            autoComplete="current-password"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-30 py-2 rounded-4xl bg-cyan-700 text-white font-semibold hover:bg-cyan-600 transition"
          >Login
          </button>
        </div>
      </form>
    </>
  );
}
