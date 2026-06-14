"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Forward a booking email",
    desc: "Send any confirmation to your unique TravelVault address. We parse flights, hotels, cars, and activities automatically — no manual entry.",
    visual: (
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center text-white text-lg">📧</div>
        <div className="flex-1 h-1 bg-gray-200 rounded-full" />
        <div className="w-12 h-12 rounded-2xl bg-teal-light flex items-center justify-center text-2xl">📱</div>
      </div>
    ),
  },
  {
    step: "2",
    title: "Get your AI travel guide",
    desc: "TravelVault builds a neighborhood guide, packing list, and practical tips for every destination — personalized to your travel style.",
    visual: (
      <div className="space-y-2">
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center gap-3">
          <span className="text-lg">🍽️</span>
          <div>
            <p className="text-xs font-bold text-gray-800">Restaurant Picks</p>
            <p className="text-[10px] text-gray-500">3 picks matched to your taste</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex items-center gap-3">
          <span className="text-lg">🧳</span>
          <div>
            <p className="text-xs font-bold text-gray-800">Packing List</p>
            <p className="text-[10px] text-gray-500">12 items · Weather-aware</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: "3",
    title: "Travel smarter every time",
    desc: "Rate your trips. TravelVault learns whether you're a food explorer, luxury traveler, or adventure seeker — and gets sharper with every trip.",
    visual: (
      <div className="flex flex-wrap gap-2">
        {["Food-first", "Adventure", "Luxury", "Culture"].map((tag) => (
          <span key={tag} className="px-3 py-1.5 bg-teal-light text-teal text-xs font-bold rounded-full">
            {tag}
          </span>
        ))}
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-teal/10 text-teal text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Three steps.{" "}
            <span className="gradient-text">Then just travel.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-full bg-teal text-white text-lg font-extrabold flex items-center justify-center mx-auto mb-6">
                {s.step}
              </div>
              <h3 className="text-xl font-extrabold text-navy mb-3">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">{s.desc}</p>
              <div className="flex justify-center">{s.visual}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
