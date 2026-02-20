import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Sofwave | Liora Dermatology & Aesthetics",
  description:
    "Sofwave is an FDA-cleared, non-invasive ultrasound treatment for fine lines, wrinkles, and skin tightening with no downtime.",
};

export default function SofwavePage() {
  return (
    <ServicePage
      badge="Sofwave™"
      title="Sofwave™"
      titleAccent="Skin Tightening"
      subtitle="An FDA-cleared, non-invasive treatment of fine lines and wrinkles using next-generation SUPERB™ Synchronous Ultrasound Parallel Beam Technology."
      whatTitle="How Does Sofwave™ Work?"
      whatContent={[
        "The optimal depth for treating wrinkles is 1.5mm in the mid-dermis. Sofwave's unique Synchronous Ultrasound Parallel Beam SUPERB™ technology generates heat at this exact depth. An integrated cooling mechanism, Sofcool™, protects the uppermost skin layer from burning.",
        "The impacted treatment zones stimulate a healing response called neo-collagenases, which increases and regenerates collagen in the skin, leading to the reduction of fine lines and wrinkles.",
        "In December 2022, Sofwave™ was also approved by the FDA for the short-term improvement of cellulite, making it another viable option for cellulite treatment.",
      ]}
      faqs={[
        {
          question: "How is Sofwave™ better than other technologies?",
          answer:
            "Aggressive options like lasers can cause significant damage to the skin surface, leading to long healing periods and considerable downtime. Even RF microneedling can be uncomfortable and risky. Sofwave™ enables controlled energy delivery while protecting the skin surface—with no downtime.",
        },
        {
          question: "How many treatments are needed?",
          answer:
            "Typically, the treatment protocol calls for 1–2 treatments, depending on the patient's skin condition.",
        },
        {
          question: "What does the treatment feel like?",
          answer:
            "As the ultrasound energy is delivered, you may feel warmness of the skin. Treatment is comfortable with a topical anesthetic cream applied prior to the procedure.",
        },
        {
          question: "When will I see results?",
          answer:
            "Some patients notice improvement within a few weeks, with optimal results typically appearing 3–6 months after treatment as new collagen forms.",
        },
      ]}
      extra={
        <section className="py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Advantages
              </p>
              <h2 className="font-serif text-3xl text-soft-black">
                Why Choose Sofwave™?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "FDA-Cleared Technology",
                "No Downtime",
                "Single Treatment Protocol",
                "Non-Invasive",
                "Integrated Skin Cooling",
                "Cellulite Improvement",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white p-6 rounded-xl text-center"
                >
                  <p className="text-sm text-neutral-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
