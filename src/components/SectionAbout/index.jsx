import { Container, Paper, Stack, Typography } from "@mui/material";
import Text from "../Text";
import Section from "../Section";
import { useContext } from "react";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";

export default function SectionAbout() {
  const { isMobile } = useContext(ResponsiveContext);

  return (
    <Section id="About" sx={{ backgroundColor: '#ECECEC' }}>
      <Stack sx={{ paddingBottom: 13 }}>
        <Text
          fontSize={isMobile ? 16 : 30}
          textAlign="center"
          my={isMobile ? 2 : 3}
        >
          About TED Eletronics
        </Text>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography>
            TED Electronics is your go-to store for high-quality electronic
            products. Established in 2000, we offer a wide range of products
            from top brands. Our dedicated team is always ready to assist you
            in finding the right product. At TED Electronics, we believe in
            making technology accessible to all. Visit us and discover why we
            are the number one choice for electronic products!
          </Typography>
        </Container>
      </Stack>
    </Section>
  );
}
