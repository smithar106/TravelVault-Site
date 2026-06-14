"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: "47 unread booking confirmation emails. Which one has your gate?",
    desc: "Booking confirmations pile up fast. Searching through emails at the airport for a gate number is a travel ritual nobody asked for.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "TripIt stores your trip. It won't help you live it.",
    desc: "A digital filing cabinet is useful. But you don't need a filing cabinet — you need a local friend who knows where to eat, what to skip, and what to pack.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "You spent 3 hours researching restaurants. Half of them were tourist traps.",
    desc: "Crowd-sourced reviews favor the loudest, not the best. TravelVault's AI knows your taste and recommends spots locals actually visit.",
  },
];

export function Problem() {
  return (
    <section className="section-padding bg-offwhite">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Travel planning is chaos.{" "}
            <span className="gradient-text">It doesn't have to be.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-sand/10 flex items-center justify-center mb-5">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
