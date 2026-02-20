import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Cosmetic Dermatology | Liora Dermatology & Aesthetics",
  description:
    "From mole removal to advanced skin rejuvenation, our cosmetic dermatologists create customized treatment plans for your skin goals.",
};

export default function CosmeticPage() {
  return (
    <ServicePage
      badge="Cosmetic"
      title="Cosmetic"
      titleAccent="Dermatology"
      subtitle="Offering everything from mole removal to liposuction, cosmetic dermatologists can decide on the best treatment option for you and your skin's needs."
      whatTitle="What is Cosmetic Dermatology?"
      whatContent={[
        "Cosmetic dermatologists are professionals who have undergone the primary training of a standard dermatologist, but also have additional training in cosmetic procedures and treatments. These trained professionals provide cosmetic enhancements to help patients achieve their body and skin goals.",
        "Your cosmetic dermatologist can help determine the best treatment options for you and your needs. They can also advise you on a proper daily regimen to make your skin's maintenance a priority.",
        "Treatment options and services for cosmetic dermatology range from deep cleanses to skin restoration procedures. Taking care of your skin should be a top priority. Even so, it can be challenging to maintain healthy and youthful skin.",
      ]}
      treatments={{
        heading: "Cosmetic Treatment Options",
        items: [
          "Mole Removal",
          "Skin Rejuvenation",
          "Chemical Peels",
          "Microdermabrasion",
          "Laser Skin Resurfacing",
          "Body Contouring",
        ],
      }}
    />
  );
}
