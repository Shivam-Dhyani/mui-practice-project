import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { theme } from "../theme";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "white",
  color: "black",
  padding: "10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
});

const Icons = styled(Box)({
  backgroundColor: "white",
  color: "black",
});

const Navbar = () => {
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
        <Search>Search</Search>
        <Icons>Icon Box</Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
