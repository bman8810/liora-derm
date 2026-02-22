import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spa Menu | Liora Dermatology & Aesthetics",
  description:
    "Medical-grade spa services on the Upper East Side. HydraFacial, deep pore cleansing facials, microneedling, chemical peels, LED therapy, and more. Book today.",
  keywords: [
    "spa facial NYC",
    "HydraFacial Upper East Side",
    "microneedling NYC",
    "medical spa UES",
    "best facial NYC",
  ],
};

const spaServices = [
  {
    name: "HydraFacial",
    duration: "45 min",
    price: "From $250",
    description:
      "Our most popular treatment. This multi-step facial cleanses, exfoliates, extracts, and hydrates using patented Vortex-Fusion technology. Instantly plumps and brightens skin with zero downtime.",
    ideal: "All skin types. Perfect for a glow-up before events.",
    icon: "💎",
  },
  {
    name: "Deep Pore Cleansing Facial",
    duration: "60 min",
    price: "From $200",
    description:
      "A thorough deep-cleansing treatment that includes steam, extractions, and a custom mask tailored to your skin type. Clears congestion and leaves skin refreshed.",
    ideal: "Oily, acne-prone, or congested skin.",
    icon: "🧖",
  },
  {
    name: "Lunch Time Laser Facial",
    duration: "30 min",
    price: "From $300",
    description:
      "A quick, no-downtime laser treatment that stimulates collagen production, reduces fine lines, and evens skin tone. Walk in on your lunch break, walk out glowing.",
    ideal: "Busy professionals wanting anti-aging results without downtime.",
    icon: "⚡",
  },
  {
    name: "Microneedling",
    duration: "60 min",
    price: "From $400",
    description:
      "Controlled micro-injuries stimulate your skin's natural healing response, boosting collagen and elastin production. Dramatically improves texture, scars, pores, and fine lines.",
    ideal: "Acne scars, enlarged pores, fine lines, uneven texture.",
    icon: "✨",
  },
  {
    name: "Chemical Peel",
    duration: "30-45 min",
    price: "From $200",
    description:
      "Medical-grade peels customized to your skin's needs. From gentle brightening peels to deeper resurfacing treatments, we match the peel strength to your goals.",
    ideal: "Hyperpigmentation, dullness, acne, sun damage.",
    icon: "🌿",
  },
  {
    name: "LED Light Therapy",
    duration: "20 min",
    price: "From $100",
    description:
      "Non-invasive light therapy using red and blue wavelengths to reduce inflammation, kill acne-causing bacteria, and stimulate cellular repair. Often added to other treatments.",
    ideal: "Acne, rosacea, post-procedure healing, anti-aging.",
    icon: "💡",
  },
  {
    name: "Dermaplaning",
    duration: "30 min",
    price: "From $175",
    description:
      "A gentle exfoliation technique that removes dead skin cells and fine vellus hair (peach fuzz), revealing smoother, brighter skin. Great standalone or as a prep for other treatments.",
    ideal: "Dull skin, uneven texture, makeup lovers wanting a flawless canvas.",
    icon: "🪞",
  },
  {
    name: "Custom Combination Facial",
    duration: "75 min",
    price: "From $350",
    description:
      "Our aesthetician builds a bespoke treatment combining multiple modalities based on your skin analysis. May include extraction, peel, LED, and targeted serums.",
    ideal: "Patients wanting a comprehensive, personalized experience.",
    icon: "🎯",
  },
];

export default function SpaMenuPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Hero */}
      <section className="bg-[#2C2C2C] text-white pt-32 pb-20 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9B87C] mb-4">
          The Liora Spa
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
          Medical-Grade{" "}
          <span className="text-[#C9B87C]">Spa Services</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Expert aesthetician treatments backed by board-certified dermatology.
          Every service is performed under the guidance of Dr. Libby Rhee.
        </p>
      </section>

      {/* March Promo */}
      <section className="bg-[#C9B87C] py-6 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#2C2C2C] font-semibold text-lg md:text-xl">
            🌸 March Special: 10% Off Any Single Spa Service
          </p>
          <p className="text-[#2C2C2C]/80 text-sm mt-1">
            Mention code <span className="font-bold">SPA10</span> when booking.
            Valid through March 31, 2026.
          </p>
          <a
            href="tel:+12124334569"
            className="inline-block mt-3 bg-[#2C2C2C] text-white text-sm tracking-wide uppercase px-8 py-3 rounded-full hover:bg-[#1a1a1a] transition-colors"
          >
            Call to Book: 212.433.GLOW
          </a>
        </div>
      </section>

      {/* Spa Menu Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9B87C] mb-4">
              Our Menu
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C2C2C]">
              Spa Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaServices.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl p-8 border border-[#E8E4DE] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-2xl mr-3">{service.icon}</span>
                    <h3 className="inline font-serif text-xl text-[#2C2C2C]">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-[#C9B87C] font-semibold text-sm">
                      {service.price}
                    </p>
                    <p className="text-neutral-400 text-xs">{service.duration}</p>
                  </div>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="text-xs text-neutral-400">
                  <span className="font-semibold text-[#2C2C2C]">Ideal for:</span>{" "}
                  {service.ideal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Liora Spa */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9B87C] mb-4">
              The Liora Difference
            </p>
            <h2 className="font-serif text-3xl text-[#2C2C2C]">
              Why Choose Our Spa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">👩‍⚕️</div>
              <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">
                Dermatologist-Supervised
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Every treatment is performed under the guidance of board-certified
                dermatologist Dr. Libby Rhee. Medical expertise meets spa luxury.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🔬</div>
              <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">
                Medical-Grade Products
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We use only professional-grade products and devices. Same treatments,
                stronger results than your typical day spa.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">💆</div>
              <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">
                Personalized Approach
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                No cookie-cutter facials. Your aesthetician creates a custom treatment
                plan based on your skin analysis, goals, and lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-[#FAF8F5] px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9B87C] mb-4">
              Save More
            </p>
            <h2 className="font-serif text-3xl text-[#2C2C2C]">
              Spa Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 border border-[#E8E4DE] text-center">
              <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">
                The Glow-Up
              </h3>
              <p className="text-[#C9B87C] font-semibold text-2xl mb-1">3 Sessions</p>
              <p className="text-neutral-400 text-sm mb-4">HydraFacial Series</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Three HydraFacials spaced 4 weeks apart for cumulative results.
                Save 15% vs. individual sessions.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-[#C9B87C] text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9B87C] text-white text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">
                Total Refresh
              </h3>
              <p className="text-[#C9B87C] font-semibold text-2xl mb-1">5 Sessions</p>
              <p className="text-neutral-400 text-sm mb-4">Mix &amp; Match Any Service</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Choose any combination of spa services. Ideal for a multi-month
                skincare journey. Save 20%.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-[#E8E4DE] text-center">
              <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">
                Bridal Glow
              </h3>
              <p className="text-[#C9B87C] font-semibold text-2xl mb-1">6 Months</p>
              <p className="text-neutral-400 text-sm mb-4">Custom Wedding Plan</p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                A personalized 6-month treatment timeline leading up to your big day.
                Includes consultation with Dr. Rhee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9B87C] mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-3xl text-[#2C2C2C]">
              Common Questions
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                q: "How is a medical spa different from a regular spa?",
                a: "At Liora, every treatment is supervised by a board-certified dermatologist. We use medical-grade products and devices that aren't available at day spas, which means stronger, more consistent results.",
              },
              {
                q: "How do I know which treatment is right for me?",
                a: "Book a consultation and our aesthetician will perform a thorough skin analysis. We'll recommend a treatment plan based on your specific concerns, skin type, and goals.",
              },
              {
                q: "Is there downtime after spa treatments?",
                a: "Most of our spa services have zero downtime — you can return to normal activities immediately. Treatments like microneedling or deeper peels may have 1-3 days of mild redness.",
              },
              {
                q: "Can I combine spa services with medical dermatology?",
                a: "Absolutely! Many of our patients see Dr. Rhee for medical or cosmetic concerns and complement their treatment with regular spa services. We coordinate everything under one roof.",
              },
              {
                q: "Do you accept insurance for spa services?",
                a: "Spa services are considered cosmetic and are not covered by insurance. However, we offer financing through Cherry and Alle to make treatments accessible.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg text-[#2C2C2C] mb-2">
                  {faq.q}
                </h3>
                <p className="text-neutral-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C2C2C] text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl text-white mb-4">
            Ready to Glow?
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-4">
            Book a spa service at Liora Dermatology &amp; Aesthetics. Use code{" "}
            <span className="text-[#C9B87C] font-semibold">SPA10</span> for 10%
            off your first session in March.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="https://www.zocdoc.com/practice/liora-dermatology-and-aesthetics-62480"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C9B87C] hover:bg-[#D4C68E] text-[#2C2C2C] font-semibold text-sm tracking-wide uppercase px-10 py-4 rounded-full transition-colors"
            >
              Book on Zocdoc
            </a>
            <a
              href="tel:+12124334569"
              className="inline-block border border-[#C9B87C] text-[#C9B87C] hover:bg-[#C9B87C] hover:text-[#2C2C2C] font-semibold text-sm tracking-wide uppercase px-10 py-4 rounded-full transition-colors"
            >
              Call 212.433.GLOW
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
