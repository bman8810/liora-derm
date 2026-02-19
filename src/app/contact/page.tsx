import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Liora Dermatology & Aesthetics",
  description:
    "Visit Liora Dermatology at 110 E 60th Street, Suite 800, NYC. Call 212.433.GLOW or book online.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl text-soft-black">Contact Us</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">
                  Address
                </p>
                <p className="text-neutral-600">110 E 60th Street, Suite 800</p>
                <p className="text-neutral-600">New York, NY 10022</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">
                  Phone
                </p>
                <a
                  href="tel:+12124334569"
                  className="text-neutral-600 hover:text-gold transition-colors"
                >
                  212.433.GLOW (4569)
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">
                  Email
                </p>
                <a
                  href="mailto:hello@lioradermatology.com"
                  className="text-neutral-600 hover:text-gold transition-colors"
                >
                  hello@lioradermatology.com
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gold mb-3">
                  Hours
                </p>
                <div className="text-neutral-600 space-y-1 text-sm">
                  <p>Monday - Thursday: 9am - 6pm</p>
                  <p>Friday: 9am - 4pm</p>
                  <p>Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <a
                href="https://www.zocdoc.com/practice/liora-dermatology-and-aesthetics-62480"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-dark text-white text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-colors"
              >
                Book Online
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8!2d-73.968!3d40.764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1d5d5e5%3A0x0!2s110+E+60th+St%2C+New+York%2C+NY+10022!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Liora Dermatology location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
