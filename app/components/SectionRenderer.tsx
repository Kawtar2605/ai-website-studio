import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";

export default function SectionRenderer({ section }: any) {
  if (!section) return null;

  switch (section.type) {
    case "hero":
      return <HeroSection {...section} />;
    case "features":
      return <FeaturesSection {...section} />;
    case "cta":
      return <CTASection {...section} />;
    default:
      return null;
  }
}