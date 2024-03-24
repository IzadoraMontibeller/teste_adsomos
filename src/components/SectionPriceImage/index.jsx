import { Stack, Typography } from "@mui/material";
import Section from "../Section";
import { useContext } from "react";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";
import Rating from '@mui/material/Rating';
import * as React from 'react';


export default function SectionPriceImage() {
  const { isMobile, isTablet } = useContext(ResponsiveContext);


  return (
    <Section id="PriceImage" sx={{ backgroundColor: '#fff' }}>
      <Stack
        alignItems="center"
        justifyContent={isMobile? "center" :"space-around"}
        sx={{
          flexDirection: isMobile ? 'collum' : "row",
          height: isMobile ? 350 : 550,
          width: "100%",
          padding: isMobile ? 2 : 3,
          marginTop: isMobile ? 22 : 0,
          marginBottom: isMobile ? 27 : 0,
        }}
      >
        <Stack sx={{ flexDirection: "column" }}>
          <img
            src="/images/visionPro.png"
            width={isMobile | isTablet ? 100 : 330}
          />
          <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Apple Vision Pro</Typography>
            <Rating name="read-only" value={3} size="small" readOnly />
          </Stack>
          <Typography>$3.499</Typography>
        </Stack>

        <Stack sx={{ flexDirection: "collum" }}>
          <Stack sx={{ flexDirection: "column", justifyContent:'flex-start' }}>
            <img
              src="/images/watch.png"
              width={isMobile | isTablet ? 160 : 300}
            />
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>Apple Watch</Typography>
              <Rating name="read-only" value={3} size="small" readOnly />
            </Stack>
            <Typography>$399</Typography>
          </Stack>
          <Stack sx={{ flexDirection: "column" }}>
            <img src="/images/tv.png" width={isMobile | isTablet ? 160 : 300} />
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>Apple TV</Typography>
              <Rating name="read-only" value={3} size="small" readOnly />
            </Stack>
            <Typography>$129</Typography>
          </Stack>
        </Stack>
        <Stack sx={{ flexDirection: "collum" }}>
          <Stack sx={{ flexDirection: "column" }}>
            <img
              src="/images/Imac.png"
              width={isMobile | isTablet ? 160 : 300}
            />
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>Apple Imac</Typography>
              <Rating name="read-only" value={3} size="small" readOnly />
            </Stack>
            <Typography>$1.299</Typography>
          </Stack>
          <Stack sx={{ flexDirection: "column" }}>
            <img
              src="/images/fonea.png"
              width={isMobile | isTablet ? 160 : 300}
            />
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography>Apple Airpods Max</Typography>
              <Rating name="read-only" value={3} size="small" readOnly />
            </Stack>
            <Typography>$549</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Section>
  );
}
