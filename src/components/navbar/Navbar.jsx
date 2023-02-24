import {
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { theme } from "../../theme";
import { useState } from "react";
import "./Navbar.css";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "white",
  color: "black",
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
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
});

const UserBox = styled(Box)({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const goal = [
    { label: "ITTS" },
    { label: "as" },
    { label: "SDE" },
    { label: "by" },
    { label: "June" },
    { label: "2023" },
  ];

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
          Social Media App
        </Typography>
        <Diversity3Icon
          sx={{ display: { xs: "block", md: "none" } }}
          style={{ transform: "scale(1.5)" }}
        />
        <Search>
          <SearchIcon fontSize="large" color="disabled" />
          {/* <InputBase style={{ width: "94%" }}> */}
          <Autocomplete
            className="text"
            style={{
              width: "92%",
            }}
            options={goal}
            renderInput={(params) => (
              <TextField className="textfield" {...params} style={{}} />
            )}
          />
          {/* </InputBase> */}
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ width: "40px", height: "40px" }}
            onClick={() => setIsOpen(true)}
            src="https://mui.com/static/images/avatar/6.jpg"
          />
        </Icons>
        <UserBox onClick={() => setIsOpen(true)}>
          <Avatar
            sx={{ width: "40px", height: "40px" }}
            src="https://mui.com/static/images/avatar/6.jpg"
          />
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
