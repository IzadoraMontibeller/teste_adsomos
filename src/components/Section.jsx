import { Container } from "@mui/material";

function Section({ children, id, sx }) {
  return (
    <Container id={id} maxWidth="100%" sx={{ paddingTop: 6, ...sx }}>
      {children}
    </Container>
  );
}

export default Section;
