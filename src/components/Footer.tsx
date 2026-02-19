import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-soft-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl tracking-wide">LIORA</p>
            <p className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 mt-1">
              Dermatology & Aesthetics
            </p>
            <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
              Board-certified dermatology on the Upper East Side. Advanced
              cosmetic, medical, and surgical skin care.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Services
            </p>
            <div className="space-y-2">
              {[
                "Cosmetic Dermatology",
                "Injectables",
                "Lasers",
                "Sofwave",
                "Medical Dermatology",
                "Spa Services",
              ].map((s) => (
                <Link
                  key={s}
                  href={`/services/${s.toLowerCase().replace(/ /g, "-")}`}
                  className="block text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Contact
            </p>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>110 E 60th Street, Suite 800</p>
              <p>New York, NY 10022</p>
              <a
                href="tel:+12124334569"
                className="block hover:text-white transition-colors"
              >
                212.433.GLOW
              </a>
              <a
                href="mailto:hello@lioradermatology.com"
                className="block hover:text-white transition-colors"
              >
                hello@lioradermatology.com
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Hours
            </p>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>Mon - Thu: 9am - 6pm</p>
              <p>Fri: 9am - 4pm</p>
              <p>Sat: 10am - 4pm</p>
              <p>Sun: Closed</p>
            </div>
            <div className="flex gap-4 mt-6">
              {[
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/lioradermatology/",
                },
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/liora.dermatology",
                },
                {
                  name: "YouTube",
                  href: "https://www.youtube.com/channel/UCUdQEV7P9io-Kx9uPJ9eLqw",
                },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors text-sm"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Liora Dermatology & Aesthetics.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-neutral-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-neutral-500 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
