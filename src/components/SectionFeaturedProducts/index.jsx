import CarouselSolucoes from "../CarouselImages";
import Section from "../Section";
import Text from "../Text";
import { useContext } from "react";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";

export default function FeaturedProducts() {
  const { isMobile } = useContext(ResponsiveContext)
  return (
    <Section id="FeaturedProducts" sx={{ backgroundColor: '#fff' }}>
      <Text fontSize={isMobile ? 18 : 30} textAlign="center" my={4}>
        Featured Products
      </Text>
      <CarouselSolucoes />
    </Section>
  );
}
