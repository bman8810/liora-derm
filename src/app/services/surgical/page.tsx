import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Surgical Dermatology | Liora Dermatology & Aesthetics",
  description:
    "Expert dermatologic surgery including mole removal, hair restoration, scar improvement, and vein treatments on the Upper East Side.",
};

export default function SurgicalPage() {
  return (
    <ServicePage
      badge="Surgical"
      title="Surgical"
      titleAccent="Dermatology"
      subtitle="Dermatologic surgery can be used when medically necessary or for certain cosmetic procedures involving the skin, hair, nails, or veins."
      whatTitle="What is a Dermatologic Surgeon?"
      whatContent={[
        "A dermatologic surgeon is a medical professional who focuses on skin surgery. They aim to optimize the health and beauty of the skin through various procedures and treatments—maintaining the skin's function and appearance.",
        "Many dermatologic surgeons use innovative technology for patients with medically-necessary procedures or to help patients achieve cosmetic goals.",
      ]}
      treatments={{
        heading: "Surgical Treatments",
        items: [
          "Mole Removal",
          "Hair Restoration",
          "Scar Improvement",
          "Birthmark Correction",
          "Skin Disease Management",
          "Vein Treatments",
        ],
      }}
    />
  );
}
