import {
  Container,
  Divider,
  Stack,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import MenuHamburguer from "./MenuHamburguer";
import { useContext } from "react";
import { ResponsiveContext } from "@/contexts/ResponsiveProvider";
import ProgressBar from "react-scroll-progress-bar";
import TextItemMenu from "./TextitemMenu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from '@mui/icons-material/Search';

function MenuSuperior() {
  const { isMobile, isTablet, isDesktop } = useContext(ResponsiveContext);

  return (
    <Stack bgcolor="#808080" left={0} right={0} top={0} zIndex={99999}>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
          paddingY={isTablet || isMobile ? 0.4 : 2}
          mt={isTablet || isMobile ? 0.6 : 0}
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} /> {/* Ícone branco */}
                </InputAdornment>
              ),
              sx: {
                color: 'white', // Texto branco
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Linha em volta branca
                },
              }
            }}
            InputLabelProps={{ // Personalizando o estilo do rótulo
              sx: {
                color: 'white' // Cor do rótulo branco
              }
            }}
          />

          <Stack
            spacing={3}
            direction="row"
            justifyContent="space-between"
            sx={{ display: ["none", "none", "flex"] }}
          >
            <Button>
              <TextItemMenu>Home</TextItemMenu>
            </Button>
            <Button>
              <TextItemMenu>About</TextItemMenu>
            </Button>
            <Button>
              <TextItemMenu>Shop</TextItemMenu>
            </Button>
            <Button>
              <TextItemMenu>Help</TextItemMenu>
            </Button>
            <Button
              variant="contained"
              startIcon={<LocalGroceryStoreIcon />}
              sx={{
                '&:hover': {
                  backgroundColor: 'green',
                  color: 'white',
                },
              }}
            >
              <TextItemMenu>Your Cart</TextItemMenu>
            </Button>
          </Stack>
          <MenuHamburguer />
        </Stack>
      </Container>
      <ProgressBar bgcolor="#0080c7" duration="1" />
      <Divider />
    </Stack>
  );
}

export default MenuSuperior;
