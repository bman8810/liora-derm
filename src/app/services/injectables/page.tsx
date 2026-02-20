import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Injectables | Liora Dermatology & Aesthetics",
  description:
    "Non-surgical skin rejuvenation with Botox, dermal fillers, and other injectable treatments at Liora Dermatology on the Upper East Side.",
};

export default function InjectablesPage() {
  return (
    <ServicePage
      badge="Injectables"
      title="Injectables"
      titleAccent="Botox & Fillers"
      subtitle="Injectables are a non-surgical option for skin rejuvenation that is highly sought-after due to their noninvasive nature."
      whatTitle="What are Injectables?"
      whatContent={[
        "Injectables can be divided into two categories: toxins and fillers. Toxins are used to relax the muscles—a prime example is Botox. On the other hand, fillers give more shape and volume to the face. Sometimes toxins and fillers are combined to help patients achieve their desired look.",
        "You will be provided with an initial consultation to help you and the medical professional understand your medical history and cosmetic goals. Your cosmetic surgeon will inform you about the expected outcomes of certain treatment options, helping you understand possible results and determine the best treatment for you.",
        "Results are not typically permanent. Patients need to set multiple appointments to complete treatment sessions. After initial treatments, your cosmetic surgeon may suggest a schedule for follow-up appointments to maintain results.",
      ]}
      treatments={{
        heading: "Injectable Treatments",
        items: [
          "Botox",
          "Dermal Fillers",
          "Lip Enhancement",
          "Jawline Contouring",
          "Under-Eye Treatment",
          "Wrinkle Reduction",
        ],
      }}
      faqs={[
        {
          question: "How long do injectable results last?",
          answer:
            "Results vary by treatment. Botox typically lasts 3–4 months, while dermal fillers can last 6–18 months depending on the type and location of injection.",
        },
        {
          question: "Is there any downtime?",
          answer:
            "Injectables are minimally invasive with little to no downtime. Some patients may experience mild swelling or bruising that resolves within a few days.",
        },
        {
          question: "Are injectables safe?",
          answer:
            "When administered by a board-certified dermatologist, injectables are very safe. Dr. Rhee will discuss all potential risks during your consultation.",
        },
      ]}
    />
  );
}
