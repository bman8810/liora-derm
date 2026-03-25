import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Weight & Wellness — Medical Weight Loss NYC",
  description:
    "Physician-led medical weight management with FDA-approved GLP-1 medications (Ozempic, Wegovy, Mounjaro, Zepbound). Cash-pay, no insurance required. NYC & Michigan.",
};

const steps = [
  {
    number: "01",
    title: "Comprehensive Evaluation",
    description:
      "Full medical history, labs, and body composition assessment to understand your unique metabolic profile.",
  },
  {
    number: "02",
    title: "Personalized Treatment Plan",
    description:
      "GLP-1 agonist therapy tailored to your goals, lifestyle, and health history. Includes dietary and lifestyle guidance.",
  },
  {
    number: "03",
    title: "Ongoing Support",
    description:
      "Regular follow-ups to track progress, adjust medications, and keep you on track toward lasting results.",
  },
];

const candidateItems = [
  "Overweight (BMI 25\u201329.9) with metabolic risk factors",
  "Obesity (BMI \u226530)",
  "Weight-related conditions: prediabetes, insulin resistance, high cholesterol, hypertension",
  "Patients who have tried diet and exercise without lasting results",
];

const advantages = [
  "Board-certified dermatologist with advanced training in obesity medicine",
  "FDA-approved GLP-1 agonists (Ozempic, Wegovy, Mounjaro, Zepbound)",
  "Cash-pay model \u2014 no prior authorizations, no insurance delays",
  "Telehealth available for Michigan patients",
  "Personalized, unhurried appointments",
];

const faqs = [
  {
    question: "Am I a candidate?",
    answer:
      "Most adults with BMI \u226527 and at least one weight-related health condition, or BMI \u226530, may qualify. Dr. Rhee will evaluate your full health history at your initial visit.",
  },
  {
    question: "What medications do you prescribe?",
    answer:
      "We prescribe FDA-approved GLP-1 receptor agonists including semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound), customized to your needs.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing is discussed at your initial consultation. There are no hidden fees. All services are cash-pay.",
  },
  {
    question: "Do I need to come in person?",
    answer:
      "NYC patients are seen in-office at our Midtown East location. Michigan patients can be seen via telehealth.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most patients begin to see measurable weight loss within 4\u20138 weeks of starting treatment. Individual results vary based on medication, diet, and lifestyle.",
  },
];

export default function WeightLossPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Weight &amp; Wellness
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-soft-black leading-tight">
            Precision Weight
            <br />
            <span className="text-gold">&amp; Wellness</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Evidence-based, physician-led weight loss &mdash; no insurance, no
            shortcuts.
          </p>
          <p className="mt-6 text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Dr. Libby Rhee, DO, FAAD offers personalized medical weight
            management using the latest FDA-approved medications including GLP-1
            receptor agonists (Ozempic, Wegovy, Mounjaro, Zepbound). Cash-pay
            only. Available in New York City and Michigan.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              How It Works
            </p>
            <h2 className="font-serif text-3xl text-soft-black">
              Three Simple Steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-cream p-8 rounded-xl text-center"
              >
                <p className="text-3xl font-serif text-gold mb-4">
                  {step.number}
                </p>
                <h3 className="font-serif text-xl text-soft-black mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Candidates
            </p>
            <h2 className="font-serif text-3xl text-soft-black">
              Who We Help
            </h2>
          </div>
          <div className="space-y-4">
            {candidateItems.map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl flex items-start gap-4"
              >
                <span className="text-gold mt-0.5">&#10003;</span>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Liora */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Why Liora
            </p>
            <h2 className="font-serif text-3xl text-soft-black">
              Why Choose Liora
            </h2>
          </div>
          <div className="space-y-4">
            {advantages.map((item) => (
              <div
                key={item}
                className="bg-cream p-6 rounded-xl flex items-start gap-4"
              >
                <span className="text-gold mt-0.5">&#10003;</span>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Pricing
          </p>
          <p className="text-neutral-600 leading-relaxed">
            All visits are cash-pay. We do not bill insurance for weight loss
            services.
          </p>
          <p className="mt-3 text-neutral-500 text-sm leading-relaxed">
            A superbill can be provided upon request for potential out-of-network
            reimbursement.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-3xl text-soft-black">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-serif text-lg text-soft-black mb-2">
                  {faq.question}
                </h3>
                <p className="text-neutral-500 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-soft-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Book your consultation with Dr. Rhee and take the first step toward
            lasting weight loss.
          </p>
          <a
            href="tel:+12124334569"
            className="inline-block mt-8 bg-gold hover:bg-gold-dark text-white text-sm tracking-wide uppercase px-10 py-4 rounded-full transition-colors"
          >
            Call 212.433.GLOW (4569)
          </a>
        </div>
      </section>
    </>
  );
}
