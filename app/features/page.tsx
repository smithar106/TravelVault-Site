import type { Metadata } from "next";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Features — TravelVault",
  description: "AI-powered travel companion features: email parsing, neighborhood guides, smart packing lists, live flight alerts, document vault, and travel identity.",
};

export default function FeaturesPage() {
  return (
    <>
      <div className="pt-32 pb-8 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight">
          Every feature{" "}
          <span className="gradient-text">you need.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          Built for travelers who want more than a digital filing cabinet.
        </p>
      </div>
      <Features />
      <FinalCTA />
    </>
  );
}
