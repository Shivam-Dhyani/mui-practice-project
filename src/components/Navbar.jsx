import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../theme";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "white",
  color: "black",
  padding: "5px 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Icons = styled(Box)({
  display: "none",
  gap: "30px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
});

const UserBox = styled(Box)({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Social Media App
        </Typography>
        <Diversity3Icon
          sx={{ display: { xs: "block", sm: "none" } }}
          style={{ transform: "scale(1.5)" }}
        />
        <Search>
          <SearchIcon fontSize="large" color="disabled" />
          <InputBase style={{ width: "94%" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            onClick={() => setIsOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setIsOpen(true)}>
          <Avatar sx={{ width: "30px", height: "30px" }} />
          <Typography>John</Typography>
        </UserBox>
        <Menu
          id="demo-positioned-menu"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
