"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "📧",
    title: "Email Parsing",
    desc: "Forward any booking. We handle United, Delta, Marriott, Airbnb, Booking.com, Expedia, and 20+ more.",
  },
  {
    icon: "🗺",
    title: "AI Neighborhood Guide",
    desc: "Restaurants locals actually go to. Hidden gems. What to avoid. Safety overview. All AI-generated for your style.",
  },
  {
    icon: "🧳",
    title: "Smart Packing List",
    desc: "Weather-aware, destination-specific, and learns what you always forget.",
  },
  {
    icon: "✈️",
    title: "Live Flight Alerts",
    desc: "Gate changes and delays pushed to your phone before the airport screens update.",
  },
  {
    icon: "🔐",
    title: "Document Vault",
    desc: "Passport, visa, insurance — encrypted and accessible offline. Even with no signal.",
  },
  {
    icon: "🌍",
    title: "Travel Identity",
    desc: "After every trip, your profile sharpens. Food explorer. Adventure seeker. Luxury traveler. TravelVault knows who you are.",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Built for how{" "}
            <span className="gradient-text">real travelers</span>{" "}
            actually travel.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-base font-extrabold text-navy mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
