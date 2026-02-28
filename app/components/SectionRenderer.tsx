import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import CTASection from "./CTASection";

export default function SectionRenderer({ section, theme }: any) {
  if (!section) return null;

  switch (section.type) {
    case "hero":
      return <HeroSection {...section} theme={theme} />;

    case "features":
      return <FeaturesSection {...section} theme={theme} />;

    case "cta":
      return <CTASection {...section} theme={theme} />;

    default:
      return null;
  }
}