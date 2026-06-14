import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ — TravelVault",
  description: "Frequently asked questions about TravelVault: email parsing, supported providers, TripIt comparison, offline mode, security, and pricing.",
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-32 pb-8 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          Frequently asked{" "}
          <span className="gradient-text">questions.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Everything you need to know about TravelVault.
        </p>
      </div>
      <FAQ />
    </>
  );
}
