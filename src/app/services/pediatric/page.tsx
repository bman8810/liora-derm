import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Pediatric Dermatology | Liora Dermatology & Aesthetics",
  description:
    "Gentle, specialized dermatology care for children's skin conditions in a warm and inviting atmosphere on the Upper East Side.",
};

export default function PediatricPage() {
  return (
    <ServicePage
      badge="Pediatric"
      title="Pediatric"
      titleAccent="Dermatology"
      subtitle="The skilled experts of Liora Dermatology & Aesthetics offer patients a warm and inviting atmosphere, regardless of age."
      whatTitle="What are Pediatric Skin Conditions?"
      whatContent={[
        "There are many different skin conditions that can affect children's skin. These conditions may be difficult for a child to explain, and symptoms may be challenging for a parent to determine.",
        "If your child experiences any type of skin condition, it can lead to distress. Delaying treatment may cause the condition to worsen. Speaking with a pediatric dermatologist can help you get the answers you need—and get your child on the correct treatment path.",
      ]}
      treatments={{
        heading: "Common Pediatric Conditions We Treat",
        items: [
          "Acne",
          "Alopecia Areata",
          "Benign Growths",
          "Birthmarks",
          "Blepharitis",
          "Cellulitis",
          "Contact Allergies",
          "Eczema",
          "Head Lice",
          "Hemangiomas",
          "Rashes",
          "Skin Infections",
          "Warts",
        ],
      }}
    />
  );
}
