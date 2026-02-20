import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Medical Dermatology | Liora Dermatology & Aesthetics",
  description:
    "Comprehensive diagnosis and treatment for conditions of the skin, hair, and nails at Liora Dermatology on the Upper East Side.",
};

export default function MedicalPage() {
  return (
    <ServicePage
      badge="Medical"
      title="Medical"
      titleAccent="Dermatology"
      subtitle="The professionals at Liora Dermatology treat a wide range of different conditions that affect the skin, hair, and nails."
      whatTitle="What is Medical Dermatology?"
      whatContent={[
        "Medical dermatologists receive specialized training that allows them to diagnose and treat conditions of the skin, hair, and nails. This field of healthcare requires extensive clinical knowledge.",
        "Dermatologists may utilize a variety of different procedures and treatment options, ranging from surgical procedures to noninvasive therapy. Liora Dermatology takes an individualized approach, creating a customized treatment plan for each patient.",
      ]}
      treatments={{
        heading: "Conditions We Treat",
        items: [
          "Psoriasis",
          "Hidradenitis Suppurativa",
          "Atopic Dermatitis",
          "Actinic Keratosis",
          "Acne",
          "Rosacea",
          "Warts",
          "Keloid Scars",
          "Folliculitis",
          "Hyperhidrosis",
          "Alopecia",
          "Alopecia Areata",
        ],
      }}
    />
  );
}
