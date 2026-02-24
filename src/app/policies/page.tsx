import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Office Policies | Cancellation & Rescheduling",
  description:
    "Review Liora Dermatology's cancellation, rescheduling, and appointment policies. 48-hour notice required for changes.",
};

export default function PoliciesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Office Policies
          </h1>
          <div className="w-16 h-0.5 bg-[#c9a96e] mx-auto" />
        </div>

        {/* Cancellation Policy */}
        <section className="mb-16">
          <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-8">
            Cancellation &amp; Rescheduling Policy
          </h2>

          <div className="bg-[#faf8f5] border border-[#e8e4df] rounded-xl p-8 md:p-10 space-y-6">
            <div className="space-y-4 text-[#2d2d2d] leading-relaxed">
              <p>
                We kindly require a minimum of{" "}
                <strong className="text-[#1a1a1a]">48 hours&apos; notice</strong>{" "}
                for any cancellations or rescheduling requests.
              </p>

              <p>
                A{" "}
                <strong className="text-[#1a1a1a]">$150 fee</strong>{" "}
                will be charged for failure to provide the required 48-hour notice.
              </p>

              <p>
                If you need to{" "}
                <strong className="text-[#1a1a1a]">reschedule within 48 hours</strong>,
                the fee may be transferred and applied toward your rescheduled treatment.
              </p>

              <p>
                For outright cancellations or no-shows, the $150 cancellation fee is{" "}
                <strong className="text-[#1a1a1a]">non-refundable</strong>.
              </p>

              <p>
                For{" "}
                <strong className="text-[#1a1a1a]">series treatments</strong>,
                a full session will be deducted from your package in the event of a
                late cancellation or no-show.
              </p>

              <p>
                As a courtesy, we send appointment reminders{" "}
                <strong className="text-[#1a1a1a]">72 hours</strong>{" "}
                before your scheduled visit.
              </p>
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section className="mb-16">
          <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-8">
            Insurance &amp; Payment
          </h2>

          <div className="space-y-4 text-[#2d2d2d] leading-relaxed">
            <p>
              Liora Dermatology accepts most major insurance plans for medical
              dermatology services. Please contact our office to verify your
              specific plan.
            </p>
            <p>
              For cosmetic and aesthetic procedures, we offer flexible payment
              options including{" "}
              <strong className="text-[#1a1a1a]">Allē Payment Plans</strong> and{" "}
              <strong className="text-[#1a1a1a]">Cherry Financing</strong> to help
              make your treatments more accessible.
            </p>
            <p>
              Payment is due at the time of service. We accept cash, credit cards,
              and HSA/FSA cards for eligible services.
            </p>
          </div>
        </section>

        {/* Appointment Info */}
        <section className="mb-16">
          <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-8">
            Appointment Information
          </h2>

          <div className="space-y-4 text-[#2d2d2d] leading-relaxed">
            <p>
              Please arrive <strong className="text-[#1a1a1a]">10-15 minutes early</strong>{" "}
              for your first visit to complete any necessary paperwork.
            </p>
            <p>
              Bring a valid photo ID, your insurance card (if applicable), and a
              list of current medications.
            </p>
            <p>
              For cosmetic consultations, please come with a clean face free of
              makeup for the most accurate assessment.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="bg-[#1a1a1a] text-white rounded-xl p-8 md:p-10 text-center">
            <h3 className="font-playfair text-xl md:text-2xl mb-4">
              Questions About Our Policies?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is happy to help clarify any of our office policies.
            </p>
            <a
              href="tel:2124334569"
              className="inline-block bg-[#c9a96e] text-white px-8 py-3 rounded-lg hover:bg-[#b8944d] transition-colors font-medium"
            >
              Call 212.433.GLOW
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
