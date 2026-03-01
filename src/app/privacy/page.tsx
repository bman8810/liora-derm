import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Liora Dermatology & Aesthetics. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Privacy Policy
          </h1>
          <div className="w-16 h-0.5 bg-[#c9a96e] mx-auto" />
        </div>

        <div className="space-y-12 text-[#2d2d2d] leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              Liora Dermatology &amp; Aesthetics (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              and safeguard your personal information when you visit our website
              or receive care at our practice located at 110 E 60th Street,
              Suite 800, New York, NY 10022.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Information We Collect
            </h2>
            <div className="space-y-4">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[#1a1a1a]">Contact information</strong>{" "}
                  such as your name, email address, phone number, and mailing
                  address when you book an appointment or submit a contact form.
                </li>
                <li>
                  <strong className="text-[#1a1a1a]">Health information</strong>{" "}
                  including medical history and treatment records necessary to
                  provide dermatological care, governed by HIPAA.
                </li>
                <li>
                  <strong className="text-[#1a1a1a]">Website usage data</strong>{" "}
                  such as IP address, browser type, pages visited, and cookies
                  to improve your browsing experience.
                </li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To schedule and manage appointments</li>
              <li>To provide medical and cosmetic dermatology services</li>
              <li>To communicate with you about your care and our services</li>
              <li>To process payments and billing</li>
              <li>To improve our website and patient experience</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* HIPAA */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              HIPAA Compliance
            </h2>
            <p>
              All protected health information (PHI) is handled in accordance
              with the Health Insurance Portability and Accountability Act
              (HIPAA). We maintain administrative, technical, and physical
              safeguards to protect your PHI. A separate Notice of Privacy
              Practices is available at our office upon request.
            </p>
          </section>

          {/* Sharing */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Information Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share information
              with trusted third parties only as necessary to provide our
              services, including payment processors, appointment scheduling
              platforms, and as required by law.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Cookies &amp; Tracking
            </h2>
            <p>
              Our website may use cookies and similar technologies to analyze
              site traffic and optimize your experience. You can control cookie
              preferences through your browser settings.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
              Your Rights
            </h2>
            <p>
              You have the right to access, correct, or request deletion of your
              personal information. To exercise these rights or ask questions
              about this policy, please contact us.
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

          {/* Updates */}
          <section>
            <p className="text-sm text-neutral-500">
              This policy may be updated from time to time. Any changes will be
              posted on this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
