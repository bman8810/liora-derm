import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Cosmetic Dermatology",
    desc: "Customized treatments to rejuvenate and enhance your natural beauty.",
    href: "/services/cosmetic",
  },
  {
    title: "Injectables",
    desc: "Expert Botox, fillers, and sculpting for natural-looking results.",
    href: "/services/injectables",
  },
  {
    title: "Laser Treatments",
    desc: "State-of-the-art laser technology for resurfacing, pigmentation, and more.",
    href: "/services/lasers",
  },
  {
    title: "Sofwave",
    desc: "FDA-cleared, non-invasive skin tightening for fine lines and wrinkles.",
    href: "/services/sofwave",
  },
  {
    title: "Medical Dermatology",
    desc: "Comprehensive care for conditions affecting skin, hair, and nails.",
    href: "/services/medical",
  },
  {
    title: "Surgical Dermatology",
    desc: "Precise excisions and Mohs surgery with minimal scarring.",
    href: "/services/surgical",
  },
];

const reviews = [
  {
    text: "Dr. Rhee is amazing. She is skilled in both cosmetic and medical dermatology and seamlessly integrates the two. She cured my rosacea and made me look ten years younger.",
    source: "Google",
  },
  {
    text: "I trust no one else with my Botox! Dr. Libby is incredibly talented. She is an intuitive artist and has a natural approach. Recommend 100%.",
    source: "Zocdoc",
  },
  {
    text: "Thoroughly enjoyed my experiences at Liora! Dr. Rhee and her team are super attentive, knowledgeable, and personable. Appointments are timely without feeling rushed.",
    source: "Google",
  },
];

const stats = [
  { value: "3,400+", label: "Five-Star Reviews" },
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Patients Treated" },
];

const insurance = [
  "Aetna",
  "Empire",
  "United",
  "Oxford",
  "Humana",
  "1199",
  "MultiPlan",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-cream pt-44 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Upper East Side, New York
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-soft-black">
              Experience the
              <br />
              <span className="text-gold">Best Skin</span>
              <br />
              of Your Life
            </h1>
            <p className="mt-6 text-lg text-neutral-500 max-w-lg leading-relaxed">
              Board-certified dermatologist Dr. Libby Rhee combines artistry
              with medical expertise to deliver transformative results in a
              luxury setting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.zocdoc.com/practice/liora-dermatology-and-aesthetics-62480"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-dark text-white text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-colors"
              >
                Book a Consultation
              </a>
              <a
                href="tel:+12124334569"
                className="border border-neutral-300 text-neutral-600 hover:border-gold hover:text-gold text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-colors"
              >
                212.433.GLOW
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/dr-rhee.jpg"
                alt="Dr. Libby Rhee, board-certified dermatologist"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-soft-black py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl md:text-4xl text-gold">
                {s.value}
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-neutral-400 mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Skincare at Liora Dermatology"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Meet Your Dermatologist
            </p>
            <h2 className="font-serif text-4xl text-soft-black">
              Dr. Libby Rhee
            </h2>
            <p className="text-sm text-neutral-400 mt-1">DO, MS, FAAD</p>
            <blockquote className="mt-6 border-l-2 border-gold pl-4 italic text-neutral-500">
              &ldquo;I&apos;ve worked very diligently and deliberately to try to
              re-imagine the &lsquo;doctor&apos;s visit&rsquo; to make it more
              experiential and fun rather than intimidating and
              sterile.&rdquo;
            </blockquote>
            <p className="mt-6 text-neutral-500 leading-relaxed">
              Board-certified and fellowship-trained, Dr. Rhee is one of the
              most sought-after dermatologists in New York City. A Clinical
              Instructor at Mount Sinai&apos;s Icahn School of Medicine, she
              specializes in both medical and cosmetic dermatology, seamlessly
              integrating the two to help every patient achieve their healthiest,
              most radiant skin.
            </p>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              Her philosophy is simple: skincare should be easy, intelligent, and
              safe, and help you feel great not only on the outside but on the
              inside as well.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-sm tracking-wide uppercase text-gold hover:text-gold-dark transition-colors"
            >
              Full Bio &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl text-soft-black">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-white p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl text-soft-black group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                  {s.desc}
                </p>
                <p className="mt-4 text-xs tracking-wide uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Patient Stories
            </p>
            <h2 className="font-serif text-4xl text-soft-black">
              What People Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-cream p-8 rounded-xl">
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed italic">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="mt-4 text-xs tracking-wide uppercase text-neutral-400">
                  Via {r.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
            Simplified Billing
          </p>
          <h2 className="font-serif text-3xl text-soft-black mb-2">
            We accept most major insurance plans
          </h2>
          <p className="text-sm text-neutral-400 mb-8">
            Don&apos;t see your plan?{" "}
            <a
              href="tel:+12124334569"
              className="text-gold hover:text-gold-dark"
            >
              Call us
            </a>{" "}
            and we&apos;ll look into it.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {insurance.map((name) => (
              <span
                key={name}
                className="bg-white px-6 py-3 rounded-full text-sm text-neutral-500 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Treat Now, Pay Over Time
          </p>
          <h2 className="font-serif text-3xl text-soft-black">
            Flexible Payment Plans
          </h2>
          <p className="mt-4 text-neutral-500 leading-relaxed">
            We partner with Alle and Cherry to offer flexible payment options so
            you can get the treatments you want on a schedule that works for
            you.
          </p>
          <div className="flex justify-center gap-8 mt-8">
            <a
              href="https://alle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-soft-black hover:bg-neutral-700 text-white text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-colors"
            >
              Alle Payment Plans
            </a>
            <a
              href="https://withcherry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neutral-300 hover:border-gold text-neutral-600 hover:text-gold text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-colors"
            >
              Cherry Financing
            </a>
          </div>
        </div>
      </section>

      {/* SkinBetter */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Shop
          </p>
          <h2 className="font-serif text-3xl text-soft-black">
            Replenish Your Skincare
          </h2>
          <p className="mt-4 text-neutral-500 leading-relaxed">
            Dr. Rhee recommends SkinBetter Science for medical-grade skincare
            products that complement your in-office treatments.
          </p>
          <a
            href="https://skinbetter.pro/lioradermatology"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-soft-black hover:bg-neutral-700 text-white text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-colors"
          >
            Shop SkinBetter Science
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-soft-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white">
            Ready for the Best Skin of Your Life?
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Schedule a consultation with Dr. Rhee and discover what personalized
            dermatology can do for you.
          </p>
          <a
            href="https://www.zocdoc.com/practice/liora-dermatology-and-aesthetics-62480"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-gold hover:bg-gold-dark text-white text-sm tracking-wide uppercase px-10 py-4 rounded-full transition-colors"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </>
  );
}
