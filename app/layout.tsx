import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "TravelVault — AI Travel Companion That Organizes Your Trips Automatically",
  description:
    "Forward any booking email and TravelVault auto-builds your itinerary, generates a local guide, creates your packing list, and sends real-time flight alerts. Smarter than TripIt.",
  openGraph: {
    title: "TravelVault — AI Travel Companion",
    description:
      "Forward any booking email and TravelVault auto-builds your itinerary. Smarter than TripIt.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelVault — AI Travel Companion",
    description:
      "Forward any booking email and TravelVault auto-builds your itinerary. Smarter than TripIt.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
