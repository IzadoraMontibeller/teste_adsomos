import { Typography } from "@mui/material";
import React from "react";

function ClickableTypography({ children, href }) {
  const [hovered, setHovered] = React.useState(false);

  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Typography
      sx={{
        color: "white",
        fontFamily: "poppins",
        fontSize: 15,
        fontWeight: "medium",
        marginTop: 0.3,
        cursor: hovered ? "pointer" : "default", // Mudando o cursor quando o mouse passa por cima
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      {children}
    </Typography>
  );
}

export default ClickableTypography;
