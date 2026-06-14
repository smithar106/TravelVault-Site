"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I used to spend 30 minutes looking through emails for my gate number. TravelVault shows it to me the moment I open the app.",
    name: "Marcus T.",
    role: "Frequent business traveler",
  },
  {
    quote: "The neighborhood guide for Tokyo was better than anything I found on TripAdvisor. It knew I was a food person and gave me exactly what I needed.",
    name: "Aisha R.",
    role: "Food & culture explorer",
  },
  {
    quote: "Switched from TripIt after 4 years. TravelVault does everything TripIt does plus actually helps me enjoy the trip.",
    name: "Ben K.",
    role: "Former TripIt Pro subscriber",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-sand text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From travel chaos to{" "}
            <span className="text-sand">travel confidence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-sand fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm text-gray-300 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
