// src/app/auth/page.js
"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "../../components/auth/LoginForm";
import RegisterForm from "../../components/auth/RegisterForm";

export default function AuthPage() {
  const params = useSearchParams();
  const insideRegister = params?.get("insideRegister") === "true";

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/loginBg.jpg')" }}
    >
      <div className="w-full max-w-7xl min-h-[90vh] " >
        <div className="flex flex-col md:flex-row bg-white p-2 rounded-4xl">
          <div className="hidden md:flex md:w-3/4 items-center justify-center bg-cover bg-center bg-no-repeat rounded-4xl" style={{ backgroundImage: "url('/assets/authBg.jpg"}}>
            <div className="text-center">
              <h2 className="mt-4 text-2xl font-semibold text-white">Bethel Ashram</h2>
              <p className="text-sm text-slate-200 mt-2 max-w-xs">
                {insideRegister
                  ? "Join our community and help make a difference."
                  : "Sign in to manage your donations and profile."}
              </p>
            </div>
          </div>

          {/* Right / form */}
          <div className="md:w-1/2 h-[90vh] border border-white/5 p-6 shadow-lg rounded-4xl">
            <div className="flex flex-col items-center justify-center mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-700 mb-2" style={{fontFamily: "var(--font-bubblegum)"}}>
                  Bethel Ashram
                </h3>
                
              </div>
              <div className="text-center text-black" style={{fontFamily: "var(--font-bubblegum)"}}>
                <h3 className="text-2xl font-semibold">
                  {insideRegister ? "SIGN UP" : "SIGN IN"}
                </h3>
                <p className="text-sm mt-1/2">
                  {insideRegister ? "Create your account" : "Welcome back — please login"}
                </p>
              </div>

              <div className="text-center text-black my-7 flex flex-row gap-2" style={{fontFamily: "var(--font-bubblegum)"}}>
                <div className="bg-gray-200 p-2 rounded-full hover:bg-cyan-300 cursor-pointer">
                  <Image src="/assets/apple.svg" width={35} height={30} alt="apple" title="Login with Apple" className=" hover:scale-120 transition-transform duration-300"></Image>
                </div>
                <div className="bg-gray-200 p-2 rounded-full hover:bg-cyan-300 cursor-pointer">
                  <Image src="/assets/google.svg" width={35} height={42} alt="google" title="Login with Google" className="hover:scale-120 transition-transform duration-300"></Image>
                </div>
                <div className="bg-gray-200 p-2 rounded-full hover:bg-cyan-300 cursor-pointer">
                  <Image src="/assets/facebook.svg" width={35} height={42} alt="facebook" title="Login with Facebook" className="hover:scale-120 transition-transform duration-300"></Image>
                </div>
              </div>

              <div className="text-center text-black" style={{fontFamily: "var(--font-bubblegum)"}}>
                <h3 className="text-xl font-semibold">
                  or
                </h3> 
              </div>
              
            </div>

            {/* render proper form component */}
            {insideRegister ? <RegisterForm /> : <LoginForm />}

            {/* Links to switch mode */}
            <div className="mt-4 text-xl text-center" style={{fontFamily: "var(--font-bubblegum)"}}>
              {insideRegister ? (
                <p>
                  Already a user?{" "}
                  <Link href="/auth?insideRegister=false" className="text-cyan-300 underline">
                    Login
                  </Link>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <Link href="/auth?insideRegister=true" className="text-cyan-300 underline">
                    Register
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
