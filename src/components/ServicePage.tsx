import type { ReactNode } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  whatTitle: string;
  whatContent: string[];
  treatments?: { heading: string; items: string[] };
  faqs?: FAQ[];
  extra?: ReactNode;
}

export default function ServicePage({
  badge,
  title,
  titleAccent,
  subtitle,
  whatTitle,
  whatContent,
  treatments,
  faqs,
  extra,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            {badge}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-soft-black leading-tight">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="text-gold">{titleAccent}</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </section>

      {/* What / How */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-soft-black mb-8">
            {whatTitle}
          </h2>
          <div className="space-y-5 text-neutral-500 leading-relaxed">
            {whatContent.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      {treatments && (
        <section className="py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
                Treatments
              </p>
              <h2 className="font-serif text-3xl text-soft-black">
                {treatments.heading}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.items.map((item) => (
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
      )}

      {/* Extra content (e.g. Sofwave details) */}
      {extra}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
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
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-serif text-lg text-soft-black mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-soft-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white">
            Schedule a Consultation
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Liora Dermatology takes an individualized approach to each patient,
            creating a customized treatment plan tailored to your needs.
          </p>
          <a
            href="https://www.zocdoc.com/practice/liora-dermatology-and-aesthetics-62480"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gold hover:bg-gold-dark text-white text-sm tracking-wide uppercase px-10 py-4 rounded-full transition-colors"
          >
            Book with ZocDoc
          </a>
        </div>
      </section>
    </>
  );
}
