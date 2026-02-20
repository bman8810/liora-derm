import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Spa Services | Liora Dermatology & Aesthetics",
  description:
    "Medical-grade aesthetic treatments including facials, laser skin treatments, and injectables at Liora Dermatology on the Upper East Side.",
};

export default function SpaPage() {
  return (
    <ServicePage
      badge="Spa"
      title="Spa"
      titleAccent="Services"
      subtitle="Medical aesthetics offer innovative solutions to combat signs of aging. With several treatment options available, you have the ability to maintain a youthful appearance."
      whatTitle="Enhance the Natural Elements"
      whatContent={[
        "Whether through facial rejuvenation or cool-sculpting treatment options, medical aesthetics can enhance your natural elements, allowing you to stay true to yourself.",
        "In order to determine the best course of treatment, your medical professional first considers your medical history. Liora Dermatology takes an individualized approach to create a customized treatment plan.",
      ]}
      treatments={{
        heading: "Available Spa Services",
        items: [
          "Laser Skin Treatments",
          "Injectables",
          "Facials",
          "Chemical Peels",
          "Microdermabrasion",
          "LED Light Therapy",
        ],
      }}
    />
  );
}
