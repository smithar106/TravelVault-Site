import type { Metadata } from "next";
import { Pricing } from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Pricing — TravelVault",
  description: "TravelVault pricing: Free plan with 1 trip, Pro plan with unlimited trips at $39.99/year. Start with a 7-day free trial.",
};

export default function PricingPage() {
  return (
    <>
      <div className="pt-32 pb-8 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          Simple,{" "}
          <span className="gradient-text">transparent</span> pricing.
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Start free. Upgrade when you're ready to travel smarter.
        </p>
      </div>
      <Pricing />
    </>
  );
}
