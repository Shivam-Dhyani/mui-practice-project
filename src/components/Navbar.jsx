import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
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
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
