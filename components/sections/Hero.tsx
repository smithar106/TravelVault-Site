"use client";

import { motion } from "framer-motion";

const QUIZ_URL = process.env.NEXT_PUBLIC_QUIZ_URL || "https://travelvault-quiz.vercel.app";
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL || "#";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const bookings = [
  { type: "FLIGHT", provider: "United Airlines", detail: "UA 837 · SFO → NRT", color: "border-l-teal" },
  { type: "HOTEL", provider: "Park Hyatt Tokyo", detail: "Check-in May 12 · 3 nights", color: "border-l-sand" },
  { type: "CAR", provider: "Hertz", detail: "Pickup May 12 · Shinjuku", color: "border-l-emerald-400" },
  { type: "ACTIVITY", provider: "Viator", detail: "Tsukiji Food Tour · May 13", color: "border-l-purple-400" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal/5 to-transparent pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.1] tracking-tight"
            >
              Your trips, organized by AI.{" "}
              <span className="gradient-text">Your travel style, remembered forever.</span>
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              Forward any booking email to TravelVault. We auto-build your
              itinerary, generate a local guide, create your packing list, and
              alert you to flight changes — all before you even pack.
            </motion.p>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={QUIZ_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-teal rounded-full hover:bg-teal-dark transition-all hover:scale-[1.02] shadow-lg shadow-teal/25"
              >
                Take the Travel Quiz →
              </a>
              <a
                href={APP_STORE_URL}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal-light transition-all"
              >
                Download Free
              </a>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 flex items-center gap-2"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-sand fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-500">
                Trusted by 8,000+ travelers
              </span>
            </motion.div>
          </div>

          {/* Phone mockup */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="w-[280px] sm:w-[320px] bg-white rounded-[40px] shadow-2xl border-4 border-gray-800 overflow-hidden">
                {/* Status bar */}
                <div className="bg-teal px-6 pt-8 pb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-teal-light">9:41</span>
                    <span className="text-xs font-medium text-teal-light">TravelVault</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mt-3">Tokyo</h3>
                  <p className="text-teal-light text-xs">May 12 — May 20, 2024</p>
                </div>

                {/* Booking cards */}
                <div className="p-4 space-y-3 bg-offwhite min-h-[280px]">
                  {bookings.map((booking, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + i * 0.3, duration: 0.5 }}
                      className={`bg-white rounded-xl p-3 border-l-[3px] ${booking.color} shadow-sm`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[10px] font-extrabold text-teal tracking-wider">
                          {booking.type}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-gray-800">{booking.provider}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{booking.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-4 bg-teal/10 rounded-[60px] blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
