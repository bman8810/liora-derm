import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse before-and-after photos and results from Liora Dermatology & Aesthetics on the Upper East Side.",
};

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-4">
          Gallery
        </h1>
        <div className="w-16 h-0.5 bg-[#c9a96e] mx-auto mb-12" />

        <div className="bg-[#faf8f5] border border-[#e8e4df] rounded-xl p-12 md:p-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-4">
            Coming Soon
          </p>
          <p className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-6">
            Our gallery is on its way
          </p>
          <p className="text-[#2d2d2d] leading-relaxed max-w-md mx-auto">
            We&apos;re curating a collection of before-and-after results to
            showcase our work. Check back soon.
          </p>
        </div>
      </div>
    </main>
  );
}
