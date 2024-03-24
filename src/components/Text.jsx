import { Typography } from "@mui/material";

export default function (props) {
  return (
    <Typography
      color="#626262"
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontWeight:'600'
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
}
