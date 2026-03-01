import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for the Liora Dermatology & Aesthetics website.",
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Terms of Service
          </h1>
          <div className="w-16 h-0.5 bg-[#c9a96e] mx-auto" />
        </div>

        <div className="space-y-12 text-[#2d2d2d] leading-relaxed">
          {/* Acceptance */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Liora Dermatology &amp; Aesthetics
              website (&quot;Site&quot;), you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use
              the Site.
            </p>
          </section>

          {/* Use of Site */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Use of This Site
            </h2>
            <div className="space-y-4">
              <p>
                This Site is provided for informational purposes only. The
                content on this Site does not constitute medical advice,
                diagnosis, or treatment. Always seek the advice of a qualified
                healthcare provider with any questions regarding a medical
                condition.
              </p>
              <p>
                You agree not to use this Site for any unlawful purpose or in
                any way that could damage, disable, or impair the Site.
              </p>
            </div>
          </section>

          {/* Medical Disclaimer */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Medical Disclaimer
            </h2>
            <div className="bg-[#faf8f5] border border-[#e8e4df] rounded-xl p-8 md:p-10 space-y-4">
              <p>
                The information provided on this Site, including text, graphics,
                and images, is for general informational purposes only and
                should not be relied upon as a substitute for professional
                medical advice.
              </p>
              <p>
                Individual results from treatments may vary. Before-and-after
                photos, when available, represent individual outcomes and do not
                guarantee similar results.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Intellectual Property
            </h2>
            <p>
              All content on this Site, including text, images, logos, and
              design, is the property of Liora Dermatology &amp; Aesthetics and
              is protected by applicable intellectual property laws. You may not
              reproduce, distribute, or create derivative works from any content
              on this Site without our prior written consent.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Third-Party Links
            </h2>
            <p>
              This Site may contain links to third-party websites. These links
              are provided for convenience only. We do not endorse or assume
              responsibility for the content or practices of any third-party
              sites.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Liora Dermatology &amp;
              Aesthetics shall not be liable for any damages arising out of or
              in connection with your use of this Site. This includes, without
              limitation, direct, indirect, incidental, and consequential
              damages.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Changes to These Terms
            </h2>
            <p>
              We reserve the right to update these Terms of Service at any time.
              Changes will be effective immediately upon posting to this Site.
              Your continued use of the Site constitutes acceptance of the
              revised terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Contact Us
            </h2>
            <div className="bg-[#faf8f5] border border-[#e8e4df] rounded-xl p-8 md:p-10 space-y-2">
              <p className="font-medium text-[#1a1a1a]">
                Liora Dermatology &amp; Aesthetics
              </p>
              <p>110 E 60th Street, Suite 800</p>
              <p>New York, NY 10022</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@lioradermatology.com"
                  className="text-[#c9a96e] hover:underline"
                >
                  hello@lioradermatology.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+12124334569"
                  className="text-[#c9a96e] hover:underline"
                >
                  212.433.GLOW
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
