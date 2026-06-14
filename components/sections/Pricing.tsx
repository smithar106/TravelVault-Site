"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const QUIZ_URL = process.env.NEXT_PUBLIC_QUIZ_URL || "https://travelvault-quiz.vercel.app";

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="section-padding bg-offwhite">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-sand/10 text-sand text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Less than a single{" "}
            <span className="gradient-text">airport coffee.</span>{" "}
            Per month.
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm border border-gray-100">
            <button
              onClick={() => setAnnual(false)}
              className={"px-6 py-2.5 rounded-full text-sm font-semibold transition-all " + (annual ? "text-gray-500" : "bg-teal text-white shadow-sm")}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={"px-6 py-2.5 rounded-full text-sm font-semibold transition-all " + (annual ? "bg-teal text-white shadow-sm" : "text-gray-500")}
            >
              Annual
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
          >
            <h3 className="text-lg font-extrabold text-navy mb-2">Free</h3>
            <p className="text-sm text-gray-500 mb-6">For trying it out</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-navy">$0</span>
              <span className="text-gray-500 text-sm">/forever</span>
            </div>
            <ul className="space-y-3 mb-8">
              {["1 trip stored", "Basic itinerary building", "Email parsing"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={QUIZ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3 text-sm font-bold text-teal border-2 border-teal rounded-full hover:bg-teal-light transition-all"
            >
              Get Started Free
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-teal rounded-2xl p-8 shadow-xl border-2 border-teal-dark"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-sand text-white text-xs font-bold rounded-full">
              ⭐ MOST POPULAR
            </div>
            <h3 className="text-lg font-extrabold text-white mb-2">Pro</h3>
            <p className="text-sm text-teal-light mb-6">For travelers who want the full brain</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">
                {annual ? "$39.99" : "$5.99"}
              </span>
              <span className="text-teal-light text-sm">
                {annual ? "/year" : "/month"}
              </span>
              {annual && (
                <div className="mt-1">
                  <span className="text-xs text-teal-light line-through">$71.88</span>
                  <span className="text-xs text-sand font-bold ml-2">Save 44%</span>
                </div>
              )}
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unlimited trips",
                "AI neighborhood guides",
                "Live flight alerts",
                "Document vault",
                "Travel profile & identity",
                "Live trip mode",
                "Priority email parsing",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-white/90">
                  <svg className="w-4 h-4 text-sand shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={QUIZ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3 text-sm font-bold text-teal bg-white rounded-full hover:bg-gray-100 transition-all shadow-md"
            >
              Start 7-Day Free Trial
            </a>
            <p className="text-center text-xs text-teal-light mt-4">
              Less than TripIt Pro. More than TripIt Pro.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
