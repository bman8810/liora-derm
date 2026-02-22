import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dermatology Services — Cosmetic, Medical & Surgical",
  description:
    "Explore our full range of cosmetic, medical, surgical, and pediatric dermatology services on the Upper East Side.",
};

const services = [
  {
    href: "/services/cosmetic",
    title: "Cosmetic Dermatology",
    description:
      "From mole removal to advanced skin rejuvenation, achieve your skin goals with personalized cosmetic treatments.",
  },
  {
    href: "/services/injectables",
    title: "Injectables",
    description:
      "Non-surgical skin rejuvenation with Botox, dermal fillers, and other injectable treatments for a refreshed look.",
  },
  {
    href: "/services/lasers",
    title: "Laser Treatments",
    description:
      "Advanced laser technology to address wrinkles, fine lines, pigmented lesions, loose skin, and unwanted hair.",
  },
  {
    href: "/services/sofwave",
    title: "Sofwave",
    description:
      "FDA-cleared, non-invasive ultrasound treatment for fine lines, wrinkles, and skin tightening with no downtime.",
  },
  {
    href: "/services/medical",
    title: "Medical Dermatology",
    description:
      "Comprehensive diagnosis and treatment for conditions of the skin, hair, and nails—from acne to alopecia.",
  },
  {
    href: "/services/surgical",
    title: "Surgical Dermatology",
    description:
      "Expert dermatologic surgery including mole removal, hair restoration, scar improvement, and vein treatments.",
  },
  {
    href: "/services/pediatric",
    title: "Pediatric Dermatology",
    description:
      "Gentle, specialized care for children's skin conditions in a warm and inviting atmosphere.",
  },
  {
    href: "/services/spa",
    title: "Spa Services",
    description:
      "Medical-grade aesthetic treatments including facials, laser skin treatments, and injectables to enhance your natural beauty.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Services
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-soft-black leading-tight">
            Comprehensive
            <br />
            <span className="text-gold">Dermatology Care</span>
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            From advanced cosmetic procedures to compassionate pediatric care,
            Liora Dermatology offers a full spectrum of services tailored to your
            unique needs.
          </p>
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group block bg-cream hover:bg-gold/10 p-8 rounded-2xl transition-colors"
              >
                <h2 className="font-serif text-2xl text-soft-black group-hover:text-gold transition-colors">
                  {s.title}
                </h2>
                <p className="mt-3 text-neutral-500 leading-relaxed text-sm">
                  {s.description}
                </p>
                <span className="inline-block mt-4 text-gold text-sm tracking-wide uppercase">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-soft-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Schedule a consultation and Dr. Rhee will create a personalized
            treatment plan just for you.
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
