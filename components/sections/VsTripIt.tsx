"use client";

import { motion } from "framer-motion";

const rows = [
  { feature: "Auto-parses booking emails", tripit: true, travelvault: true },
  { feature: "Neighborhood guide + restaurant picks", tripit: false, travelvault: "AI-generated", highlight: true },
  { feature: "Personalized packing list", tripit: false, travelvault: "Weather-aware", highlight: true },
  { feature: "Real-time flight alerts", tripit: "Pro only ($49/yr)", travelvault: "Included", highlight: true },
  { feature: "Learns your travel style", tripit: false, travelvault: "Gets smarter every trip", highlight: true },
  { feature: "Travel personality profile", tripit: false, travelvault: true, highlight: true },
  { feature: "Local tips from AI, not crowds", tripit: false, travelvault: true, highlight: true },
  { feature: "Price", tripit: "$49/year", travelvault: "$39.99/year", price: true },
];

function Check() {
  return (
    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function VsTripIt() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-sand/10 text-sand text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            The difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            TripIt organizes your trip.{" "}
            <span className="gradient-text">TravelVault thinks for it.</span>
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="bg-offwhite rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            {/* Header */}
            <div className="grid grid-cols-3 bg-teal text-white">
              <div className="p-4 font-semibold text-sm">Feature</div>
              <div className="p-4 font-semibold text-sm text-center border-x border-teal-dark">TripIt</div>
              <div className="p-4 font-semibold text-sm text-center bg-teal-dark">TravelVault</div>
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className={"grid grid-cols-3 border-b border-gray-100" + (row.highlight ? " comparison-highlight" : "") + (row.price ? " bg-sand/5 font-bold" : "")}
              >
                <div className="p-4 text-sm font-medium text-gray-700 flex items-center">{row.feature}</div>
                <div className="p-4 flex items-center justify-center border-x border-gray-100">
                  {typeof row.tripit === "string" ? (
                    <span className={"text-sm font-medium " + (row.highlight ? "text-gray-400" : "text-teal")}>{row.tripit}</span>
                  ) : row.tripit ? <Check /> : <Cross />}
                </div>
                <div className={"p-4 flex items-center justify-center" + (row.price ? " bg-sand/10 rounded-br-2xl" : "")}>
                  {typeof row.travelvault === "string" ? (
                    <span className={"text-sm font-bold " + (row.highlight ? "text-teal" : "text-navy")}>{row.travelvault}</span>
                  ) : row.travelvault ? <Check /> : <Cross />}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3 mt-8">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className={"rounded-xl p-4 flex items-center justify-between " + (row.highlight ? "bg-teal-light border border-teal/20" : "bg-offwhite")}
            >
              <span className="text-sm font-medium text-gray-700">{row.feature}</span>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">TripIt</span>
                  <div className="mt-1">
                    {typeof row.tripit === "string" ? (
                      <span className="text-xs text-gray-500">{row.tripit}</span>
                    ) : row.tripit ? <Check /> : <Cross />}
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-bold text-teal uppercase">TV</span>
                  <div className="mt-1">
                    {typeof row.travelvault === "string" ? (
                      <span className={"text-xs font-bold " + (row.highlight ? "text-teal" : "text-navy")}>{row.travelvault}</span>
                    ) : row.travelvault ? <Check /> : <Cross />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 text-lg font-bold text-teal"
        >
          Same price. Twice the intelligence.
        </motion.p>
      </div>
    </section>
  );
}
