import Section from "@/components/Section";
import { Button, Divider, Grid, Stack } from "@mui/material";
import Text from "@/components/Text";
import { useContext } from "react";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";

export default function SectionShopNow() {
  const { isMobile, isTablet } = useContext(ResponsiveContext);

  let frameHeight = "89vh";

  if (isTablet) frameHeight = "45vh";
  if (isMobile) frameHeight = "30vh";

  return (
    <Section id="ShopNow" sx={{ backgroundColor: '#ECECEC' }}>
      <Stack spacing={5} alignItems="center" sx={{ paddingTop: 4, paddingBottom: 6 }}>
        <Text
          sx={{
            fontSize: isMobile ? 16 : 26,
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            position: "absolute",
            textAlign: "center",
          }}
        >
          TED Electronics - Your Ultimate E-Shop Destination
        </Text>
        <Divider sx={{ width: "50%", borderColor: "#888888", borderWidth: "1.5px" }} /> {/* Linha mais grossa e um pouco mais clara */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item sx={{ marginRight: isMobile || isTablet ? 2 : 0 }}>
            <img src="/images/iphone.png" width={isMobile || isTablet ? 150 : 350} />
          </Grid>
          <Grid item sx={{ marginRight: isMobile || isTablet ? 2 : 0 }}>
            <img src="/images/vision.png" width={isMobile || isTablet ? 150 : 350} />
          </Grid>
          <Grid item>
            <img src="/images/macbook.png" width={isMobile || isTablet ? 150 : 350} />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="contained" size={isMobile || isTablet ? "large" : "medium"} sx={{ '&:hover': { backgroundColor: 'green' } }} href="https://adsomos.com" target="_blank">Shop Now</Button>
          </Grid>
        </Grid>
      </Stack>
    </Section>
  );
}
