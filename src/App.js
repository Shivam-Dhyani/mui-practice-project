import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack
        style={{}}
        direction="row"
        justifyContent="space-between"
        // spacing={2}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
