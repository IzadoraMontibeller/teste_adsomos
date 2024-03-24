import { Typography } from "@mui/material";
import { useContext } from "react";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";


function TextItemMenu({ children }) {
  const { isMobile } = useContext(ResponsiveContext);

  return (
    <Typography
      component="a"
      href="https://adsomos.com"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: isMobile ? "#808080" : "#ffffff",
        fontFamily: "Poppins",
        fontSize: 18,
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        letterSpacing: "0.6px",
        borderRadius: 20,
        "&:hover": {
          cursor: "pointer",
        },
      }}
    >
      {children}
    </Typography>
  );
}

export default TextItemMenu;
