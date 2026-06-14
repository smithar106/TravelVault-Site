"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How does the email parsing work?",
    a: "You get a unique TravelVault email address. Forward any booking confirmation to it. Our AI (powered by DeepSeek) reads the email, extracts dates, locations, confirmation numbers, and provider names, then automatically builds your trip itinerary. Works with 25+ airlines, hotels, and booking platforms.",
  },
  {
    q: "Which booking providers do you support?",
    a: "We support confirmations from United, Delta, American, Southwest, Lufthansa, British Airways, Marriott, Hilton, Hyatt, IHG, Booking.com, Airbnb, Expedia, Hotels.com, Hertz, Enterprise, Viator, GetYourGuide, and more. If we receive a format we haven't seen, our AI adapts and learns.",
  },
  {
    q: "What makes TravelVault different from TripIt?",
    a: "TripIt is a digital filing cabinet — it stores your bookings. TravelVault is a travel brain. We do everything TripIt does (parse emails, build itineraries) plus: AI-generated neighborhood guides personalized to your taste, weather-aware packing lists, real-time flight alerts included at no extra cost, and a travel profile that gets smarter every trip. Same price, twice the intelligence.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. All your trip data — itineraries, booking details, documents, and guides — are cached locally on your device using SQLite. You can access everything even without an internet connection. Flight status updates require connectivity.",
  },
  {
    q: "How does the travel profile get built?",
    a: "Start with our 60-second travel quiz to set your baseline style (food explorer, luxury traveler, adventure seeker, etc.). Then, every trip you take, you rate your experience. TravelVault's AI refines your profile — learning your pace preference, accommodation style, cuisine interests, and more.",
  },
  {
    q: "Is my passport and document data secure?",
    a: "All documents are encrypted at rest using AES-256 and stored in Supabase with Row-Level Security. On your device, documents are held in encrypted secure storage (Expo SecureStore). Your data is never shared or used for anything other than your trip.",
  },
  {
    q: "What happens after my free trial?",
    a: "After your 7-day free trial of TravelVault Pro, you'll be charged the plan you selected (monthly or annual) unless you cancel at least 24 hours before the trial ends. You can cancel anytime from Settings or through the App Store.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. Cancel through your App Store subscriptions or in your TravelVault Settings. Your Pro features remain active until the end of your current billing period. If you cancel during the trial, you won't be charged.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal/10 text-teal text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Got questions?{" "}
            <span className="gradient-text">We've got answers.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-bold text-navy pr-4">{faq.q}</span>
                <svg
                  className={"w-5 h-5 text-teal shrink-0 transition-transform " + (open === i ? "rotate-180" : "")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
