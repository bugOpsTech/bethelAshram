import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fff1e5] text-gray-800 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Footer Links */}
        <ul className="flex flex-col md:flex-row gap-4 text-sm font-medium mb-8">
          <li><a href="/about" className="hover:text-yellow-600 transition">About</a></li>
          <li><a href="/faq" className="hover:text-yellow-600 transition">FAQ</a></li>
          <li><a href="/contact" className="hover:text-yellow-600 transition">Contact</a></li>
          <li><a href="/donate" className="hover:text-yellow-600 transition">Support Us</a></li>
          <li><a href="/privacy" className="hover:text-yellow-600 transition">Privacy Policy</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Credits */}
        <div className="text-xs text-gray-600 space-y-1">
          <p>© {new Date().getFullYear()} Bethel Ashram. All Rights Reserved.</p>
          <p>
            Site Designed & Developed by{" "}
            <span className="font-semibold text-yellow-700">Bugops</span>
          </p>
          <p className="text-gray-500">
            Terms & Conditions | Privacy Policy | Legal Notice
          </p>
        </div>

        {/* Payment Icons (Optional Section) */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-80">
          <img src="/visa.svg" alt="Visa" className="h-6" />
          <img src="/paypal.svg" alt="PayPal" className="h-6" />
          <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
          <img src="/razorpay.svg" alt="Razorpay" className="h-6" />
        </div>
      </div>
    </footer>
  );
}