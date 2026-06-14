import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — TravelVault",
  description: "TravelVault privacy policy. How we collect, use, and protect your travel data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: June 2024</p>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-navy mb-3">1. Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            When you use TravelVault, we collect information you provide directly: your email
            address, travel booking details from forwarded confirmation emails, travel style
            preferences from the quiz and trip ratings, and documents you upload to the vault.
            We also collect basic usage analytics to improve the app.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">2. How We Use Your Data</h2>
          <p className="text-gray-600 leading-relaxed">
            Your booking data is used solely to build and manage your trip itineraries, generate
            AI-powered destination guides personalized to your travel style, and send relevant
            flight alerts. Your travel style data trains our AI to improve your recommendations.
            We never sell your data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">3. Document Security</h2>
          <p className="text-gray-600 leading-relaxed">
            All documents uploaded to TravelVault (passports, visas, insurance cards) are encrypted
            at rest using AES-256. On your device, they are stored in encrypted secure storage.
            Access to your documents requires biometric authentication or your device passcode.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">4. AI Processing</h2>
          <p className="text-gray-600 leading-relaxed">
            TravelVault uses the DeepSeek AI API to parse booking emails and generate travel guides.
            Email content is transmitted to DeepSeek for parsing only and is not stored by them.
            No personal identifiers beyond what appears in the booking email are shared.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">5. Data Retention & Deletion</h2>
          <p className="text-gray-600 leading-relaxed">
            Your data is retained as long as your account is active. You can delete individual trips,
            bookings, or documents at any time. To delete your entire account and all associated
            data, contact us at privacy@travelvault.app. Deletion is processed within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">6. Third-Party Services</h2>
          <p className="text-gray-600 leading-relaxed">
            TravelVault integrates with Supabase (database), Postmark (email), AviationStack
            (flight data), RevenueCat (subscriptions), PostHog (analytics), and DeepSeek (AI).
            Each service has its own privacy policy governing their handling of data we transmit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">7. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Questions about this privacy policy? Contact us at{" "}
            <a href="mailto:privacy@travelvault.app" className="text-teal font-semibold">
              privacy@travelvault.app
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
