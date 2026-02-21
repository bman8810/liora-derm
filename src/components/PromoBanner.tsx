"use client";

import { useState } from "react";
import Link from "next/link";

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div id="promo-banner" className="bg-[#2C2C2C] text-white py-2.5 px-6 text-center relative z-[60]">
      <Link
        href="/services/spa"
        className="text-sm md:text-base hover:text-[#C9B87C] transition-colors"
      >
        <span className="text-[#C9B87C] font-semibold">March Special:</span>{" "}
        10% off any single spa service session.{" "}
        <span className="underline underline-offset-2">
          View Spa Menu &rarr;
        </span>
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white text-lg cursor-pointer"
        aria-label="Dismiss"
      >
        &times;
      </button>
    </div>
  );
}
