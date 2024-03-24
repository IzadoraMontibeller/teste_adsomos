import { Drawer, Stack, TextField, Button, InputAdornment, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import TextItemMenu from "../TextitemMenu";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from '@mui/icons-material/Search';

function MenuHamburguer() {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <IconButton
        onClick={toogleMenu}
        sx={{ display: ["flex", "flex", "none"] }}
      >
        <MdMenu color="#fff" size={30} />
      </IconButton>
      <Drawer
        anchor="right"
        open={showMenu}
        onClick={toogleMenu}
        ModalProps={{
          sx: {
            zIndex: 9999999,
          },
        }}
      >
        <Stack padding={2} position="relative" spacing={3} width={200} marginLeft={1}>
          <IconButton
            onClick={toogleMenu}
            sx={{
              display: ["flex", "flex", "none"],
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <MdClose color="#5B5B5B" size={35} />
          </IconButton>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
              }
            }}
            InputLabelProps={{
              sx: {
                color: 'white'
              }
            }}
          />
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
            href="https://adsomos.com"
            target="_blank"
            startIcon={<LocalGroceryStoreIcon />}
            sx={{
              color: 'white',
              '&:hover': {
                backgroundColor: 'green',
                color: 'white',
              },
            }}
          >
            <Typography >Your Cart</Typography>
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}

export default MenuHamburguer;
