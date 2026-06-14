"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const QUIZ_URL = process.env.NEXT_PUBLIC_QUIZ_URL || "https://travelvault-quiz.vercel.app";
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || "#";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 2L3 10v6l11-8v18h2V8l11 8v-6L14 2z"
                fill="#0D6B6B"
              />
            </svg>
            <span className="text-xl font-extrabold text-teal tracking-tight">
              TravelVault
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-sm font-medium text-gray-600 hover:text-teal transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-600 hover:text-teal transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-600 hover:text-teal transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={QUIZ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-teal rounded-full hover:bg-teal-dark transition-all hover:scale-[1.02] shadow-md shadow-teal/20"
            >
              Take the Quiz
            </a>
            <a
              href={APP_STORE_URL}
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal-light transition-all"
            >
              Download App
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-teal"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-up">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/features"
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="block py-2 text-base font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-3 space-y-2">
              <a
                href={QUIZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 text-sm font-bold text-white bg-teal rounded-full"
              >
                Take the Quiz
              </a>
              <a
                href={APP_STORE_URL}
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-teal border-2 border-teal rounded-full"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
