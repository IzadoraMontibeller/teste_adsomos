import { useContext } from "react";
import Section from "../Section";
import Text from "../Text";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";
import { Button, TextField, Typography, Stack, Divider } from "@mui/material";

export default function SectionNewslatter() {
  const { isMobile, isTablet, isDesktop } = useContext(ResponsiveContext);
  return (
    <Section id="Newsletter" sx={{ backgroundColor: '#fff' }}>
      <Divider sx={{ width: "100%", borderColor: "#888888", borderWidth: "1.5px" }} />
      <Stack
        sx={{
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: 4,
          marginTop: 6,
        }}
      >
        <Stack sx={{ flexDirection: "column" }}>
          <Text fontSize={isMobile ? 30 : 50}>Newsletter</Text>
          <Typography>
            Stay updated with our latest news, offers, and promotions. Subscribe
            to our newsletter now!
          </Typography>
        </Stack>
        <Stack sx={{ flexDirection: "row", marginTop: isMobile ? 4 : 0 }}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
          />
          <Button variant="contained" sx={{ marginLeft: 2, '&:hover': { backgroundColor: 'green' } }}>Subscribe</Button>
        </Stack>
      </Stack>
      <Divider sx={{ width: "100%", borderColor: "#888888", borderWidth: "1.5px", marginTop: 7 }} />
    </Section>
  );
}
