import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — TravelVault",
  description: "TravelVault terms of service. Subscription terms, usage guidelines, and legal information.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-navy tracking-tight mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-400 mb-12">Last updated: June 2024</p>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-navy mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By downloading, installing, or using TravelVault, you agree to these Terms of Service.
            If you do not agree, do not use the service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">2. Description of Service</h2>
          <p className="text-gray-600 leading-relaxed">
            TravelVault is an AI-powered travel companion app that parses booking confirmation
            emails, builds trip itineraries, generates destination guides, creates packing lists,
            tracks flight status, and builds a travel personality profile based on your trips.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">3. User Accounts</h2>
          <p className="text-gray-600 leading-relaxed">
            You must create an account to use TravelVault. You are responsible for maintaining
            the confidentiality of your account credentials and for all activities under your
            account. You must provide accurate and complete information during registration.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">4. Subscriptions & Billing</h2>
          <p className="text-gray-600 leading-relaxed">
            TravelVault offers a free tier (1 trip) and a Pro subscription ($5.99/month or
            $39.99/year). Subscriptions auto-renew unless canceled at least 24 hours before
            the end of the current period. Payment is processed through the Apple App Store
            or Google Play Store. Prices may vary by region.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">5. Free Trial</h2>
          <p className="text-gray-600 leading-relaxed">
            New Pro subscribers receive a 7-day free trial. If you cancel during the trial
            period, you will not be charged. At the end of the trial, your selected subscription
            will begin automatically unless canceled.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">6. AI-Generated Content</h2>
          <p className="text-gray-600 leading-relaxed">
            TravelVault uses AI (DeepSeek) to generate neighborhood guides, restaurant
            recommendations, packing lists, and other travel content. While we strive for
            accuracy, AI-generated content may contain errors or omissions. Always verify
            critical information (flight times, visa requirements, safety advisories) with
            official sources.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">7. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            TravelVault is provided &ldquo;as is&rdquo; without warranties of any kind. We are
            not liable for any damages arising from the use of our service, including but not
            limited to missed flights, booking errors, or reliance on AI-generated content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">8. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will be posted
            in the app and on this page. Continued use after changes constitutes acceptance
            of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-navy mb-3">9. Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about these terms, contact us at{" "}
            <a href="mailto:legal@travelvault.app" className="text-teal font-semibold">
              legal@travelvault.app
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
