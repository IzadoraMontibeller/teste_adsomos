import { Stack, Typography } from "@mui/material";
import ClickableTypography from "./ClickableTypography";
import { useContext } from "react";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Rodape() {
  const { isMobile, isTablet } = useContext(ResponsiveContext);

  let frameHeight = "89vh";

  if (isTablet) frameHeight = "45vh";
  if (isMobile) frameHeight = "30vh";
  return (
    <Stack
      display={"flex"}
      flexDirection={"collum"}
      sx={{ backgroundColor: "#1C365C" }}
      padding={isMobile | isTablet ? 4 : 3}
      paddingBottom={isMobile | isTablet ? -20 : -1}
    >
      <Stack
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        marginTop={1}
      >
        <Stack
          sx={{
            marginLeft: isMobile | isTablet ? 0 : -10,
            marginTop: isMobile | isTablet ? 0 : -1,
          }}
        >
          <img src="/images/logo.png" width={isMobile | isTablet ? 160 : 220} />
          <Typography
            sx={{
              color: "white",
              fontFamily: "poppins",
              fontSize: 15,
              fontWeight: "medium",
              marginLeft: isMobile | isTablet ? 0 : 1,
              marginTop: 1,
            }}
          >
            1717 Harrison St, San Francisco,
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontFamily: "poppins",
              fontSize: 15,
              fontWeight: "medium",
              marginLeft: isMobile | isTablet ? 0 : 1,
              marginTop: 0,
            }}
          >
            CA 94103, USA
          </Typography>
        </Stack>
        <Stack marginLeft={isMobile ? -20 : 0}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "poppins",
              fontSize: 15,
              fontWeight: "medium",
              marginTop: isMobile | isTablet ? 20 : 0,
              marginLeft: isMobile | isTablet ? 0 : 0,
              marginRight: isMobile | isTablet ? -5 : 0,
              marginBottom: isMobile | isTablet ? 0 : 2,
            }}
          >
            MAIN MENU
          </Typography>
          <ClickableTypography href="https://adsomos.com">Home</ClickableTypography>
          <ClickableTypography href="https://adsomos.com">About</ClickableTypography>
          <ClickableTypography href="https://adsomos.com">Shop</ClickableTypography>
          <ClickableTypography href="https://adsomos.com">Help</ClickableTypography>
        </Stack>
        <Stack marginLeft={isMobile ? 7 : 0}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "poppins",
              fontSize: 15,
              fontWeight: "medium",
              marginTop: isMobile | isTablet ? 20 : 0,
              marginLeft: isMobile | isTablet ? 0 : 0,
              marginRight: isMobile | isTablet ? 0 : 0,
              marginBottom: isMobile | isTablet ? 0 : 2,
            }}
          >
            COMPANY
          </Typography>
          <ClickableTypography href="https://adsomos.com">The Company</ClickableTypography>
          <ClickableTypography href="https://adsomos.com">Careers</ClickableTypography>
          <ClickableTypography href="https://adsomos.com">Press</ClickableTypography>
        </Stack>
        <Stack marginLeft={isMobile ? 2 : 0}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "poppins",
              fontSize: 15,
              fontWeight: "medium",
              marginTop: isMobile | isTablet ? 20 : 0,
              marginLeft: isMobile | isTablet ? 0 : 0,
              marginRight: isMobile | isTablet ? 0 : 0,
              marginBottom: isMobile | isTablet ? 0 : 2,
            }}
          >
            DISCOVER
          </Typography>
          <ClickableTypography href="https://adsomos.com">The Team</ClickableTypography>
          <ClickableTypography href="https://adsomos.com" >Our History</ClickableTypography>
          <ClickableTypography href="https://adsomos.com">Brand Motto</ClickableTypography>
        </Stack>
        <Stack marginLeft={isMobile ? 2 : 0}>
          <Typography
            sx={{
              color: "white",
              fontFamily: "poppins",
              fontSize: 15,
              fontWeight: "medium",
              marginTop: isMobile | isTablet ? 20 : 0,
              marginLeft: isMobile | isTablet ? 0 : 0,
              marginRight: isMobile | isTablet ? -5 : 0,
              marginBottom: isMobile | isTablet ? 0 : 2,
            }}
          >
            FIND US ON
          </Typography>
          <ClickableTypography href="https://adsomos.com">Facebook</ClickableTypography>
          <ClickableTypography href="https://adsomos.com">Twitter</ClickableTypography>
          <ClickableTypography href="https://adsomos.com">Instagram</ClickableTypography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          marginTop: isMobile | isTablet ? 3 : 2,
          marginLeft: isMobile | isTablet ? 8 : 6.5,
          flexDirection: "row",
          alignItems: "center",
          alignItems: "center",
        }}
      >
        <CopyrightIcon sx={{ color: 'white' }} />
        <Typography
          sx={{
            color: "white",
            fontFamily: "poppins",
            fontSize: 11,
            fontWeight: "medium",
            marginLeft: 1,
          }}
        >
          TED Eletronics
        </Typography>
      </Stack>
    </Stack>
  );
}
