import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Libby Rhee — Board-Certified Dermatologist NYC",
  description:
    "Board-certified dermatologist Dr. Libby Rhee brings over 15 years of experience in cosmetic and medical dermatology. Clinical Instructor at Mount Sinai.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              About
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-soft-black leading-tight">
              Helping People
              <br />
              Live More
              <br />
              <span className="text-gold">Confidently</span>
            </h1>
            <blockquote className="mt-8 border-l-2 border-gold pl-4 italic text-neutral-500 text-lg">
              &ldquo;I&apos;ve worked very diligently and deliberately to try to
              re-imagine the &lsquo;doctor&apos;s visit&rsquo; to make it more
              experiential and fun rather than intimidating and
              sterile.&rdquo;
            </blockquote>
            <p className="mt-2 text-sm text-neutral-400">&mdash; Dr. Rhee</p>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/dr-rhee.jpg"
              alt="Dr. Libby Rhee"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl text-soft-black mb-8">
            Dr. Libby Rhee, DO, MS, FAAD
          </h2>
          <div className="space-y-5 text-neutral-500 leading-relaxed">
            <p>
              Dr. Libby Rhee is a board-certified dermatologist specializing in
              both cosmetic and medical dermatology for all ages and skin types
              on the Upper East Side of New York City. She currently works in
              private practice and regularly teaches resident physicians as a
              Clinical Instructor of Dermatology at the Icahn School of Medicine
              at Mount Sinai.
            </p>
            <p>
              Dr. Rhee completed her dermatology residency at St. Barnabas
              Hospital in New York, where she served as chief resident during her
              final year of training. A Michigan native, she received her
              Bachelor of Arts degree at Kalamazoo College, followed by her
              medical degree at Nova Southeastern University in Fort Lauderdale,
              Florida.
            </p>
            <p>
              She is passionate about dermatology outreach and education both
              domestically and abroad. She is an active volunteer for the
              American Academy of Dermatology&apos;s Camp Discovery for children
              affected with chronic skin conditions. Throughout her residency,
              she worked in conjunction with the AAD on a Navajo Reservation in
              Arizona, participated in a dermatologic medical mission with
              Passion to Heal in Kenya&apos;s Maasai Mara, and spent time at
              Israel&apos;s Tel Aviv Sourasky Medical Center.
            </p>
            <p>
              Her philosophy for skincare is simple: it should be easy,
              intelligent, and safe, and help you feel great not only on the
              outside but on the inside as well.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Credentials
            </p>
            <h2 className="font-serif text-3xl text-soft-black">
              Education & Training
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                label: "Residency",
                value:
                  "Dermatology, St. Barnabas Hospital, New York (Chief Resident)",
              },
              {
                label: "Medical Degree",
                value: "Nova Southeastern University, Fort Lauderdale, FL",
              },
              {
                label: "Undergraduate",
                value: "Kalamazoo College, Kalamazoo, MI",
              },
              {
                label: "Teaching",
                value:
                  "Clinical Instructor of Dermatology, Icahn School of Medicine at Mount Sinai",
              },
              {
                label: "Board Certification",
                value: "Fellow, American Academy of Dermatology (FAAD)",
              },
              {
                label: "Volunteer Work",
                value:
                  "AAD Camp Discovery, Navajo Reservation (AAD), Maasai Mara (Passion to Heal), Tel Aviv Sourasky Medical Center",
              },
            ].map((c) => (
              <div key={c.label} className="bg-white p-6 rounded-xl">
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-2">
                  {c.label}
                </p>
                <p className="text-sm text-neutral-600">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-soft-black text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-white">
            Schedule a Consultation
          </h2>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Meet Dr. Rhee and discover a personalized approach to your
            healthiest, most radiant skin.
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
