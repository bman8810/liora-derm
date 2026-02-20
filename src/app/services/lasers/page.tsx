import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Laser Treatments | Liora Dermatology & Aesthetics",
  description:
    "Advanced laser technology for wrinkles, fine lines, pigmented lesions, loose skin, and hair removal at Liora Dermatology.",
};

export default function LasersPage() {
  return (
    <ServicePage
      badge="Lasers"
      title="Laser"
      titleAccent="Treatments"
      subtitle="Lasers serve different purposes, from diminishing fine lines to removing hair."
      whatTitle="How Do Lasers Work?"
      whatContent={[
        "Lasers only contain a concentration of one color and are therefore monochromatic. A laser emits one concentration of one color of light, also referred to as a wavelength. The wavelength of the laser has to be tuned to correspond to whatever the cosmetic surgeon attempts to correct.",
        "This allows the laser to address the target area with precision. Different types of lasers feature different wavelengths, which can then be used for a number of conditions.",
      ]}
      treatments={{
        heading: "Conditions Treated with Lasers",
        items: [
          "Wrinkles",
          "Fine Lines",
          "Pigmented Lesions",
          "Loose Skin",
          "Hair Removal",
          "Sun Damage",
        ],
      }}
      faqs={[
        {
          question: "How many laser sessions will I need?",
          answer:
            "The number of sessions depends on the condition being treated and the type of laser used. Dr. Rhee will create a personalized treatment plan during your consultation.",
        },
        {
          question: "Is laser treatment painful?",
          answer:
            "Most patients describe laser treatment as a mild warming or tingling sensation. Topical numbing cream may be applied prior to treatment for your comfort.",
        },
      ]}
    />
  );
}
