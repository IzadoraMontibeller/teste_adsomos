import { useMediaQuery, useTheme } from "@mui/material";
import { createContext } from "react";

export const ResponsiveContext = createContext(null);

function ResponsiveProvider({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // console.log("Mobile ->", isMobile);
  // console.log("Tablet -> ", isTablet);
  // console.log("Desktop -> ", isDesktop);

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export default ResponsiveProvider;
